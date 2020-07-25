import React from 'react';

interface propsI {
  title: string;
}
export const Title = (props: propsI) => {
  const { title } = props;
  return (
    <div className="title">
      <span>{title}</span>
    </div>
  );
};
