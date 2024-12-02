import Link from 'next/link';
import { MaxWidthWrapper } from '../max-width-wrapper';

export const Navigation = () => {
  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="flex z-40 text-xl font-bold text-primary">
            Milestorm
          </Link>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};
