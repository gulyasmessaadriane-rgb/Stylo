import React from 'react';
import { theme } from '@styles/theme';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, hover = true, className = '', ...props }, ref) => {
    const baseStyles = `
      bg-[${theme.colors.cream}]
      border border-[rgba(245,230,211,0.5)]
      p-4
      rounded-[${theme.borderRadius.cards}]
      shadow-[${theme.shadows.light}]
      transition-all duration-300
      ${hover ? 'hover:shadow-[0_2px_8px_rgba(0,0,0,0.12)] hover:-translate-y-0.5' : ''}
    `;

    return (
      <div ref={ref} className={`${baseStyles} ${className}`} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
