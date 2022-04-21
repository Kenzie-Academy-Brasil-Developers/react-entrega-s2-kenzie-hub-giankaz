import styled from 'styled-components'

export const StyledMain = styled.main`
margin: 0 auto;
height: 100vh;
width: 50%;
min-width: 300px;
display: flex;
flex-flow: column nowrap;
align-items: center;
justify-content: center;
`

export const StyledH1 = styled.h1`
text-align: center;
color: var(--pink);
font-weight: bold;
font-size: 26px;
margin-bottom: 40px;
`

export const StyledForm = styled.form`
display: flex;
flex-flow: column nowrap;
background-color: var(--grey3);
height: 80%;
align-items: center;
justify-content: space-evenly;
width: 100%;
max-width: 400px;
border-radius:4px;

h3 {
    color: var(--grey0);
    font-size: 20px;
}
input:hover {
    cursor: text;
}

input:focus {
    outline: none;
    color: inherit;
    border: none;
    animation: none;
}

.containerInput {
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
}

.containerInput>label {
    margin: 0 0 10px 5%;
    align-self: flex-start;
    color: var(--grey0);
    font-weight: 400;
}
p {
    color: var(--grey1);
}

.btn {
    width: 90%;
    background-color: var(--pink);
    color: var(--grey0);
    padding:20px;
    border-radius: 8px;
    border: none;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
}

.register {
    background-color: var(--grey1);
}
.css-1jb1tcy-MuiInputBase-root:hover, .css-1jb1tcy-MuiInputBase-root:focus {
    border: 1.22px solid var(--grey0)
}
`