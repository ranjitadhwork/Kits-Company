'use client'

const quotes = [
  {
    text: '"Deliciously authentic."',
    source: 'The Guardian',
  },
  {
    text: '"The best Italian meal kits we\'ve tried."',
    source: 'Food & Wine',
  },
  {
    text: '"Restaurant-quality pasta at home, effortlessly."',
    source: 'Bon Appetit',
  },
  {
    text: '"A game-changer for busy food lovers."',
    source: 'Eater',
  },
]

export function PressMarquee() {
  return (
    <section className="overflow-hidden border-y border-border bg-background py-5">
      <div className="relative flex">
        <div className="flex shrink-0 animate-marquee items-center gap-12">
          {[...quotes, ...quotes].map((quote, i) => (
            <div key={i} className="flex shrink-0 items-center gap-3">
              <span className="font-serif text-lg italic text-foreground/70 whitespace-nowrap">
                {quote.text}
              </span>
              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground whitespace-nowrap">
                {quote.source}
              </span>
              <span className="text-muted-foreground/40 px-4" aria-hidden="true">
                {'//'}
              </span>
            </div>
          ))}
        </div>
        <div className="flex shrink-0 animate-marquee items-center gap-12" aria-hidden="true">
          {[...quotes, ...quotes].map((quote, i) => (
            <div key={i} className="flex shrink-0 items-center gap-3">
              <span className="font-serif text-lg italic text-foreground/70 whitespace-nowrap">
                {quote.text}
              </span>
              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground whitespace-nowrap">
                {quote.source}
              </span>
              <span className="text-muted-foreground/40 px-4" aria-hidden="true">
                {'//'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
