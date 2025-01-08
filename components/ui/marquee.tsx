import React from 'react'
import Image from 'next/image'

interface MarqueeItem {
  name: string;
  logo: string;
}

interface MarqueeProps {
  items: MarqueeItem[];
}

export const Marquee: React.FC<MarqueeProps> = ({ items }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="flex animate-marquee">
        {items.concat(items).map((item, index) => (
          <div key={index} className="flex-shrink-0 mx-8">
            <Image
              src={item.logo}
              alt={item.name}
              width={100}
              height={50}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

