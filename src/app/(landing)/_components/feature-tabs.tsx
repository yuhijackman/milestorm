import Image from 'next/image';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

export interface FeatureTabsProps {
  tabs: {
    value: string;
    label: string;
    title: string;
    description: string;
    image: string;
  }[];
}

export const FeatureTabs = ({ tabs }: FeatureTabsProps) => {
  return (
    <div className="hidden md:block" aria-labelledby="features-heading">
      <Tabs defaultValue="create">
        <div className="flex justify-center">
          <TabsList className="bg-transparent text-gray-600 border-none">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="rounded-none text-lg data-[state=active]:shadow-none data-[state=active]:bg-transparent data-[state=active]:border-b-primary data-[state=active]:border-b-2 hover:text-black"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            <div className="flex flex-col justify-center items-center gap-8 md:flex-row">
              <div className="w-[50%]">
                <h3 className="text-2xl font-bold mb-4">{tab.title}</h3>
                <p className="text-xl">{tab.description}</p>
              </div>
              <div className="flex items-center">
                <Image
                  src={tab.image}
                  alt={`${tab.title} feature illustration`}
                  width="300"
                  height="300"
                ></Image>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};
