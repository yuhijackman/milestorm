import Image from 'next/image';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { MaxWidthWrapper } from '@/components/ui/max-width-wrapper';

import { FeatureSection } from './_components/feature-section';

const LandingPage = () => {
  return (
    <>
      <MaxWidthWrapper className="bg-brand-50 py-16 md:py-6">
        <section className="relative flex flex-col gap-6 md:flex-row">
          <div className="md:basis-7/12 lg:basis-6/12 flex flex-col items-center md:justify-center md:items-start">
            <h1 className="z-10 text-4xl font-bold text-center md:text-start">
              Unlock Your Potential
              <br />
              with a Clear Path to <span className="text-primary">Success</span>
            </h1>
            <p className="z-10 mt-4 text-gray-600 text-center md:text-start">
              Milestorm helps you visualize your journey towards ambitious
              goals. <br />
              From passing exams to mastering new skills, create structured
              roadmaps with milestones and tasks to keep you on track and
              motivated.
            </p>
            <div className="z-10 mt-4 flex gap-2 flex-col sm:flex-row sm:gap-4">
              <Button>Get Started for Free</Button>
              <Button variant="outline">Watch a Demo</Button>
            </div>
            <div className="w-[300] h-[300] rounded-full absolute left-[-200px] opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#DED9FF] to-[#EFEAFF]"></div>
          </div>
          <div className="flex justify-center md:basis-5/12 lg:basis-6/12">
            <Image
              src="/hero-image.svg"
              alt="Unlock Your Potential with a Clear Path to Success"
              width="700"
              height="560"
              loading="eager"
              className="w-[400] md:w-full object-cover object-top"
            ></Image>
          </div>
        </section>
      </MaxWidthWrapper>
      <MaxWidthWrapper className="py-16">
        <section>
          <h2 className="text-3xl font-bold text-center text-wrap mb-6">
            What&apos;s Milestorm?
          </h2>
          <p className="text-xl mb-2 text-center">
            Milestorm is your go-to tool for achieving goals with clarity and
            precision. Whether it&apos;s a coding interview, language mastery,
            or certification, Milestorm helps break ambitions into manageable
            steps with personalized roadmaps.
          </p>
          <p className="text-xl text-center">
            You can also explore roadmaps from others who&apos;ve achieved
            similar goals, gaining insights and strategies to fast-track your
            progress. With Milestorm, you&apos;re supported by a resourceful
            community, making your journey to success both guided and inspiring.
          </p>
        </section>
      </MaxWidthWrapper>
      <MaxWidthWrapper className="py-16 bg-secondary/10 rounded-xl shadow-md">
        <section>
          <h2 className="text-3xl font-bold text-center text-wrap mb-6 relative">
            What you can do with{' '}
            <u className="relative no-underline after:absolute after:content-[''] after:h-full after:w-[120%] after:bg-smooth-text-underline after:bg-cover after:left-[-10px] after:translate-y-1/2">
              Milestrom
            </u>
          </h2>
          <FeatureSection />
        </section>
      </MaxWidthWrapper>
      <MaxWidthWrapper className="py-16">
        <section>
          <h2 className="text-3xl font-bold text-center text-wrap mb-6">
            Explore Example Roadmaps
          </h2>
          <div className="flex flex-col gap-4 md:flex-row">
            <Card className="flex-1">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  <u className="relative no-underline after:absolute after:content-[''] after:h-full after:w-[120%] after:bg-smooth-text-underline after:bg-cover after:left-[-30px] after:translate-y-5">
                    Master the Coding Interview
                  </u>
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <p className="text-lg">
                  Follow this comprehensive roadmap designed to help you build
                  the skills, confidence, and knowledge required to pass a
                  coding interview.
                </p>
                <p className="text-lg">
                  From data structures to algorithms, each milestone will
                  prepare you for success.
                </p>
              </CardContent>
              <CardFooter className="justify-center items-end flex-1">
                <Button className="text-md font-bold" size="lg">
                  View More
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex-1 flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  <u className="relative no-underline after:absolute after:content-[''] after:h-full after:w-[120%] after:bg-smooth-text-underline after:bg-cover after:left-[-20px] after:translate-y-5">
                    Achieve Spanish Fluency
                  </u>
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <p className="text-lg">
                  Embark on a journey to master the Spanish language with this
                  step-by-step roadmap.
                </p>
                <p className="text-lg">
                  Each milestone is designed to build your vocabulary, grammar,
                  and conversational skills, guiding you to fluency.
                </p>
              </CardContent>
              <CardFooter className="justify-center items-end flex-1">
                <Button className="text-md font-bold" size="lg">
                  View More
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </MaxWidthWrapper>
      <MaxWidthWrapper className="py-20 bg-brand-50 rounded-xl shadow-md">
        <section className="flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold text-center text-wrap mb-8">
            Start your journey with Milestorm
          </h2>
          <Button className="text-md font-bold" size="lg" variant="secondary">
            Get started for free
          </Button>
        </section>
      </MaxWidthWrapper>
    </>
  );
};

export default LandingPage;
