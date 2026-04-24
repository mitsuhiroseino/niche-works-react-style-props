import proxyStyle from '@niche-works/react-style-proxy';
import { CSSProperties } from 'react';
import extractStyleProps from './extractStyleProps';
import type { ApplyStylePropsOptions, StyleProps, XStyleKeyMap } from './types';

/**
 * スタイル関連のプロパティをスタイルプロパティ(styleやcss)へ適用する
 *
 * @param props プロパティ
 * @param options オプション
 * @returns
 */
export default function applyStyleProps<
  P extends Record<string, any> & StyleProps<M>,
  M extends Record<string, keyof CSSProperties> = XStyleKeyMap,
>(props: P, options: ApplyStylePropsOptions<M> = {}) {
  const { props: rest, style } = extractStyleProps(props, options);

  if (Object.keys(style).length) {
    // style関連のプロパティがある場合のみ処理
    return proxyStyle(rest, style, options);
  } else {
    return rest;
  }
}
