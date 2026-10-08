import { createFileRoute } from "@tanstack/react-router";
import * as Accordion from "@radix-ui/react-accordion";
import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronDown,
  FileCheck2,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Scale,
  ShieldCheck,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";

import heroImage from "@/assets/hero-escritorio.jpg";
import backgroundJuridico from "@/assets/background-juridico.jpg";
import logo from "@/assets/logo.svg";
import equipe2 from "@/assets/equipe-2.png.asset.json";
import leandro from "@/assets/leandro.png.asset.json";
import vinicius from "@/assets/vinicius.png.asset.json";
import sidiane from "@/assets/sidiane.png.asset.json";
import paula from "@/assets/paula.png.asset.json";
import { Button } from "@/components/ui/button";

const whatsappUrl =
  "https://wa.me/5546999292828?text=Olá%2C%20vim%20pelo%20site%20e%20gostaria%20de%20falar%20com%20o%20escritório.";

const publicSiteUrl = import.meta.env['VITE_SITE_URL'] || "https://lemonie-assis-web.lovable.app";
const lovableAssetUrl = (path: string) => new URL(path, "https://lemonie-assis-web.lovable.app").href;

const navItems = [
  ["Áreas", "#areas"],
  ["Como trabalhamos", "#como-trabalhamos"],
  ["Sobre", "#sobre"],
  ["Equipe", "#equipe"],
  ["Contato", "#contato"],
] as const;

const practices = [
  { icon: Building2, title: "Advocacia Empresarial", text: "Contratos, relações societárias, consultoria preventiva e orientação jurídica para a rotina da empresa." },
  { icon: Users, title: "Direito Trabalhista", text: "Orientação sobre obrigações trabalhistas, prevenção de passivos e defesa da empresa em demandas." },
  { icon: Scale, title: "Direito Cível", text: "Atuação em conflitos contratuais, cobranças e demais questões cíveis, na esfera judicial e extrajudicial." },
  { icon: ShieldCheck, title: "Defesa e Estratégia", text: "Análise do cenário, avaliação de riscos e definição do melhor caminho antes e durante o conflito." },
];

const steps = [
  { title: "Conversa inicial", text: "Você apresenta a situação da empresa pelo WhatsApp, sem burocracia." },
  { title: "Análise do caso", text: "Avaliamos documentos, riscos e alternativas." },
  { title: "Estratégia definida", text: "Explicamos o caminho recomendado em linguagem clara." },
  { title: "Acompanhamento", text: "Você é informado em cada etapa, presencialmente ou online." },
];

const team = [
  { name: "Dr. Leandro Gentil Lemonie", role: "Advogado · OAB/PR 61.101", image: lovableAssetUrl(leandro.url) },
  { name: "Dr. Vinicius do Vale Assis", role: "Advogado · OAB/PR 33.386", image: lovableAssetUrl(vinicius.url) },
  { name: "Dra. Sidiane Cristina Canutz", role: "Advogada · OAB/PR 97.394", image: lovableAssetUrl(sidiane.url) },
  { name: "Paula Andressa da Silva", role: "Assessora Jurídica", image: lovableAssetUrl(paula.url) },
];

