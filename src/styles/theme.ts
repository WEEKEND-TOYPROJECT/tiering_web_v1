import "@emotion/react";
import { Theme } from "@emotion/react";

declare module "@emotion/react" {
  interface Theme {
    colors: {
      background: string;
      onBackGround: string;
      primary: string;
      onPrimary: string;
      secondary: string;
      gradient: string;
      tertiary: string;
      surface: string;
      surfaceVariantLight: string;
      surfaceVariantDark: string;
      blue: string;
    };
    fontSize: {
      displayLarge: string;
      displayMedium: string;
      displaySmall: string;
      mobileTitleLarge: string;
      titleLarge: string;
      titleMedium: string;
      titleSmall: string;
      bodyLarge: string;
      bodyMedium: string;
      bodySmall: string;
    };
    mq: {
      laptop: string;
      tablet: string;
      mobile: string;
    };
  }
}
export const size = {
  largest: "75em",
  large: "56.25em",
  medium: "37.5em", // 600px
  small: "31.25em", // 500px
  smallest: "25em", // 400px
};
export const theme: Theme = {
  colors: {
    background: `hsla(0, 0%, 8%, 1)`,
    onBackGround: "hsl(0,0%,100%,1)",
    primary: `hsl(0,0%,100%,1)`,
    onPrimary: `hsl(0,0%,0%,1)`,
    secondary: `hsla(240, 2%, 59%, 1)
    `,
    tertiary: `hsla(240, 2%, 67%, 1)`,
    surface: `hsla(240, 2%, 18%, 1)`,
    surfaceVariantLight: "hsla(228, 14%, 93%, 1)",
    surfaceVariantDark: "hsla(240, 2%, 18%, 1)",
    gradient: "linear-gradient(91.65deg, #0500FF 2.74%, #F50AF6 101.18%)",
    blue: `hsl(241,100%,50%,1)`,
  },
  fontSize: {
    displayLarge: "6rem",
    displayMedium: "4rem",
    displaySmall: "3rem",
    mobileTitleLarge: "2.25rem",
    titleLarge: "2rem",
    titleMedium: "1.75rem",
    titleSmall: "1.25rem",
    bodyLarge: "1rem",
    bodyMedium: "0.875rem",
    bodySmall: "0.75rem",
  },
  mq: {
    laptop: `@media screen and (min-width: ${size.largest})`,
    tablet: `@media screen and (min-width: ${size.medium})`,
    mobile: `@media screen and (max-width: ${size.small})`,
  },
};
