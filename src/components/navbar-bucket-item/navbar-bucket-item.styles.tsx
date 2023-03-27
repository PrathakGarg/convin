import styled from "styled-components";

const sub_color = "white";
const main_color = "#001529";

export const FormInputBox = styled.input`
    background: none;
    background-color: ${main_color};
    color: ${sub_color};
    width: 80%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${sub_color};
`

export const FormButton = styled.button`
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
`