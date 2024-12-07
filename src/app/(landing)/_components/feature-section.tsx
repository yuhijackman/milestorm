import { FeatureItems } from './feature-items';
import { FeatureTabs } from './feature-tabs';

const FEATURE_DATA = [
  {
    value: 'create',
    label: 'Create Your Own Roadmap',
    title: 'Build Your Unique Roadmap to Success',
    description:
      'Create a personalized roadmap tailored to your goals. Set milestones, add tasks, and organize by categories like Programming, Accounting, or Language Learning to keep everything structured and clear.',
    image: '/landing-feature-roadmap.svg',
  },
  {
    value: 'track',
    label: 'Track Your Progress',
    title: 'Track Your Progress',
    description:
      'Monitor your progress visually with our intuitive progress bar and milestone markers. Milestorm helps you stay focused and motivated as you advance towards your goal, step by step.',
    image: '/landing-feature-progress.svg',
  },
  {
    value: 'collaborate',
    label: 'Collaborate and Share',
    title: 'Collaborate, Share and Learn from Others',
    description:
      'Unlock the potential of shared wisdom by exploring roadmaps created by others. Find inspiration in their paths and adapt proven strategies to achieve your own goals. With Milestorm, you can follow the footsteps of successful individuals while contributing your unique journey to the community.',
    image: '/landing-feature-share.svg',
  },
];

export const FeatureSection = () => {
  const tabData = FEATURE_DATA;
  const ItemData = FEATURE_DATA.map((item) => {
    return {
      title: item.title,
      description: item.description,
      image: item.image,
    };
  });

  return (
    <>
      {/* feature section for a medium or larger screen  */}
      <FeatureTabs tabs={tabData} />
      <FeatureItems items={ItemData} />
    </>
  );
};
