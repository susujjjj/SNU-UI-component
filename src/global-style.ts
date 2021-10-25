import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Pretendard;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
        letter-spacing: normal;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  * {
    box-sizing: border-box;
  }

  :root {
    --white: #fff;
    --gray-5: #f6f6f6;
    --gray-10: #f0f0f0;
    --gray-50: #808080;
    --gray-60: #606060;
    --gray-70: #505050;
    --gray-20: #ebebeb;
    --gray-80: #333;
    --gray-90: #1e1e1e;
    --red-5: #ffefe7;
    --gray-40: #aaa;
    --red-10: #ffe3d5;
    --gray-30: #d3d3d3;
    --red-20: #ffc0ac;
    --red-30: #ff9682;
    --red-40: #ff6f63;
    --red-70: #b71836;
    --red-50: #ff3033;
    --red-60: #db2335;
    --red-80: #930f33;
    --red-90: #7a0932;
    --yellow-5: #fffbe5;
    --yellow-10: #fff7cc;
    --yellow-20: #ffed99;
    --yellow-30: #ffe066;
    --yellow-40: #ffbe3f;
    --yellow-50: #ff9c09;
    --yellow-60: #db7c00;
    --yellow-70: #b76d00;
    --yellow-80: #935700;
    --green-5: #f3fff3;
    --yellow-90: #7a3e00;
    --green-10: #d6fadc;
    --green-20: #aff5c7;
    --green-30: #81e2a8;
    --green-40: #5cc58c;
    --green-60: #21895d;
    --green-50: #00b372;
    --green-70: #17735d;
    --green-80: #0e5c49;
    --green-90: #084c3c;
    --ihpblue-5: #ecf8ff;
    --ihpblue-10: #cdebfc;
    --ihpblue-20: #9dd4fa;
    --ihpblue-30: #6ab3f0;
    --ihpblue-40: #4493e1;
    --ihpblue-50: #0f66ce;
    --ihpblue-60: #0a4fb1;
    --ihpblue-70: #073a94;
    --ihpblue-80: #042977;
    --ihpblue-90: #021c62;
    --dustyblue-5: #f8fdff;
    --dustyblue-10: #ecf1f7;
    --dustyblue-20: #e2e7ed;
    --dustyblue-30: #dae2e7;
    --dustyblue-40: #d2dbe3;
    --dustyblue-50: #c1cad5;
    --dustyblue-60: #abb7c3;
    --dustyblue-80: #7e8b98;
    --dustyblue-70: #97a2ad;
    --dustyblue-90: #596a7a;
  }

  .recharts-cartesian-grid-vertical line:nth-last-child(1),
  .recharts-cartesian-grid-vertical line:nth-last-child(2) {
    stroke-opacity: 0;
  }
`;

export const H1Bold = styled.span`
  font-family: Pretendard;
  font-size: 26px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const H1Medium = styled.span`
  font-family: Pretendard;
  font-size: 26px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const H1Regular = styled.span`
  font-family: Pretendard;
  font-size: 26px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const H1Light = styled.span`
  font-family: Pretendard;
  font-size: 26px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const H2Bold = styled.span`
  font-family: Pretendard;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const H2Medium = styled.span`
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const H2Regular = styled.span`
  font-family: Pretendard;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const H2Light = styled.span`
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const H3Bold = styled.span`
  font-family: Pretendard;
  font-size: 17px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const H3Medium = styled.span`
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const H3Regular = styled.span`
  font-family: Pretendard;
  font-size: 17px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const H3Light = styled.span`
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const body1bold = styled.span`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const Element1Bold = styled.span`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const Body1Medium = styled.span`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const Element1Medium = styled.span`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const Body1Regular = styled.span`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const Element1Regular = styled.span`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const Body1Light = styled.span`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const Element1Light = styled.span`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const Body2Bold = styled.span`
  font-family: Pretendard;
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const Element2Bold = styled.span`
  font-family: Pretendard;
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const Body2Medium = styled.span`
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const Element2Medium = styled.span`
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const Body2Regular = styled.span`
  font-family: Pretendard;
  font-size: 0.938rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const Element2Regular = styled.span`
  font-family: Pretendard;
  font-size: 0.938rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;
export const Body2Light = styled.span`
  font-family: Pretendard;
  font-size: 0.938rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const Element2Light = styled.span`
  font-family: Pretendard;
  font-size: 0.938rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const Body3Bold = styled.span`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const Element3Bold = styled.span`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const Body3Medium = styled.span`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const Element3Medium = styled.span`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const Element3Regular = styled.span`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const Body3Regular = styled.span`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const Body3Light = styled.span`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const Element3Light = styled.span`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const Body4Bold = styled.span`
  font-family: Pretendard;
  font-size: 13px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const Element4Bold = styled.span`
  font-family: Pretendard;
  font-size: 13px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const Body4Medium = styled.span`
  font-family: Pretendard;
  font-size: 13px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const Element4Medium = styled.span`
  font-family: Pretendard;
  font-size: 13px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const Body4Regular = styled.span`
  font-family: Pretendard;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const Element4Regular = styled.span`
  font-family: Pretendard;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const Body4Light = styled.span`
  font-family: Pretendard;
  font-size: 13px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const Element4light = styled.span`
  font-family: Pretendard;
  font-size: 13px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const Element5Bold = styled.span`
  font-family: Pretendard;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const Element5Medium = styled.span`
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const Element5Regular = styled.span`
  font-family: Pretendard;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const Element5Light = styled.span`
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const CaptionBold = styled.span`
  font-family: Pretendard;
  font-size: 11px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const CaptionMedium = styled.span`
  font-family: Pretendard;
  font-size: 11px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const CaptionRegular = styled.span`
  font-family: Pretendard;
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const CaptionLight = styled.span`
  font-family: Pretendard;
  font-size: 11px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;
