import { Button } from '@/components/ui/button';
import { MaxWidthWrapper } from '@/components/ui/max-width-wrapper';
import Image from 'next/image';

const LandingPage = () => {
  return (
    <>
      <MaxWidthWrapper className="bg-brand-50 py-6">
        <section className="relative flex flex-col gap-6 md:flex-row">
          <div className="md:basis-7/12 lg:basis-6/12 flex flex-col items-center md:justify-center md:items-start">
            <h1 className="text-4xl font-bold text-center md:text-start">
              Unlock Your Potential
              <br />
              with a Clear Path to <span className="text-primary">Success</span>
            </h1>
            <p className="mt-4 text-gray-600 text-center md:text-start">
              Milestorm helps you visualize your journey towards ambitious
              goals. From passing exams to mastering new skills, create
              structured roadmaps with milestones and tasks to keep you on track
              and motivated.
            </p>
            <div className="mt-4 flex gap-2 flex-col sm:flex-row sm:gap-4">
              <Button>Get Started for Free</Button>
              <Button variant="outline">Watch a Demo</Button>
            </div>
          </div>
          <div className="flex justify-center md:basis-5/12 lg:basis-6/12">
            <Image
              src="/hero-image.svg"
              alt="Unlock Your Potential with a Clear Path to Success"
              width="700"
              height="560"
              className="w-[400] md:w-full object-cover object-top"
            ></Image>
          </div>
        </section>
      </MaxWidthWrapper>
    </>
  );
};

export default LandingPage;
