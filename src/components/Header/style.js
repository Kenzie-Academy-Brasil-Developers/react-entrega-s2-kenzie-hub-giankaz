import styled from 'styled-components'

export const StyledHeader = styled.header`
display: flex;
flex-flow: row nowrap;
width: 100%;
margin: 0 auto;
height: 120px;
justify-content: space-between;
border-bottom: 2px solid var(--grey3);
text-align: center;
align-items: center;
min-width: 300px;


div {
display: flex;
flex-flow: row nowrap;
width: 60%;
margin: 0 auto;
justify-content: space-between;
align-items: center;
}
div>p {
    color: var(--grey1);
    font-size: 14px;
}

@media screen and (max-width: 800px) {
    & > div {
        flex-flow: column nowrap;
        align-items: flex-start;
        gap: 20px;
    }
}
`

export const StyledH1 = styled.h1`
text-align: center;
color: var(--grey0);
font-weight: bold;
font-size: 23px;
`
