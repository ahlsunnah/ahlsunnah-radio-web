import React from 'react'
import {css} from '@emotion/core'
import direction from 'direction'

const commonCss = css`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
`

const rtlScrollingCss = css`
  ${commonCss}
  animation: scroll-right 15s linear infinite;
  transform: translateX(-100%);
  text-align: right;
  direction: rtl;
  @keyframes scroll-right {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`

const ltrScrollingCss = css`
  ${commonCss}
  animation: scroll-left 15s linear infinite;
  transform: translateX(100%);
  text-align: left;
  direction: ltr;
  @keyframes scroll-left {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`

export interface IScrollingTextProps {
  children: string
  width: string
}
export const ScrollingText: React.FC<IScrollingTextProps> = ({
  children,
  width,
}): JSX.Element => {
  const isRTL = direction(children) === 'rtl'

  return (
    <div
      css={css`
        position: relative;
        height: 2em;
        top: 0.5em;
        width: ${width};
      `}
    >
      <div css={isRTL ? rtlScrollingCss : ltrScrollingCss}>{children}</div>
    </div>
  )
}

export default ScrollingText
