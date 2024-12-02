import Image from 'next/image';

export interface FeatureItemsProps {
  items: {
    title: string;
    description: string;
    image: string;
  }[];
}

export const FeatureItems = ({ items }: FeatureItemsProps) => {
  return (
    <div className="flex flex-col gap-12 md:hidden">
      {items.map((item) => (
        <div key={item.title} className="flex flex-col items-center">
          <Image
            src={item.image}
            alt=""
            width="375"
            height="370"
            className="w-[375] object-cover object-top mb-6"
          />
          <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
          <p className="text-xl">{item.description}</p>
        </div>
      ))}
    </div>
  );
};
