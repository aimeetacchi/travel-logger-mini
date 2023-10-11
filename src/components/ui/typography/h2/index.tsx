import React, { ReactNode, HTMLProps } from 'react';
import clsx from 'clsx'; // Import clsx

interface HeadingProps extends HTMLProps<HTMLParagraphElement> {
  children: ReactNode;
  className?: string;
}

const H2: React.FC<HeadingProps> = ({ children, className, ...otherProps }) => {
  // Use clsx to conditionally add classes
  const classNames = clsx('text-3xl font-bold', className);

  return (
    <h2 className={classNames} {...otherProps}>
      {children}
    </h2>
  );
};

export default H2;