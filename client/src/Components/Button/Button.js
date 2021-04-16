import React from 'react';
import styled from "styled-components";

const Mainbutton = styled.div`
.btn{
     display:inline-block;
     padding: 0.8em 2.3em;
     border:0.1em solid  ${props => props.Color ? "#FF3366" : "#562AF0"};
     margin:0 1.5em 1.5em 0;
     border-radius:0.4em;
     box-sizing: border-box;
     text-align:center;
     transition: all 0.2s;     
}
.btn:hover{
    color:#ffffff;
    background-color: ${props => props.Color ? "#FF3366" : "#562AF0"};
}
`;
const Button = ({ Text, Color }) => {
    return (<div className="Button">
        <Mainbutton Color={Color}>
            <div className="btn"> <span style={{ fontSize: "14px", fontWeight:'bold' }}>{Text}</span></div>
        </Mainbutton>
    </div>);
}

export default Button;