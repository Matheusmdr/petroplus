import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, FileText, X, ExternalLink } from 'lucide-react';

interface DocumentUploadProps {
  label: string;
  description?: string;
  accept?: string;
  value: File | null;
  existingFile?: { name: string; file_path: string } | null;
  onChange: (file: File | null) => void;
  onRemoveExisting?: () => void;
  error?: string;
}

export default function DocumentUpload({
  label,
  description,
  accept = '.pdf,.doc,.docx',
  value,
  existingFile,
  onChange,
  onRemoveExisting,
  error,
}: DocumentUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const getDocUrl = (filePath: string) => {
    if (filePath.startsWith('http') || filePath.startsWith('/'))
      return filePath;
    return `/storage/${filePath}`;
  };

  return (
    <div className="space-y-2">
      <label className="text-sm leading-none font-medium">{label}</label>
      {description && (
        <p className="text-xs text-muted-foreground">{description}</p>
      )}

      {/* Existing file indicator */}
      {existingFile && !value && (
        <div className="flex items-center justify-between rounded-md border border-green-200 bg-green-50 px-3 py-2 dark:border-green-900 dark:bg-green-950/30">
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-green-600" />
            <div>
              <p className="text-sm font-medium text-green-800 dark:text-green-300">
                {existingFile.name}
              </p>
              <p className="text-xs text-green-600">Arquivo atual</p>
            </div>
          </div>
          <div className="flex gap-1">
            <a
              href={getDocUrl(existingFile.file_path)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="h-7 w-7 p-0"
              >
                <ExternalLink className="h-3.5 w-3.5" />
              </Button>
            </a>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="h-7 w-7 p-0 text-red-500 hover:text-red-700"
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="h-3.5 w-3.5" />
            </Button>
            {onRemoveExisting && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="h-7 w-7 p-0 text-red-500 hover:text-red-700"
                onClick={onRemoveExisting}
              >
                <X className="h-3.5 w-3.5" />
              </Button>
            )}
          </div>
        </div>
      )}

      {/* New file selected */}
      {value && (
        <div className="flex items-center justify-between rounded-md border border-blue-200 bg-blue-50 px-3 py-2 dark:border-blue-900 dark:bg-blue-950/30">
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-blue-600" />
            <div>
              <p className="text-sm font-medium text-blue-800 dark:text-blue-300">
                {value.name}
              </p>
              <p className="text-xs text-blue-600">
                Novo arquivo • {(value.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          </div>
          <div className="flex gap-1">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="h-7 w-7 p-0 text-blue-600"
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="h-3.5 w-3.5" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="h-7 w-7 p-0 text-red-500 hover:text-red-700"
              onClick={() => onChange(null)}
            >
              <X className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      )}

      {/* Upload button (shown when no file is present) */}
      {!existingFile && !value && (
        <div
          onClick={() => fileInputRef.current?.click()}
          className="flex cursor-pointer items-center justify-center gap-2 rounded-md border-2 border-dashed border-muted-foreground/25 py-4 transition-colors hover:border-primary/50 hover:bg-muted/50"
        >
          <Upload className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            Clique para selecionar o arquivo
          </span>
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0] || null;
          onChange(file);
          e.target.value = '';
        }}
      />

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
