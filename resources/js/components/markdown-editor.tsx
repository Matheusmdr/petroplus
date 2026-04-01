import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Heading2,
  Heading3,
  Eye,
  Pencil,
  Quote,
  Minus,
} from 'lucide-react';

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  minRows?: number;
  label?: string;
  error?: string;
}

export default function MarkdownEditor({
  value,
  onChange,
  placeholder = 'Escreva usando Markdown...',
  minRows = 12,
  label,
  error,
}: MarkdownEditorProps) {
  const [mode, setMode] = useState<'edit' | 'preview'>('edit');
  const textareaId = `md-editor-${label?.replace(/\s/g, '-') || 'default'}`;

  const insertMarkdown = useCallback(
    (prefix: string, suffix = '', placeholder_text = '') => {
      const textarea = document.getElementById(
        textareaId,
      ) as HTMLTextAreaElement;
      if (!textarea) return;

      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const selectedText = value.substring(start, end) || placeholder_text;
      const before = value.substring(0, start);
      const after = value.substring(end);

      const newValue = `${before}${prefix}${selectedText}${suffix}${after}`;
      onChange(newValue);

      // Restore cursor position
      setTimeout(() => {
        textarea.focus();
        const cursorPos = start + prefix.length + selectedText.length;
        textarea.setSelectionRange(cursorPos, cursorPos);
      }, 10);
    },
    [value, onChange, textareaId],
  );

  const toolbarActions = [
    {
      icon: Bold,
      title: 'Negrito',
      action: () => insertMarkdown('**', '**', 'texto em negrito'),
    },
    {
      icon: Italic,
      title: 'Itálico',
      action: () => insertMarkdown('*', '*', 'texto em itálico'),
    },
    { type: 'separator' as const },
    {
      icon: Heading2,
      title: 'Título H2',
      action: () => insertMarkdown('\n## ', '\n', 'Título'),
    },
    {
      icon: Heading3,
      title: 'Título H3',
      action: () => insertMarkdown('\n### ', '\n', 'Subtítulo'),
    },
    { type: 'separator' as const },
    {
      icon: List,
      title: 'Lista',
      action: () => insertMarkdown('\n- ', '\n', 'Item da lista'),
    },
    {
      icon: ListOrdered,
      title: 'Lista Numerada',
      action: () => insertMarkdown('\n1. ', '\n', 'Item da lista'),
    },
    { type: 'separator' as const },
    {
      icon: Quote,
      title: 'Citação',
      action: () => insertMarkdown('\n> ', '\n', 'Citação'),
    },
    {
      icon: Minus,
      title: 'Linha Horizontal',
      action: () => insertMarkdown('\n---\n', ''),
    },
  ];

  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          {label}
        </label>
      )}

      <div className="overflow-hidden rounded-lg border border-input">
        {/* Toolbar */}
        <div className="flex items-center gap-0.5 border-b bg-muted/30 px-2 py-1.5">
          {/* Mode Toggle */}
          <div className="mr-2 flex overflow-hidden rounded-md border">
            <Button
              type="button"
              variant={mode === 'edit' ? 'default' : 'ghost'}
              size="sm"
              className="h-7 rounded-none px-2.5 text-xs"
              onClick={() => setMode('edit')}
            >
              <Pencil className="mr-1 h-3 w-3" />
              Editar
            </Button>
            <Button
              type="button"
              variant={mode === 'preview' ? 'default' : 'ghost'}
              size="sm"
              className="h-7 rounded-none px-2.5 text-xs"
              onClick={() => setMode('preview')}
            >
              <Eye className="mr-1 h-3 w-3" />
              Preview
            </Button>
          </div>

          {mode === 'edit' && (
            <>
              <div className="h-5 w-px bg-border" />
              <div className="ml-1 flex items-center gap-0.5">
                {toolbarActions.map((item, index) => {
                  if ('type' in item && item.type === 'separator') {
                    return (
                      <div
                        key={`sep-${index}`}
                        className="mx-0.5 h-5 w-px bg-border"
                      />
                    );
                  }
                  if (!('icon' in item)) return null;
                  const Icon = item.icon;
                  return (
                    <Button
                      key={item.title}
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="h-7 w-7 p-0"
                      onClick={item.action}
                      title={item.title}
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </Button>
                  );
                })}
              </div>
            </>
          )}
        </div>

        {/* Content */}
        {mode === 'edit' ? (
          <Textarea
            id={textareaId}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            rows={minRows}
            className="resize-y rounded-none border-0 font-mono text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        ) : (
          <div
            className="prose prose-sm max-w-none p-4"
            style={{ minHeight: `${minRows * 1.5}rem` }}
          >
            {value ? (
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{value}</ReactMarkdown>
            ) : (
              <p className="text-muted-foreground italic">
                Nenhum conteúdo para visualizar...
              </p>
            )}
          </div>
        )}
      </div>

      {/* Helper text */}
      <p className="text-xs text-muted-foreground">
        Suporta Markdown: **negrito**, *itálico*, ## títulos, - listas, etc.
      </p>

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
