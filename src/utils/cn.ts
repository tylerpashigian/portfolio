import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

export const cn = (...args: Parameters<typeof clsx>) => twMerge(clsx(...args));
