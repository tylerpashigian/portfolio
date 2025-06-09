import React from 'react';

interface Props {
  title: string;
  description?: React.ReactNode;
}

const TextSection = ({ title, description }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-primary-foreground">{title}</p>
      {description ? (
        <div className="text-secondary-foreground">{description}</div>
      ) : null}
    </div>
  );
};

export default TextSection;
