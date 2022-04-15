/* eslint-disable react/prop-types */
import React from 'react';

import { Container } from './styles';

export function DashboardContainerButtons(props) {
  const { children } = props;

  return <Container>{children}</Container>;
}
