import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export function FAQPage() {
  return (
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
}
