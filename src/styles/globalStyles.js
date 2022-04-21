import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
    box-sizing: border-box;
	font-family: 'inter', sans-serif;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
.App {
    background-color: var(--grey4);
    height: 100vh;
}
h1 {
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 28px;
}

h3 {
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 24px;
} 
.Toastify__toast-theme--light {
  background-color: var(--grey2);
  color: var(--grey0)
} 

.Toastify__toast-icon {
    width: 35px;
}
.Toastify__close-button {
	color: var(--grey0);
}

input:focus {
    outline: none;
    color: inherit;
    border: none;
    animation: none;
}
button {
	cursor: pointer;
}
button:hover, a {
	filter: brightness(110%)
}

.Mui-focused .MuiOutlinedInput-notchedOutline {
      border: none;
      border-radius: "5px 5px 0 0";
 }
 input:-webkit-autofill{
    -webkit-box-shadow: 0 0 0px 1000px var(--grey2) inset !important;
    -webkit-text-fill-color: var(--grey1);
}
.error {
  color: var(--red)
}
:root {
    --grey0: #F8F9FA;
    --grey1: #868E96;
    --grey2: #343B41;
    --grey3: #212529;
    --grey4: #121214;
    --pink: #FF577F;
    --green: #3FE864;
    --red: #E83F5B;
}


  * {
    scrollbar-width: thin;
    scrollbar-color: var(--grey1) var(--grey3);
  }


  *::-webkit-scrollbar {
    width: 2px;
  }

  *::-webkit-scrollbar-track {
    background: var(--grey3);
  }

  *::-webkit-scrollbar-thumb {
    background-color: var(--grey1);
    border-radius: 0px;
    border: 0px solid #ffffff;
  }

@media screen and ( max-width:450px) {
    .App {
        overflow: hidden;
    }
    .title, .mobile {
        width: 95% !important;
    }
  
    main {
        width: 97% !important;
    }
}
`