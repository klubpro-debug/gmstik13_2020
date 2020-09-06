import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
  .title {
    border-left: 2px solid ${({ theme }) => theme.colorBorder};
  }
  .card__list {
    color: ${({ theme }) => theme.colorCard};
    background: ${({ theme }) => theme.colorBackgroundColor};
    box-shadow: 0px 3px 5px ${({ theme }) => theme.colorShadow};   
  }
  `
