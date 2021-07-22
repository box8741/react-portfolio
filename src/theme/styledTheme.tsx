import {css, CSSProp, DefaultTheme} from 'styled-components'

import mkConst from '../common/constants'

const sizes = {
  desktop: mkConst.desktop,
  tablet: mkConst.tablet,
  mobile: mkConst.mobile,
}

const media: Record<keyof typeof sizes, (l: TemplateStringsArray, ...p: string[]) => CSSProp> = {
  desktop: (literals: TemplateStringsArray, ...args: string[]): CSSProp => css`
    @media only screen and (max-width: ${sizes.desktop}px) {
      ${css(literals, ...args)}
    }
  `,
  tablet: (literals: TemplateStringsArray, ...args: string[]): CSSProp => css`
    @media only screen and (max-width: ${sizes.tablet}px) {
      ${css(literals, ...args)}
    }
  `,
  mobile: (literals: TemplateStringsArray, ...args: string[]): CSSProp => css`
    @media only screen and (max-width: ${sizes.mobile}px) {
      ${css(literals, ...args)}
    }
  `,
}
const color = {
  default: {
    red: '#ec5a65',
  },
  background: {
    primary: '#353451',
    default: '#F9F9FE',
  },
  font: {
    primary: '#45435E',
    light: '#5e5c7f',
  },
}

export const theme = {
  media,
  size: sizes,
  color,
}

export type Theme = typeof theme
