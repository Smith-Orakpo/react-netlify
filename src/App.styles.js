import { createGlobalStyle } from 'styled-components'

const AppStyles = createGlobalStyle`
  :root {
    box-sizing: border-box;
  }
  *,
  ::before,
  ::after {
    margin: 0;
    padding: 0;
    border-box: inherit;
  }
  html,
  body {
    font-family: 'Poppins', sans-serif;
  }
  img {
    height: auto;
    max-width: 100%;
    object-fit: cover;
    object-position: center;
  }
  a {
    text-decoration: none;
  }
  ul,
  ol {
    list-style-type: none;
  }
`

export default AppStyles
