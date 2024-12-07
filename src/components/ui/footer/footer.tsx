import { MaxWidthWrapper } from '../max-width-wrapper';

export const Footer = () => {
  return (
    <footer className="h-20 mt-20 w-full border-t border-gray-200 bg-white/80 transition-all">
      <MaxWidthWrapper>
        <div className="h-full flex items-center">
          <p>© 2024 Milestorm. All rights reserved</p>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};
