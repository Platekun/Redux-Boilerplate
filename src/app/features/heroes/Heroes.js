import React from 'react';
import { withRouter } from 'react-router-dom';

import { Title } from './styles';

export const HeroesContainer = () => <Title>Hello World!</Title>;

export default withRouter(HeroesContainer);
