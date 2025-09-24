// GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    font-family: 'Montserrat', sans-serif;
    scroll-behavior: smooth; /* ✅ Smooth scrolling for #anchors */
  }

  body {
    margin: 0;
    font-family: inherit;
    background-color: #f9fafb;
    color: #1f2937;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6, p, a, ul, li, button, span {
    font-family: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #4f46e5; /* subtle indigo hover effect */
  }
`;

export default GlobalStyle;
