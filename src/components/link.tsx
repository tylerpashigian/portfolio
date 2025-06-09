import { Link as RouterLink } from '@tanstack/react-router';

import { cn } from '@/utils/cn';
import type { ComponentProps } from 'react';

type Variant = 'primary' | 'ghost';

type RouterLinkProps = ComponentProps<typeof RouterLink>;

export type LinkProps = Omit<RouterLinkProps, 'className'> & {
  variant?: Variant;
};

const variantClasses: Record<Variant, string> = {
  primary: 'bg-secondary p-1 rounded',
  ghost: 'hover:text-secondary-foreground',
};

const Link = ({ to, variant = 'primary', ...props }: LinkProps) => {
  return (
    <RouterLink
      to={to}
      {...props}
      className={cn(
        'text-primary-foreground transition-colors',
        variantClasses[variant]
      )}
    />
  );
};

export default Link;
