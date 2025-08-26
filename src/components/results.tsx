import { Building, Users2, FileText, ClipboardList } from 'lucide-react';

const stats = [
  { icon: <Building className="h-10 w-10 text-primary" />, value: "150+", label: "Top Colleges" },
  { icon: <Users2 className="h-10 w-10 text-primary" />, value: "500+", label: "Students Guided" },
  { icon: <FileText className="h-10 w-10 text-primary" />, value: "2000+", label: "Essay Reviews" },
  { icon: <ClipboardList className="h-10 w-10 text-primary" />, value: "1000+", label: "CVs Perfected" },
];

export function Results() {
  return (
    <section id="results" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl">
              Our track record speaks for itself
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We've helped students gain admission to the world's most prestigious universities.
            </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-primary/5 p-6 shadow-sm transition-transform hover:scale-105">
              {stat.icon}
              <div className="text-4xl font-bold text-primary">{stat.value}</div>
              <p className="text-sm font-medium text-foreground/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
