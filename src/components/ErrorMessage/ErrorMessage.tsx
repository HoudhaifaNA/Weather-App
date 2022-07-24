import React from 'react';

import Icon from 'components/Icon/Icon';
import { Wrapper, ErrorIcon, Message, Title } from './ErrorMessage.styles';

interface IProps {
  message: string;
  icon?: 'error' | 'folder';
  className?: string;
}

const ErrorMessage = ({ icon, message, className }: IProps) => (
  <Wrapper className={className}>
    <ErrorIcon>
      <Icon icon={icon} />
    </ErrorIcon>
    <Title>Oooops</Title>
    <Message>{message}</Message>
  </Wrapper>
);

ErrorMessage.defaultProps = {
  icon: 'error',
  className: '',
};

export default ErrorMessage;
