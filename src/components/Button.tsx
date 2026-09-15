import React from 'react';
import { theme } from '@styles/theme';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', children, ...props }, ref) => {
    const baseStyles = `
      px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300
      focus:outline-none focus:ring-2 focus:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed
    `;

    const variantStyles = {
      primary: `
        bg-[${theme.colors.coral}] text-white
        hover:bg-red-500 active:bg-red-600
        focus:ring-offset-2
        shadow-[0_4px_12px_rgba(255,107,107,0.2)]
      `,
      secondary: `
        bg-[${theme.colors.cream}] text-[${theme.colors.warmCharcoal}]
        border border-[${theme.colors.champagne}]
        hover:bg-[${theme.colors.champagne}]
        active:bg-[${theme.colors.peach}]
      `,
      ghost: `
        bg-transparent text-[${theme.colors.coral}]
        hover:bg-red-100
        active:bg-red-200
      `,
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
