import React from 'react';
import { GlobalStyle } from "./../src/global-style";

export const decorators = [
  Story => (
    <>
      <link href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css' ></link>
      <GlobalStyle />
      <Story />
    </>
  )
]
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}