import { css } from "@emotion/react";

export const typographyValues = {
  textBold: {
    fontWeight: 700,
  },
  textTitle: {
    fontSize: 3.5, // 56px
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: "0",
  },
  textSubtitle: {
    fontSize: 1.75, // 28px
    fontWeight: 500,
    lineHeight: 1.3,
    letterSpacing: "0",
  },
  textXxl: {
    fontSize: 2.5, // 40px
    fontWeight: 700,
    lineHeight: 1.25,
    letterSpacing: "0",
  },
  textXl: {
    fontSize: 1.375, // 22px
    fontWeight: 600,
    lineHeight: 1.4,
    letterSpacing: "0",
  },
  textL: {
    fontSize: 1.125, // 18px
    fontWeight: 600,
    lineHeight: 1.4,
    letterSpacing: "0",
  },
  textM: {
    fontSize: 1, // 16px
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: "0",
  },
  textS: {
    fontSize: 0.875, // 14px
    fontWeight: 400,
    lineHeight: 1.5,
  },
  textXs: {
    fontSize: 0.75, // 12px
    fontWeight: 400,
    lineHeight: 1.5,
    fontStyle: "normal",
  },

  textInput: {
    fontSize: 1, // 12px
    fontWeight: 400,
    lineHeight: 1.5,
    fontStyle: "normal",
  },
};

export const getFontSize = (type) =>
  `${typographyValues[type]?.fontSize || 0.875}rem`;

export const typography = {
  textBold: css`
    font-weight: ${typographyValues.textBold.fontWeight};
  `,
  textTitle: css`
    font-size: ${typographyValues.textTitle.fontSize}rem;
    font-weight: ${typographyValues.textTitle.fontWeight};
    line-height: ${typographyValues.textTitle.lineHeight};
    letter-spacing: ${typographyValues.textTitle.letterSpacing};
  `,
  textSubtitle: css`
    font-size: ${typographyValues.textSubtitle.fontSize}rem;
    font-weight: ${typographyValues.textSubtitle.fontWeight};
    line-height: ${typographyValues.textSubtitle.lineHeight};
    letter-spacing: ${typographyValues.textSubtitle.letterSpacing};
  `,
  textXxl: css`
    font-size: ${typographyValues.textXxl.fontSize}rem;
    font-weight: ${typographyValues.textXxl.fontWeight};
    line-height: ${typographyValues.textXxl.lineHeight};
    letter-spacing: ${typographyValues.textXxl.letterSpacing};
  `,
  textXl: css`
    font-size: ${typographyValues.textXl.fontSize}rem;
    font-weight: ${typographyValues.textXl.fontWeight};
    line-height: ${typographyValues.textXl.lineHeight};
    letter-spacing: ${typographyValues.textXl.letterSpacing};
  `,
  textL: css`
    font-size: ${typographyValues.textL.fontSize}rem;
    font-weight: ${typographyValues.textL.fontWeight};
    line-height: ${typographyValues.textL.lineHeight};
    letter-spacing: ${typographyValues.textL.letterSpacing};
  `,
  textM: css`
    font-size: ${typographyValues.textM.fontSize}rem;
    font-weight: ${typographyValues.textM.fontWeight};
    line-height: ${typographyValues.textM.lineHeight};
    letter-spacing: ${typographyValues.textM.letterSpacing};
  `,
  textS: css`
    font-size: ${typographyValues.textS.fontSize}rem;
    font-weight: ${typographyValues.textS.fontWeight};
    line-height: ${typographyValues.textS.lineHeight};
    font-style: ${typographyValues.textS.fontStyle};
  `,
  textXs: css`
    font-size: ${typographyValues.textXs.fontSize}rem;
    font-weight: ${typographyValues.textXs.fontWeight};
    line-height: ${typographyValues.textXs.lineHeight};
    font-style: ${typographyValues.textXs.fontStyle};
  `,
  textInput: css`
    font-size: ${typographyValues.textInput.fontSize}rem;
    font-weight: ${typographyValues.textInput.fontWeight};
    line-height: ${typographyValues.textInput.lineHeight};
    font-style: ${typographyValues.textInput.fontStyle};
  `,
};
