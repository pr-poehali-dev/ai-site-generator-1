import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

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
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const generateVariedHTML = (userInput: string, version: number) => {
    const templates = [
      {
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        textColor: 'white',
        buttonBg: 'white',
        buttonColor: '#667eea'
      },
      {
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        textColor: 'white',
        buttonBg: 'rgba(255,255,255,0.9)',
        buttonColor: '#f5576c'
      },
      {
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        textColor: 'white',
        buttonBg: 'white',
        buttonColor: '#00f2fe'
      },
      {
        gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        textColor: '#1a1a1a',
        buttonBg: '#1a1a1a',
        buttonColor: 'white'
      },
      {
        gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        textColor: 'white',
        buttonBg: 'rgba(255,255,255,0.95)',
        buttonColor: '#fa709a'
      },
      {
        gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
        textColor: 'white',
        buttonBg: 'white',
        buttonColor: '#330867'
      }
    ];
    
    const template = templates[version % templates.length];
    
    return `
      <div style="background: ${template.gradient}; color: ${template.textColor}; padding: 60px 20px; font-family: 'Arial', sans-serif; min-height: 100%;">
        <h1 style="font-size: 48px; margin-bottom: 20px; text-align: center; animation: fadeIn 0.5s;">Ваш Новый Сайт</h1>
        <p style="font-size: 20px; text-align: center; opacity: 0.9; max-width: 600px; margin: 0 auto;">${userInput}</p>
        <div style="margin-top: 40px; text-align: center;">
          <button style="background: ${template.buttonBg}; color: ${template.buttonColor}; border: none; padding: 15px 40px; font-size: 18px; border-radius: 8px; cursor: pointer; box-shadow: 0 4px 15px rgba(0,0,0,0.2); transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">Начать</button>
        </div>
      </div>
    `;
  };

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

  const renderHome = () => (
    <div className="min-h-screen">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(14, 165, 233, 0.15) 0%, transparent 50%)'
        }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center mb-16">
            <h1 className="font-heading text-6xl md:text-7xl font-bold mb-6 gradient-text">
              Генератор Сайтов
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-foreground/90">
              Создай сайт мечты через AI
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Просто опиши что хочешь — искусственный интеллект создаст готовый сайт за минуты
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 pulse-glow"
              onClick={() => setCurrentPage('generator')}
            >
              <Icon name="Sparkles" className="mr-2" size={20} />
              Начать создание
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <Card className="p-6 card-glow hover:scale-105 transition-transform duration-300">
              <div className="mb-4 text-primary">
                <Icon name="Wand2" size={40} />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">AI Генерация</h3>
              <p className="text-muted-foreground">
                Умный ассистент задаст вопросы и создаст идеальный сайт под твои нужды
              </p>
            </Card>

            <Card className="p-6 card-glow hover:scale-105 transition-transform duration-300">
              <div className="mb-4 text-secondary">
                <Icon name="Layout" size={40} />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">Live Preview</h3>
              <p className="text-muted-foreground">
                Видь изменения в реальном времени — сайт создаётся прямо на твоих глазах
              </p>
            </Card>

            <Card className="p-6 card-glow hover:scale-105 transition-transform duration-300">
              <div className="mb-4 text-accent">
                <Icon name="Image" size={40} />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">Генерация Контента</h3>
              <p className="text-muted-foreground">
                AI создаст тексты, подберёт изображения и настроит дизайн автоматически
              </p>
            </Card>
          </div>

          <div className="mt-20 text-center">
            <img 
              src="https://cdn.poehali.dev/projects/387c44ef-34ab-483c-8864-8ab1ebb80465/files/9aaeaaa9-7d9e-4da8-9e57-c6de436b0b9f.jpg"
              alt="AI Technology"
              className="rounded-2xl shadow-2xl mx-auto max-w-3xl w-full card-glow animate-float"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderGenerator = () => (
    <div className="h-screen flex flex-col">
      <div className="p-4 border-b border-border bg-card/50 backdrop-blur">
        <h2 className="font-heading text-2xl font-bold gradient-text">AI Генератор Сайтов</h2>
      </div>
      
      <div className="flex-1 grid md:grid-cols-2 gap-0 overflow-hidden">
        <div className="flex flex-col border-r border-border">
          <div className="p-4 border-b border-border bg-muted/30">
            <h3 className="font-heading font-semibold flex items-center gap-2">
              <Icon name="MessageSquare" size={20} />
              AI Ассистент
            </h3>
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
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())}
                className="resize-none"
                rows={2}
              />
              <Button onClick={handleSend} size="icon" className="h-auto">
                <Icon name="Send" size={20} />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-muted/20">
          <div className="p-4 border-b border-border bg-muted/30">
            <h3 className="font-heading font-semibold flex items-center gap-2">
              <Icon name="Monitor" size={20} />
              Предпросмотр Сайта
            </h3>
          </div>
          
          <div className="flex-1 overflow-auto bg-white">
            <iframe
              srcDoc={previewHTML}
              className="w-full h-full border-0"
              title="Website Preview"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderFAQ = () => (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="font-heading text-5xl font-bold mb-4 text-center gradient-text">
          Часто задаваемые вопросы
        </h1>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Всё что нужно знать о генераторе сайтов
        </p>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="border border-border rounded-lg px-6 bg-card/50">
            <AccordionTrigger className="text-lg font-semibold">
              Как работает AI генератор?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              AI-ассистент задаёт вопросы о вашем проекте, анализирует ответы и автоматически создаёт структуру сайта, 
              дизайн, контент и изображения. Вы видите результат в режиме реального времени.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border border-border rounded-lg px-6 bg-card/50">
            <AccordionTrigger className="text-lg font-semibold">
              Могу ли я редактировать созданный сайт?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Да! После генерации вы можете продолжить диалог с AI и попросить внести изменения. 
              Просто опишите что хотите изменить, и ассистент обновит сайт.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border border-border rounded-lg px-6 bg-card/50">
            <AccordionTrigger className="text-lg font-semibold">
              Сколько страниц можно создать?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Вы можете создать неограниченное количество страниц: главную, о компании, услуги, контакты, FAQ и любые другие. 
              Просто укажите это в диалоге с AI.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border border-border rounded-lg px-6 bg-card/50">
            <AccordionTrigger className="text-lg font-semibold">
              AI генерирует изображения?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Да! AI может создавать уникальные изображения для вашего сайта на основе описания. 
              Также можно использовать свои изображения.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border border-border rounded-lg px-6 bg-card/50">
            <AccordionTrigger className="text-lg font-semibold text-destructive">
              ⚠️ Правила использования
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <div className="space-y-2">
                <p className="font-semibold text-destructive">Запрещено создавать сайты:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>С контентом для взрослых (18+)</li>
                  <li>С незаконным контентом</li>
                  <li>Нарушающие авторские права</li>
                  <li>Пропагандирующие насилие или дискриминацию</li>
                </ul>
                <p className="mt-4 text-sm">
                  Нарушение правил приведёт к блокировке аккаунта без возможности восстановления.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border border-border rounded-lg px-6 bg-card/50">
            <AccordionTrigger className="text-lg font-semibold">
              Как скачать готовый сайт?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              После создания сайта вы получите готовый HTML/CSS/JS код, который можно скачать и разместить 
              на любом хостинге.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
              <Icon name="Sparkles" className="text-primary" size={28} />
              <span className="font-heading text-xl font-bold gradient-text">AI Site Gen</span>
            </div>
            
            <div className="flex gap-6">
              <button
                onClick={() => setCurrentPage('home')}
                className={`font-medium transition-colors ${
                  currentPage === 'home' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => setCurrentPage('generator')}
                className={`font-medium transition-colors ${
                  currentPage === 'generator' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Генератор
              </button>
              <button
                onClick={() => setCurrentPage('faq')}
                className={`font-medium transition-colors ${
                  currentPage === 'faq' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                FAQ
              </button>
            </div>
          </div>
        </div>
      </nav>

      {currentPage === 'home' && renderHome()}
      {currentPage === 'generator' && renderGenerator()}
      {currentPage === 'faq' && renderFAQ()}
    </div>
  );
}

export default Index;