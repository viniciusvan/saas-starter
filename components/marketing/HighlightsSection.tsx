import { ReactNode } from 'react';
import { SectionHeading } from './SectionHeading';

interface HighlightItem {
  title: ReactNode;
  description: ReactNode;
}

interface HighlightsSectionProps {
  title: ReactNode;
  subtitle: ReactNode;
  items: HighlightItem[];
}

export function HighlightsSection({ title, subtitle, items }: HighlightsSectionProps) {
  return (
    <section className="bg-blue-50 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why NoteFlow"
          title={title}
          subtitle={subtitle}
          align="left"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {items.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
