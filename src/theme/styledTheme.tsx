import {css, CSSProp, DefaultTheme} from 'styled-components'

import mkConst from '../common/constants'

const sizes = {
  desktop: mkConst.desktop,
  tablet: mkConst.tablet,
  mobile: mkConst.mobile,
}

const media: Record<keyof typeof sizes, (l: TemplateStringsArray, ...p: string[]) => CSSProp> = {
  desktop: (literals: TemplateStringsArray, ...args: string[]): CSSProp => css`
    @media only screen and (min-width: ${sizes.desktop}px) {
      ${css(literals, ...args)}
    }
  `,
  tablet: (literals: TemplateStringsArray, ...args: string[]): CSSProp => css`
    @media only screen and (max-width: ${sizes.tablet}px) and (min-width: ${sizes.mobile - 1}px) {
      ${css(literals, ...args)}
    }
  `,
  mobile: (literals: TemplateStringsArray, ...args: string[]): CSSProp => css`
    @media only screen and (max-width: ${sizes.mobile}px) {
      ${css(literals, ...args)}
    }
  `,
}

export const theme = {
  media,
}
export type Theme = typeof theme
