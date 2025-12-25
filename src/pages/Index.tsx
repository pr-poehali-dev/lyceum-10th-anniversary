import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

interface Chapter {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  sections: Section[];
}

interface Section {
  title: string;
  type: 'article' | 'interview' | 'poem' | 'gallery' | 'list';
  content: string;
}

const chapters: Chapter[] = [
  {
    id: 1,
    title: 'Глава I',
    subtitle: 'Фото-видео',
    icon: 'Camera',
    sections: [
      { title: 'Поздравления от руководства', type: 'article', content: 'Статьи от Натальи Борисовны и Игоря Юрьевича' },
      { title: 'Легенда от Дмитрия Евгеньевича', type: 'article', content: '' },
      { title: 'Интервью с директором и администрацией', type: 'interview', content: 'Н.Б., И.Ю., Д.Е., О.А.' },
      { title: 'Монологи учителей', type: 'interview', content: 'Урсул Н.С., Матков Д.Е., Шутько М.Ю., Севастьянова Е.С., Жариков Н.А.' },
      { title: 'Интервью с выпускниками', type: 'interview', content: 'Фурман Даниил, Ратцев Александр, Бакаляр Глеб, Плотников Роман, Галяшина Ангелина, Валиулина Инга' },
      { title: 'Стихотворение', type: 'poem', content: 'От Фурмана С.М.' }
    ]
  },
  {
    id: 2,
    title: 'Глава II',
    subtitle: 'Детство – первые шаги',
    icon: 'Footprints',
    sections: [
      { title: 'Грустно и смешно', type: 'list', content: 'Самые неожиданные истории за время работы Лицея от Петровой Н.Н., Панфильцевой О.А.' },
      { title: 'Хочу всё знать. Как создавались традиции', type: 'interview', content: 'Интервью с Понамарёвой Ю.А., Бондаревой С.Ю. про движение первых' },
      { title: 'Стихотворение', type: 'poem', content: 'От Фурмана С.М.' }
    ]
  },
  {
    id: 3,
    title: 'Глава III',
    subtitle: 'Юность. Вверх к звёздам',
    icon: 'Sparkles',
    sections: [
      { title: 'Умники и умницы', type: 'interview', content: 'Интервью с учителями и учениками' },
      { title: 'Притча о неразрывной связи', type: 'article', content: 'Проза от Давыдова Дениса Александровича' },
      { title: 'Стихотворение', type: 'poem', content: 'От Фурмана С.М.' }
    ]
  },
  {
    id: 4,
    title: 'Глава IV',
    subtitle: 'Отрочество',
    icon: 'Trophy',
    sections: [
      { title: 'Орбита талантов. Физики или лирики?', type: 'list', content: 'Олимпиады, конкурсы, проекты, конференции, театр, КВН' },
      { title: 'Гордость лицея', type: 'gallery', content: 'Самые... самые... самые (фото + номинации)' },
      { title: 'Стихотворение', type: 'poem', content: 'От Фурмана С.М.' }
    ]
  },
  {
    id: 5,
    title: 'Глава V',
    subtitle: 'Связь с ВУЗами',
    icon: 'GraduationCap',
    sections: [
      { title: 'Партнерство с университетами', type: 'article', content: 'Статья от Кулаевой О.А.' }
    ]
  },
  {
    id: 6,
    title: 'Глава VI',
    subtitle: 'Especially for You',
    icon: 'Globe',
    sections: [
      { title: 'О важности языка', type: 'article', content: 'Статья от Ткач Е.А.' },
      { title: 'Достижения кафедры', type: 'list', content: '' },
      { title: 'Funny stories and sayings', type: 'list', content: 'From our lessons' },
      { title: 'Поздравления на английском', type: 'gallery', content: 'От учеников и кафедры английского языка' },
      { title: 'Стихотворение', type: 'poem', content: 'От Ткач Е.А.' }
    ]
  },
  {
    id: 7,
    title: 'Глава VII',
    subtitle: 'Звёздная галерея',
    icon: 'Star',
    sections: [
      { title: 'Хобби учителей и учеников', type: 'gallery', content: 'Фото с описанием' },
      { title: 'Стихотворение', type: 'poem', content: 'От Фурмана С.М.' }
    ]
  }
];

