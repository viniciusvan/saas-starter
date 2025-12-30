import { ReactNode, ComponentType, SVGProps } from 'react';

interface FeatureProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: ReactNode;
  description: ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-blue-50/30 px-6 py-8 text-center shadow-sm space-y-4">
      <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-600 text-white mx-auto">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
  );
}
