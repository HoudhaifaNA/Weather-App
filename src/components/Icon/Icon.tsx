import React from 'react';

interface IProps {
  icon: string | undefined;
}

const Icon = ({ icon }: IProps) => (
  <use xlinkHref={`assets/sprite.svg#${icon}`} />
);

export default Icon;
