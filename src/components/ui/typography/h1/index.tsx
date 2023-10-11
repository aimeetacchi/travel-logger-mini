import React, { ReactNode, HTMLProps } from 'react';
import clsx from 'clsx'; // Import clsx

interface HeadingProps extends HTMLProps<HTMLParagraphElement> {
  children: ReactNode;
  className?: string;
}

const H1: React.FC<HeadingProps> = ({ children, className, ...otherProps }) => {
  // Use clsx to conditionally add classes
  const classNames = clsx('text-5xl font-bold', className);

  return (
    <h1 className={classNames} {...otherProps}>
      {children}
    </h1>
  );
};

export default H1;
