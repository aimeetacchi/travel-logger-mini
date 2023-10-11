import React, { ReactNode, HTMLProps } from 'react';
import clsx from 'clsx'; // Import clsx

interface HeadingProps extends HTMLProps<HTMLParagraphElement> {
  children: ReactNode;
  className?: string;
}

const H3: React.FC<HeadingProps> = ({ children, className, ...otherProps }) => {
  // Use clsx to conditionally add classes
  const classNames = clsx('text-2xl font-bold', className);

  return (
    <h3 className={classNames} {...otherProps}>
      {children}
    </h3>
  );
};

export default H3;