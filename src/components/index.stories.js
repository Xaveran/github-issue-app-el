import React from 'react';
import { Button } from '@storybook/react/demo';

export default { title: 'StorybookButton' };

export const withText = () => <Button>Hello Button</Button>;

export const withDifferentText = () => <Button>Not hello world</Button>