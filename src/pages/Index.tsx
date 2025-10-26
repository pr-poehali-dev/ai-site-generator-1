import { useState } from 'react';
import { Navigation } from '@/components/navigation/Navigation';
import { HomePage } from '@/components/home/HomePage';
import { GeneratorPage } from '@/components/generator/GeneratorPage';
import { FAQPage } from '@/components/faq/FAQPage';
import { PublishDialog } from '@/components/publish/PublishDialog';
import { generateVariedHTML } from '@/components/generator/htmlTemplates';

type Page = 'home' | 'generator' | 'faq';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

function Index() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Привет! Я AI-ассистент для создания сайтов. Расскажи, какой сайт ты хочешь создать?' }
  ]);
  const [input, setInput] = useState('');
  const [previewHTML, setPreviewHTML] = useState('<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#fff;font-family:sans-serif;">Здесь появится ваш сайт</div>');
  const [siteVersion, setSiteVersion] = useState(0);
  const [showPublishDialog, setShowPublishDialog] = useState(false);
  const [siteName, setSiteName] = useState('');
  const [publishedUrl, setPublishedUrl] = useState('');
  const [isEditingHTML, setIsEditingHTML] = useState(false);
  const [editableHTML, setEditableHTML] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    
    setTimeout(() => {
      const responses = [
        'Отлично! Какие основные разделы должны быть на сайте?',
        'Хорошая идея! Какой стиль дизайна предпочитаешь: минималистичный, яркий или корпоративный?',
        'Понял! Нужна ли форма обратной связи на сайте?',
        'Супер! Давай добавим главную страницу с описанием.',
        'Понравилось! Какую цветовую схему хочешь использовать?',
        'Круто! Добавим анимации или оставим строгий стиль?'
      ];
      const response = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      
      const newVersion = siteVersion + 1;
      setSiteVersion(newVersion);
      setPreviewHTML(generateVariedHTML(input, newVersion));
    }, 500);
    
    setInput('');
  };

  const handleClearChat = () => {
    setMessages([{ role: 'assistant', content: 'Привет! Я AI-ассистент для создания сайтов. Расскажи, какой сайт ты хочешь создать?' }]);
    setPreviewHTML('<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#fff;font-family:sans-serif;">Здесь появится ваш сайт</div>');
    setSiteVersion(0);
  };

  const handleExport = () => {
    const htmlToExport = isEditingHTML ? editableHTML : previewHTML;
    const blob = new Blob([htmlToExport], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'my-site.html';
    a.click();
    URL.revokeObjectURL(url);
  };

  const toggleHTMLEditor = () => {
    if (!isEditingHTML) {
      setEditableHTML(previewHTML);
    } else {
      setPreviewHTML(editableHTML);
    }
    setIsEditingHTML(!isEditingHTML);
  };

  const handlePublish = () => {
    if (!siteName.trim()) return;
    
    const generatedUrl = `https://${siteName.toLowerCase().replace(/\s+/g, '-')}.ai-gen.site`;
    setPublishedUrl(generatedUrl);
    
    setTimeout(() => {
      setShowPublishDialog(false);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: `Отлично! Твой сайт опубликован по адресу: ${generatedUrl}` 
      }]);
    }, 1000);
  };

  return (
    <>
      <PublishDialog
        open={showPublishDialog}
        siteName={siteName}
        publishedUrl={publishedUrl}
        onOpenChange={setShowPublishDialog}
        onSiteNameChange={setSiteName}
        onPublish={handlePublish}
      />

      <div className="min-h-screen bg-background text-foreground">
        <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />

        {currentPage === 'home' && (
          <HomePage onNavigateToGenerator={() => setCurrentPage('generator')} />
        )}
        
        {currentPage === 'generator' && (
          <GeneratorPage
            messages={messages}
            input={input}
            previewHTML={previewHTML}
            isEditingHTML={isEditingHTML}
            editableHTML={editableHTML}
            onInputChange={setInput}
            onSend={handleSend}
            onClearChat={handleClearChat}
            onToggleHTMLEditor={toggleHTMLEditor}
            onEditableHTMLChange={setEditableHTML}
            onExport={handleExport}
            onPublish={() => setShowPublishDialog(true)}
          />
        )}
        
        {currentPage === 'faq' && <FAQPage />}
      </div>
    </>
  );
}

export default Index;
