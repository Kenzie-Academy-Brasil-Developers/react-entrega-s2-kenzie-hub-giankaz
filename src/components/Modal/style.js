
import styled from 'styled-components'


export const Box = styled.div`
background-color: var(--grey3);
position: absolute;
top: 50%;
right: 50%;
transform: translate(50%, -50%);
width: 25%;
min-width: 300px;
height: 350px;
box-shadow: 24;
border-radius: 4px;
display: flex;
flex-flow: column nowrap;
align-items: center;
.modal-title {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    background-color: var(--grey2);
    padding: 10px 20px;

}
.modal-title>h1 {
    
    text-align: flex-start;
    color: var(--grey0);
}
.modal-title>button {
    font-size: 16px;
    color: var(--grey1);
    font-weight: bold;
    background: transparent;
    border: none;
}
`

export const Form = styled.form`
width: 100%;
height: 300px;
display: flex;
flex-flow: column nowrap;
align-items: center;
justify-content: space-around;
padding: 15px 15px 5px 15px;

.css-1jb1tcy-MuiInputBase-root.Mui-disabled {
    background-color: rgba(89, 50, 63, 1);
    font-weight: bold;
    
}

div {
    width: 100%;
}
.containerInput {
    display: flex;
    flex-flow: column nowrap;
    gap: 20px;
}
div>label {
    color: var(--grey0);
    align-self: flex-start;
    font-size: 14px;
}
.btn {width: 100%;
    background-color: var(--pink);
    color: var(--grey0);
    padding:15px;
    border-radius: 8px;
    border: none;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
}

.del {
    width: 40%;
    background-color: var(--grey1)
}
.containerBtn {
    display: flex;
    gap: 20px;
}
`