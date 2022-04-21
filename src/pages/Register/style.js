import styled from 'styled-components'

export const StyledMain = styled.main`
margin: 0 auto;
height: 100vh;
width: 50%;
min-width: 300px;
display: flex;
flex-flow: column nowrap;
align-items: center;
justify-content: space-around;

.title {
    height: 40px;
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    max-width: 400px;
    align-items: flex-start;
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
margin-bottom: 40px;
`

export const StyledForm = styled.form`
padding-top: 15px;
display: flex;
flex-flow: column nowrap;
background-color: var(--grey3);
height: 90%;
align-items: center;
justify-content: space-evenly;
width: 100%;
max-width: 400px;
border-radius:4px;
gap: 10px;

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
    font-size: 12px;
}
p {
    color: var(--grey1);
    font-size: 14px;
}

.btn {
    width: 90%;
    background-color: var(--pink);
    color: var(--grey0);
    padding:18px;
    border-radius: 8px;
    border: none;
    font-size: 16px;
    font-weight: bold;
    margin:10px 0 15px 0;
}

.register {
    background-color: var(--grey1);
}
.css-1ar4j17-MuiInputBase-root{
    border: 2px solid var(--grey2)
}
.css-1ar4j17-MuiInputBase-root:hover, .css-1ar4j17-MuiInputBase-root:focus {
    border: 2px solid var(--grey0);
}
@media screen and (max-width: 450px) {
    .btn {
        padding: 13px;
    }
}
`