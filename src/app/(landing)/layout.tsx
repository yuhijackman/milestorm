import { ReactNode } from 'react';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/ui/footer';

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
