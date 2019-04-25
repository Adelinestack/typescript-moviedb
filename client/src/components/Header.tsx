import React, { memo } from 'react';
import { HeaderLink, Circle } from '../stylized/headerStyle';

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => (
  <header>
    <HeaderLink href="/">
      <Circle className="fas fa-play-circle" />
      <h1>Moviee</h1>
    </HeaderLink>
  </header>
);

export default memo(Header);
