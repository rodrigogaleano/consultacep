import styledComponents from "styled-components";

export const Container = styledComponents.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ECE5C7;
    padding: 25px;
    border-radius: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    h1 {
        color: #B4846C; 
        padding: 10px;
    }
`;

export const Forms = styledComponents.form`
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;	

export const Input = styledComponents.input`
    width: 100%;
    height: 50px;
    border-radius: 6px;
    border: none;
    margin: 10px;
    padding: 10px;
    font-size: 16px;

    &:focus {
        outline-color: #E5B299;
    }
`;

export const Button = styledComponents.button`
    width: 80%;
    height: 50px;
    border-radius: 6px;
    border: none;
    background-color: #B4846C;
    color: white;
    font-size: 16px;
    font-weight: bold;
    margin: 10px;
    cursor: pointer;
`;