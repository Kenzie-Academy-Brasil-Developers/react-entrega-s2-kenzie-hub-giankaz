import styled from 'styled-components'

export const StyledNav = styled.nav`
width: 100%;
height: 60px;
color: white;
border-bottom: 2px solid var(--grey3);
display: flex;
align-items: center;
justify-content: center;
min-width: 300px;


.title {
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    width: 60%;
    align-items: center;
    justify-content: space-between;
}
.title>.back {
    background-color: var(--grey3);
    border: none;
    color: var(--grey0);
    padding: 10px 15px;
    border-radius: 3px;
}
`
export const StyledH1 = styled.h1`
text-align: center;
color: var(--pink);
font-weight: bold;
font-size: 26px;
`