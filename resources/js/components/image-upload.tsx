import { useState, useRef, useCallback } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Upload, X, Crop, RotateCw, ZoomIn, ZoomOut } from 'lucide-react';

interface ImageUploadProps {
  value?: string | null;
  onChange: (file: File | null) => void;
  aspectRatio?: number;
  label?: string;
  previewClassName?: string;
  accept?: string;
  maxSize?: number; // in MB
  circular?: boolean;
  disableCrop?: boolean;
}

export default function ImageUpload({
  value,
  onChange,
  aspectRatio,
  label = 'Selecionar imagem',
  previewClassName = 'h-32 w-32',
  accept = 'image/*',
  maxSize = 4,
  circular = false,
  disableCrop = false,
}: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [rawFile, setRawFile] = useState<string | null>(null);
  const [showCropDialog, setShowCropDialog] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const cropperRef = useRef<HTMLImageElement & { cropper: Cropper }>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const getExistingImageUrl = (img: string | null | undefined) => {
    if (!img) return null;
    if (
      img.startsWith('http') ||
      img.startsWith('/') ||
      img.startsWith('blob:') ||
      img.startsWith('data:')
    )
      return img;
    return `/storage/${img}`;
  };

  const handleFileSelect = useCallback(
    (file: File) => {
      if (file.size > maxSize * 1024 * 1024) {
        alert(`O arquivo deve ter no máximo ${maxSize}MB`);
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        if (disableCrop) {
          setPreview(reader.result as string);
          onChange(file);
        } else {
          setRawFile(reader.result as string);
          setShowCropDialog(true);
        }
      };
      reader.readAsDataURL(file);
    },
    [maxSize, disableCrop, onChange],
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFileSelect(file);
    // Reset input so same file can be selected again
    e.target.value = '';
  };

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files?.[0];
      if (file && file.type.startsWith('image/')) {
        handleFileSelect(file);
      }
    },
    [handleFileSelect],
  );

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleCrop = () => {
    const cropper = cropperRef.current?.cropper;
    if (!cropper) return;

    const canvas = cropper.getCroppedCanvas({
      maxWidth: 1200,
      maxHeight: 1200,
      imageSmoothingEnabled: true,
      imageSmoothingQuality: 'high',
    });

    canvas.toBlob(
      (blob) => {
        if (!blob) return;
        const croppedFile = new File([blob], 'cropped-image.webp', {
          type: 'image/webp',
        });
        const previewUrl = URL.createObjectURL(blob);
        setPreview(previewUrl);
        onChange(croppedFile);
        setShowCropDialog(false);
        setRawFile(null);
      },
      'image/webp',
      0.9,
    );
  };

  const handleRemove = () => {
    setPreview(null);
    onChange(null);
  };

  const currentPreview = preview || getExistingImageUrl(value);

  return (
    <>
      <div className="space-y-3">
        {/* Preview / Drop Zone */}
        {currentPreview ? (
          <div className="relative inline-block">
            <div
              className={`overflow-hidden border-2 border-dashed border-muted-foreground/25 ${circular ? 'rounded-full' : 'rounded-lg'} ${previewClassName}`}
            >
              <img
                src={currentPreview}
                alt="Preview"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-2 flex gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="text-xs"
                onClick={() => fileInputRef.current?.click()}
              >
                <Upload className="mr-1 h-3 w-3" />
                Trocar
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="text-xs text-red-500 hover:text-red-700"
                onClick={handleRemove}
              >
                <X className="mr-1 h-3 w-3" />
                Remover
              </Button>
            </div>
          </div>
        ) : (
          <div
            onClick={() => fileInputRef.current?.click()}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`flex cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed transition-colors ${previewClassName} ${
              isDragging
                ? 'border-primary bg-primary/5'
                : 'border-muted-foreground/25 hover:border-primary/50 hover:bg-muted/50'
            }`}
          >
            <div className="rounded-full bg-muted p-3">
              <Upload className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-muted-foreground">
                {label}
              </p>
              <p className="text-xs text-muted-foreground/70">
                Arraste ou clique para selecionar
              </p>
            </div>
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          className="hidden"
          onChange={handleInputChange}
        />
      </div>

      {/* Crop Dialog */}
      <Dialog open={showCropDialog} onOpenChange={setShowCropDialog}>
        <DialogContent className="sm:max-w-[700px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Crop className="h-5 w-5" />
              Recortar Imagem
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            {rawFile && (
              <div className="overflow-hidden rounded-lg bg-muted/30">
                <Cropper
                  ref={cropperRef as any}
                  src={rawFile}
                  style={{ height: 400, width: '100%' }}
                  aspectRatio={aspectRatio}
                  viewMode={1}
                  guides={true}
                  minCropBoxHeight={50}
                  minCropBoxWidth={50}
                  background={true}
                  responsive={true}
                  autoCropArea={0.8}
                  checkOrientation={false}
                />
              </div>
            )}

            {/* Crop Controls */}
            <div className="flex items-center justify-center gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => cropperRef.current?.cropper?.zoom(0.1)}
                title="Zoom In"
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => cropperRef.current?.cropper?.zoom(-0.1)}
                title="Zoom Out"
              >
                <ZoomOut className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => cropperRef.current?.cropper?.rotate(90)}
                title="Rotacionar"
              >
                <RotateCw className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => cropperRef.current?.cropper?.reset()}
                title="Resetar"
              >
                Resetar
              </Button>
            </div>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setShowCropDialog(false);
                setRawFile(null);
              }}
            >
              Cancelar
            </Button>
            <Button type="button" onClick={handleCrop}>
              <Crop className="mr-2 h-4 w-4" />
              Aplicar Recorte
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
