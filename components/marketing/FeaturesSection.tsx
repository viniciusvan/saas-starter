import { ComponentType, SVGProps, ReactNode } from 'react';
import { Feature } from './Feature';
import { SectionHeading } from './SectionHeading';

export interface FeatureItem {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: ReactNode;
  description: ReactNode;
}

interface FeaturesSectionProps {
  items: FeatureItem[];
  title?: ReactNode;
  subtitle?: ReactNode;
}

export function FeaturesSection({
  items,
  title = 'Everything you need to take better notes',
  subtitle = 'Stay focused with a clean editor, smart organization, and instant access to your ideas.'
}: FeaturesSectionProps) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={title} subtitle={subtitle} />
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {items.map((item, index) => (
            <Feature key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
