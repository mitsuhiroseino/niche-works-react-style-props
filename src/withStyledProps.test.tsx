import { render } from '@testing-library/react';
import React, { type FC } from 'react';
import withStyledProps from './withStyledProps';

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

describe('withStyledProps', () => {
  test('default', () => {
    const CustomComponent = withStyledProps(Component);
    render(<CustomComponent xColor="#ff0000">ABC</CustomComponent>);
  });
  test('custom', () => {
    const CustomComponent = withStyledProps(Component, {
      styleKeyMap: STYLE_KEY_MAP,
    });
    render(<CustomComponent fontColor="#ff0000">ABC</CustomComponent>);
  });
});
