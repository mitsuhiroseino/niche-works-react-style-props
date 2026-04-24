import type { CSSProperties } from 'react';
import applyStyleProps from './applyStyleProps';
import type { StyleProps } from './types';

type TestPropsBase = {
  value?: string;
  onChange?: () => void;
  style?: CSSProperties | any;
  css?: CSSProperties | CSSProperties[];
  sx?: CSSProperties | CSSProperties[];
  any?: CSSProperties | CSSProperties[];
};

type DefaultTestProps = TestPropsBase & StyleProps;

describe('applyStyleProps', () => {
  const onChange = (...args) => {
    console.log(args);
  };
  const create = (options?: DefaultTestProps) => {
    return {
      value: 'abc',
      onChange,
      xColor: '#ff0000',
      xBackgroundColor: '#00ff00',
      ...options,
    } as DefaultTestProps;
  };

  describe('default', () => {
    test('スタイル関連のプロパティ無し', () => {
      const styledProps = applyStyleProps({
        value: 'abc',
        onChange,
      });
      expect(styledProps).toEqual({
        value: 'abc',
        onChange,
      });
    });

    test('スタイルプロパティがオブジェクト、配列以外', () => {
      const styleFn = () => {
        return {
          borderColor: '#0000ff',
        };
      };
      const styledProps = applyStyleProps(
        create({
          style: styleFn,
        }),
      );
      expect(styledProps).toEqual({
        value: 'abc',
        onChange,
        style: styleFn,
      });
    });
  });

  describe('styleProp', () => {
    test('undefined', () => {
      const styledProps = applyStyleProps(create());
      expect(styledProps).toEqual({
        value: 'abc',
        onChange,
        style: {
          color: '#ff0000',
          backgroundColor: '#00ff00',
        },
      });
    });

    describe('style', () => {
      test('none', () => {
        const styledProps = applyStyleProps(create(), { styleProp: 'style' });
        expect(styledProps).toEqual({
          value: 'abc',
          onChange,
          style: {
            color: '#ff0000',
            backgroundColor: '#00ff00',
          },
        });
      });

      test('object', () => {
        const styledProps = applyStyleProps(
          create({
            xBorderColor: '#ffffff',
            style: {
              borderColor: '#0000ff',
            },
          }),
          { styleProp: 'style' },
        );
        expect(styledProps).toEqual({
          value: 'abc',
          onChange,
          style: {
            color: '#ff0000',
            backgroundColor: '#00ff00',
            borderColor: '#0000ff',
          },
        });
      });

      test('object (設定済み)', () => {
        const styledProps = applyStyleProps(
          create({
            style: {
              borderColor: '#0000ff',
            },
          }),
          { styleProp: 'style' },
        );
        expect(styledProps).toEqual({
          value: 'abc',
          onChange,
          style: {
            color: '#ff0000',
            backgroundColor: '#00ff00',
            borderColor: '#0000ff',
          },
        });
      });
    });

    describe('css', () => {
      test('none', () => {
        const styledProps = applyStyleProps(create(), { styleProp: 'css' });
        expect(styledProps).toEqual({
          value: 'abc',
          onChange,
          css: {
            color: '#ff0000',
            backgroundColor: '#00ff00',
          },
        });
      });

      test('object', () => {
        const styledProps = applyStyleProps(
          create({
            css: {
              borderColor: '#0000ff',
            },
          }),
          { styleProp: 'css' },
        );
        expect(styledProps).toEqual({
          value: 'abc',
          onChange,
          css: {
            color: '#ff0000',
            backgroundColor: '#00ff00',
            borderColor: '#0000ff',
          },
        });
      });

      test('array', () => {
        const styledProps = applyStyleProps(
          create({
            css: [
              {
                borderColor: '#0000ff',
              },
            ],
          }),
          { styleProp: 'css' },
        );
        expect(styledProps).toEqual({
          value: 'abc',
          onChange,
          css: [
            {
              color: '#ff0000',
              backgroundColor: '#00ff00',
            },
            { borderColor: '#0000ff' },
          ],
        });
      });
    });

    describe('sx', () => {
      test('none', () => {
        const styledProps = applyStyleProps(create(), { styleProp: 'sx' });
        expect(styledProps).toEqual({
          value: 'abc',
          onChange,
          sx: {
            color: '#ff0000',
            backgroundColor: '#00ff00',
          },
        });
      });

      test('object', () => {
        const styledProps = applyStyleProps(
          create({
            sx: {
              borderColor: '#0000ff',
            },
          }),
          { styleProp: 'sx' },
        );
        expect(styledProps).toEqual({
          value: 'abc',
          onChange,
          sx: {
            color: '#ff0000',
            backgroundColor: '#00ff00',
            borderColor: '#0000ff',
          },
        });
      });

      test('array', () => {
        const styledProps = applyStyleProps(
          create({
            sx: [
              {
                borderColor: '#0000ff',
              },
            ],
          }),
          { styleProp: 'sx' },
        );
        expect(styledProps).toEqual({
          value: 'abc',
          onChange,
          sx: [
            {
              color: '#ff0000',
              backgroundColor: '#00ff00',
            },
            { borderColor: '#0000ff' },
          ],
        });
      });
    });

    describe('any', () => {
      test('none', () => {
        const styledProps = applyStyleProps(create(), { styleProp: 'any' });
        expect(styledProps).toEqual({
          value: 'abc',
          onChange,
          any: {
            color: '#ff0000',
            backgroundColor: '#00ff00',
          },
        });
      });

      test('object', () => {
        const styledProps = applyStyleProps(
          create({
            any: {
              borderColor: '#0000ff',
            },
          }),
          { styleProp: 'any' },
        );
        expect(styledProps).toEqual({
          value: 'abc',
          onChange,
          any: {
            color: '#ff0000',
            backgroundColor: '#00ff00',
            borderColor: '#0000ff',
          },
        });
      });
    });
  });

  describe('styleApplyMode', () => {
    test('未設定', () => {
      const styledProps = applyStyleProps(
        create({
          any: {
            borderColor: '#0000ff',
          },
        }),
        { styleProp: 'any' },
      );
      expect(styledProps).toEqual({
        value: 'abc',
        onChange,
        any: {
          color: '#ff0000',
          backgroundColor: '#00ff00',
          borderColor: '#0000ff',
        },
      });
    });

    test('merge', () => {
      const styledProps = applyStyleProps(
        create({
          any: {
            borderColor: '#0000ff',
          },
        }),
        { styleProp: 'any', styleApplyMode: 'merge' },
      );
      expect(styledProps).toEqual({
        value: 'abc',
        onChange,
        any: {
          color: '#ff0000',
          backgroundColor: '#00ff00',
          borderColor: '#0000ff',
        },
      });
    });

    test('append', () => {
      const styledProps = applyStyleProps(
        create({
          any: {
            borderColor: '#0000ff',
          },
        }),
        { styleProp: 'any', styleApplyMode: 'append' },
      );
      expect(styledProps).toEqual({
        value: 'abc',
        onChange,
        any: [
          {
            color: '#ff0000',
            backgroundColor: '#00ff00',
          },
          {
            borderColor: '#0000ff',
          },
        ],
      });
    });
  });

  describe('styleKeyMap', () => {
    test('任意のマッピング', () => {
      const styledProps = applyStyleProps(
        {
          value: 'abc',
          onChange,
          fontColor: '#ff0000',
          baseColor: '#00ff00',
        },
        {
          styleKeyMap: {
            fontColor: 'color',
            baseColor: 'backgroundColor',
          },
        },
      );
      expect(styledProps).toEqual({
        value: 'abc',
        onChange,
        style: {
          color: '#ff0000',
          backgroundColor: '#00ff00',
        },
      });
    });
  });
});
