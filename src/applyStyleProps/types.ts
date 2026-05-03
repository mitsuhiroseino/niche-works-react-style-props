import type { StyleProxyOptions } from '@niche-works/react-style-proxy';
import type {
  ExtractStylePropsOptions,
  StyleKeyMap,
  XStyleKeyMap,
} from '../types';

/**
 * applyStylePropsのオプション
 */
export type ApplyStylePropsOptions<M extends StyleKeyMap = XStyleKeyMap> =
  StyleProxyOptions & ExtractStylePropsOptions<M>;
