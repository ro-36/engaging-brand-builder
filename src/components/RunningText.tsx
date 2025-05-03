
import React from 'react';
import { cn } from '@/lib/utils';

type RunningTextProps = {
  text: string;
  className?: string;
};

const RunningText = ({ text, className }: RunningTextProps) => {
  return (
    <div className={cn("w-full bg-primary/10 py-2 overflow-hidden", className)}>
      <div className="animate-marquee whitespace-nowrap">
        <span className="text-sm font-medium text-primary inline-block px-4">
          {text}
        </span>
        <span className="text-sm font-medium text-primary inline-block px-4">
          {text}
        </span>
        <span className="text-sm font-medium text-primary inline-block px-4">
          {text}
        </span>
      </div>
    </div>
  );
};

export default RunningText;
