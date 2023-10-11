import React, { ReactNode, HTMLProps } from 'react';
import clsx from 'clsx'; // Import clsx

interface HeadingProps extends HTMLProps<HTMLParagraphElement> {
  children: ReactNode;
  className?: string;
}

const H4: React.FC<HeadingProps> = ({ children, className, ...otherProps }) => {
  // Use clsx to conditionally add classes
  const classNames = clsx('text-lg font-bold', className);

  return (
    <h4 className={classNames} {...otherProps}>
      {children}
    </h4>
  );
};

export default H4;
