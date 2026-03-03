const steps = [
  {
    number: '1',
    title: 'Choose your kit',
    description: 'Select from Bona Pasta classics or Boccon Divino creations',
  },
  {
    number: '2',
    title: 'Cook in minutes',
    description:
      'Ingredients are perfectly measured \u2014 no prep, no stress',
  },
  {
    number: '3',
    title: 'Enjoy Italian',
    description:
      'A satisfying meal, beautifully balanced and full of taste',
  },
]

export function HowItWorksSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="text-center">
          <h2 className="font-serif text-3xl tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
            Italian cooking, simplified in 3 steps
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-center text-center rounded-2xl bg-[#f5f5f5] px-8 py-10"
            >
              <h3 className="font-serif text-lg tracking-tight text-foreground md:text-xl">
                {step.number}. {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
