import type { ApplyStylePropsOptions } from '../applyStyleProps';
import type { StyleKeyMap, XStyleKeyMap } from '../types';

export type StylePropsOptions<M extends StyleKeyMap = XStyleKeyMap> =
  ApplyStylePropsOptions<M>;
