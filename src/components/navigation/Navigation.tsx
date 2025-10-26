import Icon from '@/components/ui/icon';

type Page = 'home' | 'generator' | 'faq';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <Icon name="Sparkles" className="text-primary" size={28} />
            <span className="font-heading text-xl font-bold gradient-text">AI Site Gen</span>
          </div>
          
          <div className="flex gap-6">
            <button
              onClick={() => onNavigate('home')}
              className={`font-medium transition-colors ${
                currentPage === 'home' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Главная
            </button>
            <button
              onClick={() => onNavigate('generator')}
              className={`font-medium transition-colors ${
                currentPage === 'generator' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Генератор
            </button>
            <button
              onClick={() => onNavigate('faq')}
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
  );
}
