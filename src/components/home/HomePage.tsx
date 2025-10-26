import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface HomePageProps {
  onNavigateToGenerator: () => void;
}

export function HomePage({ onNavigateToGenerator }: HomePageProps) {
  return (
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
              onClick={onNavigateToGenerator}
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
}
