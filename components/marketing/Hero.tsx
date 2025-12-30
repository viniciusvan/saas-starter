import { ReactNode } from 'react';

interface HeroProps {
  title: ReactNode;
  subtitle: ReactNode;
  cta?: ReactNode;
}

export function Hero({ title, subtitle, cta }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-100/70 blur-3xl" />
      </div>
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
          Simple. Fast. Blue.
        </div>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-lg text-slate-600">{subtitle}</p>
        {cta && <div className="mt-8 flex justify-center">{cta}</div>}
        <div className="mt-12 grid gap-6 text-left sm:grid-cols-3">
          {[
            { label: 'Sync speed', value: '<1s' },
            { label: 'Active teams', value: '2,400+' },
            { label: 'Notes captured', value: '12M+' }
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-blue-100 bg-white/80 p-5 shadow-sm"
            >
              <p className="text-sm text-slate-500">{stat.label}</p>
              <p className="mt-2 text-2xl font-semibold text-blue-700">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
