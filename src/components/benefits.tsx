const benefits = [
    { title: "Personalized Strategy", description: "Crafting a unique path for each student." },
    { title: "Decade of Experience", description: "Leveraging 10+ years of admission insights." },
    { title: "Holistic Development", description: "Focusing on academic and personal growth." },
    { title: "Proven Track Record", description: "Success stories from students worldwide." },
    { title: "Global Network", description: "Connections with universities and programs across the globe." },
    { title: "Application Mastery", description: "Expert guidance on every aspect of your application." },
]

export function Benefits() {
  return (
    <section id="benefits" className="w-full py-12 bg-[#6991f7]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-[#27316c] sm:text-5xl">
              The Prerna Bansal & Co Advantage
            </h2>
            <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our approach is designed to give you a competitive edge and make the application process seamless.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 sm:grid-cols-1 md:grid-cols-2 lg:gap-12">
            {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-6">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/20">
                        <span className="text-2xl font-bold text-[#27316c]">{index + 1}</span>
                    </div>
                    <div className="grid gap-1">
                        <h3 className="text-xl font-bold text-[#27316c]">
                            {benefit.title}
                        </h3>
                        <p className="text-white/80">{benefit.description}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