export default function Index() {
  const [activeChapter, setActiveChapter] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToChapter = (id: number) => {
    setActiveChapter(id);
    const element = document.getElementById(`chapter-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/30 to-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary/20 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <div>
              <h1 className="text-2xl font-heading font-bold text-primary-foreground">Лицей №1 Спутник</h1>
              <p className="text-sm text-primary-foreground/80">10 лет вместе</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="PartyPopper" className="text-accent" size={24} />
            <span className="text-xl font-heading font-semibold text-primary-foreground">2015-2025</span>
          </div>
        </div>
      </header>

      <main className="pt-24">
        <section className={`py-20 px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="container mx-auto max-w-4xl text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-accent/10 border-2 border-accent rounded-full">
              <span className="text-accent font-heading font-semibold tracking-wider">ЮБИЛЕЙ</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-heading font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
              10 лет успеха
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-up leading-relaxed">
              История, которая вдохновляет. Путешествие длиной в десятилетие.
              <br />
              <span className="text-primary font-semibold">От первых шагов до великих свершений.</span>
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => scrollToChapter(1)}
              >
                <Icon name="BookOpen" className="mr-2" size={20} />
                Начать путешествие
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 hover:scale-105"
              >
                <Icon name="Download" className="mr-2" size={20} />
                Скачать альбом
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-card/50">
          <div className="container mx-auto max-w-6xl">
            <h3 className="text-3xl font-heading font-bold text-center mb-12 text-primary">Семь глав нашей истории</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {chapters.map((chapter, index) => (
                <Card 
                  key={chapter.id}
                  className="p-6 hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 border-2 border-transparent hover:border-accent bg-card animate-fade-in group"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => scrollToChapter(chapter.id)}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon name={chapter.icon} className="text-white" size={28} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-heading font-bold text-primary mb-1">{chapter.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{chapter.subtitle}</p>
                      <div className="mt-3 flex items-center text-accent text-sm font-medium">
                        Читать <Icon name="ChevronRight" className="ml-1" size={16} />
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            {chapters.map((chapter) => (
              <div 
                key={chapter.id} 
                id={`chapter-${chapter.id}`}
                className="mb-16 scroll-mt-24"
              >
                <div className="mb-8 flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                    <Icon name={chapter.icon} className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-4xl font-heading font-bold text-primary">{chapter.title}</h3>
                    <p className="text-lg text-muted-foreground mt-1">{chapter.subtitle}</p>
                  </div>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  {chapter.sections.map((section, idx) => (
                    <AccordionItem 
                      key={idx} 
                      value={`section-${idx}`}
                      className="border-2 border-muted rounded-xl overflow-hidden bg-card hover:border-accent transition-colors duration-300"
                    >
                      <AccordionTrigger className="px-6 py-4 hover:bg-muted/50 transition-colors [&[data-state=open]]:bg-accent/5">
                        <div className="flex items-center gap-3 text-left">
                          <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon 
                              name={
                                section.type === 'article' ? 'FileText' :
                                section.type === 'interview' ? 'Mic' :
                                section.type === 'poem' ? 'Feather' :
                                section.type === 'gallery' ? 'Images' : 'List'
                              } 
                              className="text-accent" 
                              size={18} 
                            />
                          </div>
                          <span className="font-heading font-semibold text-lg">{section.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4 bg-muted/20">
                        <div className="prose prose-slate max-w-none">
                          <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                          <div className="mt-4 p-4 bg-card rounded-lg border border-accent/20">
                            <p className="text-sm text-muted-foreground italic">
                              {section.type === 'article' && '📝 Здесь будет размещена статья'}
                              {section.type === 'interview' && '🎙️ Здесь будет размещено интервью'}
                              {section.type === 'poem' && '✍️ Здесь будет размещено стихотворение'}
                              {section.type === 'gallery' && '🖼️ Здесь будет размещена фотогалерея'}
                              {section.type === 'list' && '📋 Здесь будет размещен список'}
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="py-12 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 mb-4">
              <Icon name="Sparkles" className="text-accent" size={28} />
              <h3 className="text-3xl font-heading font-bold">Лицей №1 Спутник</h3>
              <Icon name="Sparkles" className="text-accent" size={28} />
            </div>
            <p className="text-primary-foreground/90 text-lg">10 лет вместе • 2015-2025</p>
          </div>
          <div className="flex justify-center gap-6 mb-6">
            <Button variant="ghost" size="icon" className="hover:bg-accent hover:text-white">
              <Icon name="Mail" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-accent hover:text-white">
              <Icon name="Phone" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-accent hover:text-white">
              <Icon name="MapPin" size={20} />
            </Button>
          </div>
          <p className="text-sm text-primary-foreground/70">© 2025 Лицей №1 Спутник. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
