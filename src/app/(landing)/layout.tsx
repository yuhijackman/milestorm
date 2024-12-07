import { ReactNode } from 'react';

import { Footer } from '@/components/ui/footer';
import { Navigation } from '@/components/ui/navigation';

type LayoutProps = {
  children: ReactNode;
};

const LandingLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default LandingLayout;
