import { cn } from '@/lib/utils';
import {
  type LucideIcon,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
} from 'lucide-react';
import React from 'react';

type IconName = 'instagram' | 'facebook' | 'linkedin' | 'youtube';

interface SocialIconItem {
  name: IconName;
  link: string;
}

interface SocialIconsProps {
  icons: SocialIconItem[];
  className?: string;
  iconsSize?: number;
}

const iconMap: Record<IconName, LucideIcon> = {
  instagram: Instagram,
  facebook: Facebook,
  linkedin: Linkedin,
  youtube: Youtube,
};

function SocialIcons({
  icons,
  iconsSize = 24,
  className = '',
}: SocialIconsProps) {
  return (
    <div className={cn('flex gap-4', className)}>
      {icons.map((item, index) => {
        const IconComponent = iconMap[item.name];
        return (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-white p-1 text-white transition-colors hover:bg-white hover:text-orange-500"
          >
            <IconComponent size={iconsSize} />
          </a>
        );
      })}
    </div>
  );
}

export default SocialIcons;
