import React from 'react';
import { Image as ImageIcon } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }

export function ImagePlaceholder({ label = 'Image placeholder', aspectRatio = 'auto', className = '', icon }: any) {
  const aspectClasses: any = { portrait: 'aspect-[3/4]', landscape: 'aspect-[4/3]', square: 'aspect-square', wide: 'aspect-[16/9]', auto: '' };
  return (
    <div className={cn("relative flex flex-col items-center justify-center bg-theme-cream text-theme-text-muted border border-theme-border overflow-hidden", aspectClasses[aspectRatio], className)}>
      {icon ? icon : <ImageIcon className="w-8 h-8 mb-2 opacity-40" />}
      <span className="text-xs font-medium uppercase tracking-wider opacity-70 text-center px-2">{label}</span>
    </div>
  );
}