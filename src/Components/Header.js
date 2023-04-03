import React from 'react';
import styled from 'styled-components';
import DateInput from './DateInput.js';

const HeaderComponent = styled.header `
    font-size: 2rem;
    margin: 0;
    background-color: #5d6475;
    padding: 1rem;
    color: #dddddd;
`;
const HeaderTag = styled.h1 `
margin: 1rem;
`;

const Header = (props) => {
    return (
        <HeaderComponent>
            <HeaderTag>Nasa Photo of the Day</HeaderTag>
            <DateInput date={props.date} today={props.today} setDate={props.setDate}/>
        </HeaderComponent>
    )
}

export default Header;