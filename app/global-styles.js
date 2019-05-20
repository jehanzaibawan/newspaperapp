import { createGlobalStyle } from 'styled-components';
import iconFontEot from 'fonts/3dbbbdee.eot';
import iconFontWoff from 'fonts/277d4d46.woff';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  @font-face {
    font-family: 'all-icon-font';
    src: url(${iconFontEot});
    src: url(${iconFontEot}#iefix) format('embedded-opentype'), url(${iconFontWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;

export default GlobalStyle;
