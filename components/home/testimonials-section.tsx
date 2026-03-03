import { Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'The Carbonara kit is genuinely the best I have ever had outside of Rome. My Italian mother-in-law approved.',
    author: 'Sarah M.',
    location: 'London, UK',
  },
  {
    quote:
      'I cook these after long work days. Ten minutes and I have a meal that looks and tastes like I spent hours in the kitchen.',
    author: 'James T.',
    location: 'New York, USA',
  },
  {
    quote:
      'The truffle tagliatelle is pure luxury. We order it every month for our Friday date night.',
    author: 'Marie L.',
    location: 'Paris, France',
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-foreground">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="text-center">
          <h2 className="font-serif text-4xl tracking-tight text-background md:text-5xl lg:text-6xl">
            Loved Worldwide
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="flex flex-col rounded-2xl bg-background/5 p-8 backdrop-blur-sm"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-[#e8c063] text-[#e8c063]"
                  />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 font-serif text-lg leading-relaxed text-background/85 italic">
                {`"${testimonial.quote}"`}
              </blockquote>
              <div className="mt-6 border-t border-background/10 pt-5">
                <p className="text-sm font-medium text-background">
                  {testimonial.author}
                </p>
                <p className="text-xs text-background/50">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
