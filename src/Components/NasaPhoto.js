import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div `
    background-color: #dddddd;
    margin: 2rem auto;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`;
const StyledH3 = styled.h3 `
    margin-bottom: 0;
    font-weight: bold;
    font-size: 2rem;
`;
const StyledDate = styled.p `
    font-style: italic;
    margin-top: 0;
`;
const StyledDescription = styled.p `
    width: 80%;
`;
const StyledImg = styled.img `
    max-width: 50%;
`;

const NasaPhoto = (props) => {
    if (!props.photo) return <h3>Loading...</h3>;
    return (
        <StyledDiv>
            <StyledH3>{props.photo.title}</StyledH3>
            <StyledDate>{props.photo.date}</StyledDate>
            <StyledImg src={props.photo.hdurl} alt={props.photo.name} />
            <StyledDescription>{props.photo.explanation}</StyledDescription>
        </StyledDiv>
    )
}

export default NasaPhoto;