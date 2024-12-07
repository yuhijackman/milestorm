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
      {items.map((item, index) => (
        <article
          key={item.title}
          className="flex flex-col items-center"
          aria-labelledby={`feature-${index}`}
        >
          <Image
            src={item.image}
            alt={`${item.title} feature illustration`}
            width="375"
            height="370"
            className="w-full max-w-[375px] object-cover object-top mb-6"
            priority={index === 0}
          />
          <h3 id={`feature-${index}`} className="text-2xl font-bold mb-4">
            {item.title}
          </h3>
          <p className="text-xl">{item.description}</p>
        </article>
      ))}
    </div>
  );
};
