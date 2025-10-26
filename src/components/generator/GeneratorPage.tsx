import { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface GeneratorPageProps {
  messages: Message[];
  input: string;
  previewHTML: string;
  isEditingHTML: boolean;
  editableHTML: string;
  onInputChange: (value: string) => void;
  onSend: () => void;
  onClearChat: () => void;
  onToggleHTMLEditor: () => void;
  onEditableHTMLChange: (value: string) => void;
  onExport: () => void;
  onPublish: () => void;
}

export function GeneratorPage({
  messages,
  input,
  previewHTML,
  isEditingHTML,
  editableHTML,
  onInputChange,
  onSend,
  onClearChat,
  onToggleHTMLEditor,
  onEditableHTMLChange,
  onExport,
  onPublish
}: GeneratorPageProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="h-screen flex flex-col">
      <div className="p-4 border-b border-border bg-card/50 backdrop-blur">
        <h2 className="font-heading text-2xl font-bold gradient-text">AI Генератор Сайтов</h2>
      </div>
      
      <div className="flex-1 grid md:grid-cols-2 gap-0 overflow-hidden">
        <div className="flex flex-col border-r border-border">
          <div className="p-4 border-b border-border bg-muted/30 flex items-center justify-between">
            <h3 className="font-heading font-semibold flex items-center gap-2">
              <Icon name="MessageSquare" size={20} />
              AI Ассистент
            </h3>
            <Button variant="ghost" size="sm" onClick={onClearChat}>
              <Icon name="RefreshCw" size={16} className="mr-1" />
              Очистить
            </Button>
          </div>
          
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4 pb-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-lg ${
                      msg.role === 'user'
                        ? 'bg-primary text-primary-foreground ml-4'
                        : 'bg-muted mr-4'
                    }`}
                  >
                    <div className="whitespace-pre-wrap break-words">{msg.content}</div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>
          
          <div className="p-4 border-t border-border bg-card/50 backdrop-blur">
            <div className="flex gap-2">
              <Textarea
                placeholder="Опиши свой сайт..."
                value={input}
                onChange={(e) => onInputChange(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), onSend())}
                className="resize-none"
                rows={2}
              />
              <Button onClick={onSend} size="icon" className="h-auto">
                <Icon name="Send" size={20} />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-muted/20">
          <div className="p-4 border-b border-border bg-muted/30 flex items-center justify-between">
            <h3 className="font-heading font-semibold flex items-center gap-2">
              <Icon name="Monitor" size={20} />
              Предпросмотр Сайта
            </h3>
            <div className="flex gap-2">
              <Button 
                variant={isEditingHTML ? "default" : "outline"} 
                size="sm" 
                onClick={onToggleHTMLEditor}
              >
                <Icon name="Code" size={16} className="mr-1" />
                {isEditingHTML ? 'Превью' : 'HTML'}
              </Button>
              <Button variant="outline" size="sm" onClick={onExport}>
                <Icon name="Download" size={16} className="mr-1" />
                Скачать
              </Button>
              <Button variant="default" size="sm" onClick={onPublish}>
                <Icon name="Globe" size={16} className="mr-1" />
                Опубликовать
              </Button>
            </div>
          </div>
          
          <div className="flex-1 overflow-auto bg-white">
            {isEditingHTML ? (
              <Textarea
                value={editableHTML}
                onChange={(e) => onEditableHTMLChange(e.target.value)}
                className="w-full h-full font-mono text-sm resize-none border-0 rounded-none"
                placeholder="HTML код вашего сайта..."
              />
            ) : (
              <iframe
                srcDoc={previewHTML}
                className="w-full h-full border-0"
                title="Website Preview"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
