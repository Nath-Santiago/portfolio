import React from 'react';

interface propsI {
  title: string;
}
export const Title = (props: propsI) => {
  const { title } = props;
  return (
    <div className="title">
      <h1>{title}</h1>
    </div>
  );
};
