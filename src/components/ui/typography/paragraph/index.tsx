import React, { ReactNode, HTMLProps } from 'react';
import clsx from 'clsx'; // Import clsx

interface ParagraphProps extends HTMLProps<HTMLParagraphElement> {
  children: ReactNode;
  className?: string;
}

const P: React.FC<ParagraphProps> = ({ children, className, ...otherProps }) => {
  // Use clsx to conditionally add classes
  const classNames = clsx('text-base', className);

  return (
    <p className={classNames} {...otherProps}>
      {children}
    </p>
  );
};

export default P;