const faqs = [
  ["O atendimento é presencial ou online?", "Os dois. Você pode ser atendido na nossa sala de reunião em Realeza ou por videochamada."],
  ["Como começo o atendimento?", "Pelo botão de WhatsApp desta página. Você conta brevemente a situação e nossa equipe retorna para orientar os próximos passos."],
  ["Atendem empresas de qualquer porte?", "Atendemos empresas que buscam orientação jurídica estratégica."],
  ["Preciso ter um processo em andamento para contratar?", "Não. A consultoria preventiva serve justamente para evitar o conflito."],
  ["Vocês atendem fora de Realeza?", "Sim, no formato online."],
];

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Lemonie & Assis | Advocacia Empresarial em Realeza, PR" },
      { name: "description", content: "Advocacia empresarial, cível e trabalhista em Realeza-PR. Defesa e estratégia jurídica para empresas, com atendimento presencial e online." },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { property: "og:title", content: "Lemonie & Assis | Advocacia Empresarial em Realeza, PR" },
      { property: "og:description", content: "Advocacia empresarial, cível e trabalhista em Realeza-PR. Defesa e estratégia jurídica para empresas, com atendimento presencial e online." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "Lemonie & Assis Advocacia e Consultoria" },
      { property: "og:url", content: publicSiteUrl },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Lemonie & Assis | Advocacia Empresarial em Realeza, PR" },
      { name: "twitter:description", content: "Advocacia empresarial, cível e trabalhista em Realeza-PR, com atendimento presencial e online." },
    ],
    links: [{ rel: "canonical", href: publicSiteUrl }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          "@id": `${publicSiteUrl}/#escritorio`,
          name: "Lemonie & Assis Advocacia e Consultoria",
          description: "Escritório de advocacia empresarial, cível e trabalhista em Realeza, Paraná, com atendimento presencial e online.",
          url: publicSiteUrl,
          logo: `${publicSiteUrl}/favicon.png`,
          telephone: "+55 46 99929-2828",
          email: "lemonieeassisadvocacia@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "R. Belém, 2929, sala 03, Centro",
            addressLocality: "Realeza",
            addressRegion: "PR",
            postalCode: "85770-000",
            addressCountry: "BR",
          },
          sameAs: ["https://www.instagram.com/lemonieeassisadvocacia"],
          employee: team.map((person) => ({ "@type": "Person", name: person.name, jobTitle: person.role })),
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Áreas de atuação",
            itemListElement: practices.map((practice) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: practice.title, description: practice.text },
            })),
          },
        }),
      },
    ],
  }),
  component: Index,
});

function WhatsAppLink({ children, light = false, className = "" }: { children: React.ReactNode; light?: boolean; className?: string }) {
  return (
    <Button asChild variant={light ? "light" : "default"} size="lg" className={className}>
      <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label={`${children} — abre o WhatsApp`}>
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        {children}
      </a>
    </Button>
  );
}

