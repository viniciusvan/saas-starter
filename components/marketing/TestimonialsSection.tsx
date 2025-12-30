import { ReactNode } from 'react';
import { SectionHeading } from './SectionHeading';

interface TestimonialItem {
  quote: ReactNode;
  name: ReactNode;
  role: ReactNode;
}

interface TestimonialsSectionProps {
  title: ReactNode;
  subtitle: ReactNode;
  items: TestimonialItem[];
}

export function TestimonialsSection({
  title,
  subtitle,
  items
}: TestimonialsSectionProps) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Teams love us"
          title={title}
          subtitle={subtitle}
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-blue-100 bg-blue-50/40 p-6 text-left shadow-sm"
            >
              <p className="text-sm text-slate-700">“{item.quote}”</p>
              <div className="mt-4">
                <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                <p className="text-xs text-slate-600">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
