import React from 'react';
import './styles.scss';

interface propsI {
  title: string;
}
export const Title = (props: propsI) => {
  const { title } = props;
  return (
    <div id="title">
      <span>{title}</span>
    </div>
  );
};
