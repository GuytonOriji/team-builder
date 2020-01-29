import React from 'react';
import styled from 'styled-components';


const Nav = styled.div`
flex:1;
display:flex;
justify-content:space-between;
align-items:center;
font-size:4rem;
color:azure;
`;

export default function Header(){


return(
    <Nav>
    <h1>Team Builder</h1>
    </Nav>
)


}