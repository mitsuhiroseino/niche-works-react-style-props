import type {
  XDecorationStyleKeyMap,
  XEffectStyleKeyMap,
  XFlexboxItemStyleKeyMap,
  XFlexboxStyleKeyMap,
  XLayoutStyleKeyMap,
  XPositionStyleKeyMap,
  XSizeStyleKeyMap,
  XSpacingStyleKeyMap,
  XStyleKeyMap,
} from './types';

/**
 * 装飾に関するスタイルのキーのマッピング
 */
export const DECORATION_STYLE_KEY_MAP: XDecorationStyleKeyMap = {
  xBackground: 'background',
  xBackgroundColor: 'backgroundColor',
  xBorder: 'border',
  xBorderBottom: 'borderBottom',
  xBorderColor: 'borderColor',
  xBorderLeft: 'borderLeft',
  xBorderRadius: 'borderRadius',
  xBorderRight: 'borderRight',
  xBorderStyle: 'borderStyle',
  xBorderTop: 'borderTop',
  xBorderWidth: 'borderWidth',
  xBoxShadow: 'boxShadow',
  xColor: 'color',
} as const;

/**
 * 視覚効果に関するスタイルのキーのマッピング
 */
export const EFFECT_STYLE_KEY_MAP: XEffectStyleKeyMap = {
  xOpacity: 'opacity',
  xVisibility: 'visibility',
};

/**
 * Flexboxに関するスタイルのキーのマッピング
 */
export const FLEXBOX_STYLE_KEY_MAP: XFlexboxStyleKeyMap = {
  xAlignItems: 'alignItems',
  xFlexDirection: 'flexDirection',
  xFlexWrap: 'flexWrap',
  xJustifyContent: 'justifyContent',
  xGap: 'gap',
};

/**
 * Flexboxの子要素に関するスタイルのキー
 */
export const FLEXBOX_ITEM_STYLE_KEY_MAP: XFlexboxItemStyleKeyMap = {
  xFlex: 'flex',
  xFlexBasis: 'flexBasis',
  xFlexGrow: 'flexGrow',
  xFlexShrink: 'flexShrink',
};

/**
 * レイアウトに関するスタイルのキー
 */
export const LAYOUT_STYLE_KEY_MAP: XLayoutStyleKeyMap = {
  xDisplay: 'display',
  xOverflow: 'overflow',
};

/**
 * 位置に関するスタイルのキー
 */
export const POSITION_STYLE_KEY_MAP: XPositionStyleKeyMap = {
  xBottom: 'bottom',
  xLeft: 'left',
  xPosition: 'position',
  xRight: 'right',
  xTop: 'top',
  xZIndex: 'zIndex',
};

/**
 * サイズに関するスタイルのキー
 */
export const SIZE_STYLE_KEY_MAP: XSizeStyleKeyMap = {
  xHeight: 'height',
  xMaxHeight: 'maxHeight',
  xMaxWidth: 'maxWidth',
  xMinHeight: 'minHeight',
  xMinWidth: 'minWidth',
  xWidth: 'width',
  xBoxSizing: 'boxSizing',
};

/**
 * 余白に関するスタイルのキー
 */
export const SPACING_STYLE_KEY_MAP: XSpacingStyleKeyMap = {
  xMargin: 'margin',
  xMarginBottom: 'marginBottom',
  xMarginLeft: 'marginLeft',
  xMarginRight: 'marginRight',
  xMarginTop: 'marginTop',
  xPadding: 'padding',
  xPaddingBottom: 'paddingBottom',
  xPaddingLeft: 'paddingLeft',
  xPaddingRight: 'paddingRight',
  xPaddingTop: 'paddingTop',
};

export const DEFAULT_STYLE_KEY_MAP: XStyleKeyMap = {
  ...DECORATION_STYLE_KEY_MAP,
  ...EFFECT_STYLE_KEY_MAP,
  ...FLEXBOX_STYLE_KEY_MAP,
  ...FLEXBOX_ITEM_STYLE_KEY_MAP,
  ...LAYOUT_STYLE_KEY_MAP,
  ...POSITION_STYLE_KEY_MAP,
  ...SIZE_STYLE_KEY_MAP,
  ...SPACING_STYLE_KEY_MAP,
};
