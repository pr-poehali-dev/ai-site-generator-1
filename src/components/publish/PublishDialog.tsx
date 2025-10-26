import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

interface PublishDialogProps {
  open: boolean;
  siteName: string;
  publishedUrl: string;
  onOpenChange: (open: boolean) => void;
  onSiteNameChange: (name: string) => void;
  onPublish: () => void;
}

export function PublishDialog({
  open,
  siteName,
  publishedUrl,
  onOpenChange,
  onSiteNameChange,
  onPublish
}: PublishDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl gradient-text">Опубликовать Сайт</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="siteName">Название сайта</Label>
            <Input
              id="siteName"
              placeholder="my-awesome-site"
              value={siteName}
              onChange={(e) => onSiteNameChange(e.target.value)}
            />
            {siteName && (
              <p className="text-sm text-muted-foreground">
                Ваш сайт будет доступен по адресу:<br />
                <span className="font-mono text-primary">
                  https://{siteName.toLowerCase().replace(/\s+/g, '-')}.ai-gen.site
                </span>
              </p>
            )}
          </div>
          {publishedUrl && (
            <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-sm font-semibold mb-2 text-primary">Сайт успешно опубликован!</p>
              <a href={publishedUrl} target="_blank" rel="noopener noreferrer" className="text-sm underline break-all">
                {publishedUrl}
              </a>
            </div>
          )}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Отмена
          </Button>
          <Button onClick={onPublish} disabled={!siteName.trim()}>
            <Icon name="Rocket" size={16} className="mr-2" />
            Опубликовать
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
