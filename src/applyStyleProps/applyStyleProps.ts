import { styleProxy } from '@niche-works/react-style-proxy';
import type { LooseDictionary } from '@niche-works/types';
import type { CSSProperties } from 'react';
import extractStyleProps from '../extractStyleProps';
import type { StyleProps, XStyleKeyMap } from '../types';
import type { ApplyStylePropsOptions } from './types';

/**
 * スタイル関連のプロパティをスタイルプロパティ(styleやcss)へ適用する
 *
 * @param props プロパティ
 * @param options オプション
 * @returns
 */
export default function applyStyleProps<
  P extends LooseDictionary & StyleProps<M>,
  M extends Record<string, keyof CSSProperties> = XStyleKeyMap,
>(props: P, options: ApplyStylePropsOptions<M> = {}) {
  const { props: rest, style } = extractStyleProps(props, options);

  if (Object.keys(style).length) {
    // style関連のプロパティがある場合のみ処理
    return styleProxy(rest, style, options);
  } else {
    return rest;
  }
}
