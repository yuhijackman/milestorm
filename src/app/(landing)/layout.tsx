import { ReactNode } from 'react';

import { LandingLayout as LandingLayoutComponent } from '@/components/layouts/landing-layout';

const LandingLayout = ({ children }: { children: ReactNode }) => {
  return <LandingLayoutComponent>{children}</LandingLayoutComponent>;
};

export default LandingLayout;
