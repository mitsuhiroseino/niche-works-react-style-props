import { render } from '@testing-library/react';
import React, { type FC } from 'react';
import withStyleProps from './withStyleProps';

type ComponentProps = {
  children?: string;
  style?: any;
};

const Component: FC<ComponentProps> = function (props) {
  expect(props.style).toEqual({
    color: '#ff0000',
  });
  return <div {...props} />;
};

const STYLE_KEY_MAP = {
  fontColor: 'color',
  baseColor: 'backgroundColor',
} as const;

describe('withStyleProps', () => {
  test('default', () => {
    const CustomComponent = withStyleProps(Component);
    render(<CustomComponent xColor="#ff0000">ABC</CustomComponent>);
  });
  test('custom', () => {
    const CustomComponent = withStyleProps(Component, {
      styleKeyMap: STYLE_KEY_MAP,
    });
    render(<CustomComponent fontColor="#ff0000">ABC</CustomComponent>);
  });
});
