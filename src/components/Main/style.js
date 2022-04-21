import styled from 'styled-components'

export const StyledMain = styled.main`
margin: 15px auto;
height: 70vh;
width: 60%;
min-width: 300px;
display: flex;
flex-flow: column nowrap;
align-items: space-between;
justify-content: space-around;

div {
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    justify-content: space-between;
}

div>h3 {
    font-size: 16px;
    color: var(--grey0)
}

div>button {
    color: var(--grey0);
    border: none ;
    padding: 3px 9px;
    background-color: var(--grey3);
    border-radius: 4px;
    font-size: 25px;
    font-weight: bold;
}
`

export const StyledUl = styled.ul`
background-color: var(--grey3);
height: 85%;
border-radius: 4px;
display: flex;
flex-flow: column nowrap;
align-items: center;
overflow-y: scroll;
padding: 20px;
gap: 12px;

li {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding: 15px;
    background-color: var(--grey4);
    border-radius: 4px;
    color: var(--grey0)
}
`