import { ReactNode } from 'react';
import { Navigation } from '@/components/ui/navigation';

type LayoutProps = {
  children: ReactNode;
};

export const LandingLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};
