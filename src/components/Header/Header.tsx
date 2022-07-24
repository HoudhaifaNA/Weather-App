import React from 'react';

import { Wrapper, LogoName } from './Header.styles';

const Header = () => (
  <Wrapper>
    <LogoName>
      Weather <span>Fast</span>
    </LogoName>
  </Wrapper>
);

export default Header;