function SectionHeading({ eyebrow, title, description, light = false }: { eyebrow?: string; title: string; description?: string; light?: boolean }) {
  return (
    <div className="max-w-3xl">
      {eyebrow && <p className={`mb-4 text-xs font-medium uppercase tracking-[0.18em] ${light ? "text-primary-foreground/65" : "text-accent"}`}>{eyebrow}</p>}
      <h2 className={`text-3xl font-light leading-tight sm:text-4xl lg:text-5xl ${light ? "text-primary-foreground" : "text-foreground"}`}>{title}</h2>
      {description && <p className={`mt-5 max-w-2xl text-base leading-7 sm:text-lg ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{description}</p>}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="section-shell grid h-[4.5rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 sm:h-20 lg:flex lg:justify-between">
        <a href="#inicio" aria-label="Lemonie & Assis — início" className="min-w-0">
          <img src={logo} alt="Lemonie & Assis Advocacia e Consultoria" className="h-auto w-44 max-w-full sm:w-56" />
        </a>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegação principal">
          {navItems.map(([label, href]) => <a key={href} href={href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">{label}</a>)}
        </nav>
        <div className="hidden lg:block"><WhatsAppLink className="min-h-10 px-4 py-2 text-sm">Falar no WhatsApp</WhatsAppLink></div>
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Fechar menu" : "Abrir menu"}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav id="mobile-menu" className="border-t border-border bg-background px-4 pb-5 pt-3 lg:hidden" aria-label="Navegação mobile">
          <div className="mx-auto flex max-w-xl flex-col">
            {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="flex min-h-12 items-center border-b border-border py-3 text-sm font-medium text-foreground">{label}</a>)}
            <WhatsAppLink className="mt-4 w-full">Falar no WhatsApp</WhatsAppLink>
          </div>
        </nav>
      )}
    </header>
  );
}

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <a href="#conteudo" className="fixed left-4 top-3 z-[60] -translate-y-20 rounded-md bg-background px-4 py-2 text-sm font-medium text-foreground shadow-lg transition-transform focus:translate-y-0">Ir para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <section id="inicio" className="relative min-h-[92svh] scroll-mt-20 overflow-hidden bg-primary pt-[4.5rem] sm:pt-20">
          <img src={heroImage} alt="Profissionais em reunião empresarial" width={1536} height={1024} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-[62%_center]" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-transparent to-transparent" />
          <div className="section-shell relative flex min-h-[calc(92svh-4.5rem)] items-center py-12 sm:min-h-[calc(92svh-5rem)] sm:py-24">
            <div className="max-w-3xl text-primary-foreground">
              <p className="mb-5 text-[0.68rem] font-medium uppercase leading-5 tracking-[0.16em] text-primary-foreground/70 sm:mb-6 sm:text-xs sm:tracking-[0.18em]">Advocacia e Consultoria · Realeza, PR</p>
              <h1 className="max-w-3xl text-[2.15rem] font-light leading-[1.12] sm:text-6xl lg:text-7xl">Segurança jurídica para a sua empresa decidir com tranquilidade.</h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-primary-foreground/80 sm:text-xl sm:leading-8">Atuamos na advocacia empresarial, cível e trabalhista, com estratégia e defesa pensadas para a realidade de cada negócio.</p>
              <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                <WhatsAppLink light className="h-auto min-h-12 w-full whitespace-normal px-4 py-3 text-center leading-5 sm:w-auto">Falar com um advogado no WhatsApp</WhatsAppLink>
                <Button asChild variant="outline" size="lg" className="h-auto min-h-12 w-full whitespace-normal border-primary-foreground/25 px-4 py-3 text-center leading-5 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground sm:w-auto"><a href="#areas">Conhecer as áreas de atuação <ArrowDown className="h-4 w-4 shrink-0" /></a></Button>
              </div>
              <div className="mt-10 flex items-center gap-3 text-sm text-primary-foreground/70"><span className="flex h-7 w-7 items-center justify-center rounded-full border border-primary-foreground/20"><Check className="h-4 w-4" /></span>Atendimento presencial e online</div>
            </div>
          </div>
        </section>

        <section id="areas" className="scroll-mt-20 py-16 sm:py-28">
          <div className="section-shell">
            <div className="reveal"><SectionHeading eyebrow="Áreas de atuação" title="Onde podemos atuar ao lado da sua empresa" description="Do dia a dia contratual ao contencioso, o suporte jurídico que o seu negócio precisa." /></div>
             <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
              {practices.map(({ icon: Icon, title, text }, index) => (
                 <article key={title} className="group reveal min-h-0 rounded-lg border border-border/80 bg-card p-6 shadow-[0_16px_50px_-34px_color-mix(in_oklab,var(--primary)_42%,transparent)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_24px_60px_-30px_color-mix(in_oklab,var(--primary)_48%,transparent)] sm:min-h-72 sm:p-7">
                  <div className="flex items-start justify-between"><span className="grid h-12 w-12 place-items-center rounded-full bg-secondary"><Icon className="h-6 w-6 text-accent" /></span><span className="text-sm font-light text-muted-foreground">0{index + 1}</span></div>
                   <h3 className="mt-10 text-xl font-normal text-foreground sm:mt-14">{title}</h3>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="parallax-bg relative overflow-hidden py-16 text-primary-foreground sm:py-28" style={{ backgroundImage: `url(${backgroundJuridico})` }}>
          <div className="absolute inset-0 bg-primary/82" />
          <div className="section-shell reveal relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="max-w-3xl"><p className="text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground/65">Revisão jurídica</p><h2 className="mt-4 text-3xl font-light leading-tight sm:text-4xl">Sua empresa mudou em 2026? O jurídico precisa acompanhar.</h2><p className="mt-5 max-w-2xl leading-7 text-primary-foreground/75">Novos contratos, novos colaboradores, mudanças de rotina e de legislação. Uma revisão jurídica ajuda a identificar pontos de atenção antes que virem problema.</p></div>
            <WhatsAppLink light className="h-auto min-h-12 w-full whitespace-normal px-4 py-3 text-center leading-5 sm:w-auto">Solicitar uma análise pelo WhatsApp</WhatsAppLink>
          </div>
        </section>

        <section id="como-trabalhamos" className="scroll-mt-20 bg-muted py-16 sm:py-28">
          <div className="section-shell"><div className="reveal"><SectionHeading eyebrow="Como trabalhamos" title="Um atendimento direto, do primeiro contato à solução" /></div>
            <ol className="mt-10 grid gap-4 sm:mt-14 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => <li key={step.title} className="reveal rounded-lg border border-border/80 bg-background p-6 shadow-[0_18px_45px_-36px_color-mix(in_oklab,var(--primary)_45%,transparent)] sm:p-7"><span className="text-sm font-medium text-accent">0{index + 1}</span><h3 className="mt-6 text-2xl font-light sm:mt-8">{step.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{step.text}</p></li>)}
            </ol>
          </div>
        </section>

        <section id="sobre" className="scroll-mt-20 py-16 sm:py-28">
          <div className="section-shell grid gap-10 sm:gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div className="reveal overflow-hidden rounded-lg shadow-[0_30px_80px_-45px_color-mix(in_oklab,var(--primary)_62%,transparent)]"><img src={lovableAssetUrl(equipe2.url)} alt="Equipe Lemonie & Assis na sala de reunião" width={671} height={754} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.025]" /></div>
            <div className="reveal"><SectionHeading eyebrow="Sobre o escritório" title="Lemonie & Assis Advocacia e Consultoria" /><p className="mt-6 text-base leading-8 text-muted-foreground">Somos um escritório de Realeza, no Paraná, voltado à advocacia empresarial, cível e trabalhista. Nosso trabalho une conhecimento técnico, atenção ao contexto de cada cliente e comunicação transparente. Atendemos de forma presencial, em nossa sala de reunião, ou online, onde você estiver.</p>
              <div className="mt-10 divide-y divide-border border-y border-border">
                {[[BriefcaseBusiness,"Estratégia","cada caso começa por entender o negócio."],[FileCheck2,"Clareza","explicações objetivas, sem juridiquês desnecessário."],[Users,"Proximidade","contato direto com quem cuida do seu caso."]].map(([Icon,title,text]) => { const I = Icon as typeof BriefcaseBusiness; return <div key={String(title)} className="grid grid-cols-[auto_minmax(0,1fr)] gap-4 py-5"><I className="mt-1 h-5 w-5 text-accent"/><p><strong className="text-foreground">{String(title)}:</strong> <span className="text-muted-foreground">{String(text)}</span></p></div>})}
              </div>
            </div>
          </div>
        </section>

        <section id="equipe" className="parallax-bg relative scroll-mt-20 overflow-hidden py-16 sm:py-28" style={{ backgroundImage: `url(${backgroundJuridico})` }}>
          <div className="absolute inset-0 bg-primary/92" />
          <div className="section-shell relative"><div className="reveal"><SectionHeading eyebrow="Equipe" title="Quem cuida do seu caso" light /></div>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
              {team.map((person) => <article key={person.name} className="reveal rounded-lg border border-primary-foreground/10 bg-primary/45 p-5 text-center backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"><div className="mx-auto aspect-square w-full max-w-44 overflow-hidden rounded-full border-2 border-primary-foreground/70 bg-secondary shadow-xl sm:max-w-52"><img src={person.image} alt={person.name} width={600} height={600} loading="lazy" className="h-full w-full object-cover" /></div><h3 className="mt-5 text-base font-normal text-primary-foreground sm:mt-6 sm:text-lg">{person.name}</h3><p className="mt-2 text-xs font-light leading-5 text-primary-foreground/60 sm:text-sm">{person.role}</p></article>)}
            </div>
          </div>
        </section>

        <section id="faq" className="py-16 sm:py-28">
          <div className="section-shell grid gap-10 sm:gap-12 lg:grid-cols-[0.8fr_1.2fr]"><div className="reveal"><SectionHeading eyebrow="Perguntas frequentes" title="Informações para começar" /></div>
            <Accordion.Root type="single" collapsible className="reveal border-t border-border">
              {faqs.map(([question, answer], index) => <Accordion.Item key={question} value={`faq-${index}`} className="border-b border-border"><Accordion.Header><Accordion.Trigger className="group grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-6 text-left text-base font-normal text-foreground sm:text-lg">{question}<ChevronDown className="h-5 w-5 shrink-0 text-accent transition-transform duration-300 group-data-[state=open]:rotate-180" /></Accordion.Trigger></Accordion.Header><Accordion.Content className="overflow-hidden text-sm leading-7 text-muted-foreground data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"><p className="pb-6 pr-8">{answer}</p></Accordion.Content></Accordion.Item>)}
            </Accordion.Root>
          </div>
        </section>

        <section className="parallax-bg relative overflow-hidden py-20 text-primary-foreground sm:py-32" style={{ backgroundImage: `url(${heroImage})` }}><div className="absolute inset-0 bg-primary/80"/><div className="section-shell reveal relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end"><div className="max-w-3xl"><h2 className="text-3xl font-light sm:text-5xl">Vamos conversar sobre o jurídico da sua empresa?</h2><p className="mt-5 text-base leading-7 text-primary-foreground/70 sm:text-lg">Envie uma mensagem e fale diretamente com o escritório.</p></div><WhatsAppLink light className="w-full sm:w-auto">Chamar no WhatsApp</WhatsAppLink></div></section>

        <section id="contato" className="scroll-mt-20 py-16 sm:py-28">
          <div className="section-shell"><div className="reveal"><SectionHeading eyebrow="Contato e localização" title="Estamos em Realeza, PR" /></div>
            <div className="mt-10 grid overflow-hidden rounded-lg border border-border sm:mt-12 lg:grid-cols-[0.75fr_1.25fr]">
              <div className="bg-primary p-6 text-sm text-primary-foreground sm:p-10 sm:text-base">
                <div className="space-y-7">
                  <a href="https://maps.google.com/?q=Comercial+Realtec+R.+Belém+2929+sala+03+Realeza+PR" target="_blank" rel="noreferrer" className="grid min-h-11 grid-cols-[auto_minmax(0,1fr)] gap-4"><MapPin className="mt-1 h-5 w-5 text-primary-foreground/60"/><span className="leading-7">Comercial Realtec, R. Belém, nº 2929, sala 03, Centro, Realeza, PR, 85770-000</span></a>
                  <a href="tel:+5546999292828" className="flex min-h-11 items-center gap-4"><Phone className="h-5 w-5 text-primary-foreground/60"/><span>(46) 99929-2828</span></a>
                  <a href="mailto:lemonieeassisadvocacia@gmail.com" className="grid min-h-11 grid-cols-[auto_minmax(0,1fr)] items-center gap-4"><Mail className="h-5 w-5 text-primary-foreground/60"/><span className="min-w-0 break-all text-[0.82rem] sm:text-base">lemonieeassisadvocacia@gmail.com</span></a>
                  <a href="https://www.instagram.com/lemonieeassisadvocacia" target="_blank" rel="noreferrer" className="flex min-h-11 items-center gap-4"><Instagram className="h-5 w-5 text-primary-foreground/60"/><span>@lemonieeassisadvocacia</span></a>
                </div>
                <WhatsAppLink light className="mt-10 w-full">Falar no WhatsApp</WhatsAppLink>
              </div>
              <iframe title="Mapa do escritório Lemonie & Assis" src="https://www.google.com/maps?q=Comercial%20Realtec%2C%20R.%20Bel%C3%A9m%2C%202929%2C%20Realeza%2C%20PR&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="min-h-80 w-full border-0 sm:min-h-[420px]" />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-primary-foreground/10 bg-primary py-10 text-primary-foreground sm:py-12"><div className="section-shell grid justify-items-center gap-8 text-center lg:grid-cols-[auto_1fr] lg:justify-items-stretch lg:items-end lg:text-right"><img src={logo} alt="Lemonie & Assis" className="w-52 brightness-0 invert sm:w-56" /><div><p className="text-sm">© 2026 Lemonie & Assis Advocacia e Consultoria · Realeza, PR</p><p className="mt-3 max-w-3xl text-xs leading-5 text-primary-foreground/55 lg:ml-auto">Este site tem caráter exclusivamente informativo, nos termos do Provimento 205/2021 do Conselho Federal da OAB, e não constitui promessa de resultado ou aconselhamento jurídico.</p></div></div></footer>

      <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Falar com o escritório pelo WhatsApp" className="whatsapp-pulse fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-xl transition-transform hover:scale-105 sm:bottom-7 sm:right-7"><MessageCircle className="h-7 w-7" /><span className="sr-only">WhatsApp</span></a>
    </div>
  );
}