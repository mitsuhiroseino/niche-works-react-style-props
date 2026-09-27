import type {
  ComponentProps,
  ComponentRef,
  CSSProperties,
  ElementType,
} from 'react';
import { createElement, forwardRef } from 'react';
import applyStyleProps from '../applyStyleProps';
import type { StyleProps, XStyleKeyMap } from '../types';
import type { StylePropsOptions } from './types';

/**
 * スタイル関連のプロパティをプロパティに指定できるコンポーネントを作成するHOC
 * @param Component
 * @param options
 * @returns
 */
export default function withStyleProps<
  C extends ElementType,
  M extends Record<string, keyof CSSProperties> = XStyleKeyMap,
>(Component: C, options: StylePropsOptions<M> = {}) {
  return forwardRef<ComponentRef<C>, ComponentProps<C> & StyleProps<M>>(
    (props, ref) => {
      const styleizedProps = applyStyleProps(props, options);
      return createElement(Component, { ref, ...styleizedProps });
    },
  );
}
