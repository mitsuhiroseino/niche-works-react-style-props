import type { LooseDictionary } from '@niche-works/types';
import type {
  CSSProperties,
  ElementType,
  ForwardedRef,
  PropsWithoutRef,
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
  P extends LooseDictionary,
  T = unknown,
  M extends Record<string, keyof CSSProperties> = XStyleKeyMap,
>(Component: ElementType<P>, options: StylePropsOptions<M> = {}) {
  return forwardRef(
    (props: PropsWithoutRef<P & StyleProps<M>>, ref: ForwardedRef<T>) => {
      const styleizedProps = applyStyleProps(props, options) as unknown as P;
      return createElement(Component, { ref, ...styleizedProps });
    },
  );
}
