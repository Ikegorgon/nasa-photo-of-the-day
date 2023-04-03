import React from 'react';
import styled from 'styled-components';

const DateInputComponent = styled.input `
    border: 2px solid black;
    border-radius: 5px;
    font-size: 1rem;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    background-color: #dddddd;
`;

const DateInput = (props) => {
    return (
        <div>
            <DateInputComponent type="date" id="date" name="PhotoDay" defaultValue={props.date} max={props.today} onChange={(e) => {
                if(e.target.value) {
                    props.setDate(e.target.value);
                }
            }}/>
        </div>
    )
}


export default DateInput;