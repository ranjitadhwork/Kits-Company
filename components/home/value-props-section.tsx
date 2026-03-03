import { FlagTriangleRight, LeafyGreen, CheckSquare, SlidersHorizontal } from 'lucide-react'

const props = [
  {
    icon: FlagTriangleRight,
    title: 'Product of Italy',
    description: 'Experience and taste Italy in every bite',
  },
  {
    icon: LeafyGreen,
    title: 'No waste',
    description: 'Smart portions, zero waste \u2014 just the right amount',
  },
  {
    icon: CheckSquare,
    title: 'All in 1',
    description: 'All you need \u2014 ready to cook, ready to love',
  },
  {
    icon: SlidersHorizontal,
    title: 'Easy & Fast',
    description: 'Quick to prepare meals, effortless to enjoy',
  },
]

export function ValuePropsSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <h2 className="text-center font-serif text-2xl tracking-tight text-foreground md:text-3xl lg:text-4xl text-balance">
          Authentic Italian. All in One.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {props.map((prop) => (
            <div
              key={prop.title}
              className="flex flex-col items-center text-center rounded-2xl bg-[#f5f5f5] px-6 py-8"
            >
              <prop.icon className="size-6 text-foreground" strokeWidth={1.5} />
              <h3 className="mt-4 font-serif text-lg tracking-tight text-foreground">
                {prop.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
