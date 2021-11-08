import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade'
import Flip from 'react-reveal/Flip';
import Bounce from 'react-reveal/Bounce';
import RubberBand from 'react-reveal/RubberBand';
import Rotate from 'react-reveal/Rotate';

function Section({ title, description, backgroundImage, leftButtonText, rightButtonText }) {
    
    return (
        <Wrap bgImage = {backgroundImage} id={title + ' wrap'}>
            {/* <Fade bottom> */}
            {/* <Flip left> */}
            {/* <Bounce left> */}
            <Rotate top left>
                <ItemText>
                    <h1> { title } </h1>
                    <p> { description } </p>
                </ItemText>
            {/* </Flip> */}
            {/* </Bounce> */}
            </Rotate>
            {/* </Fade> */}
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            { leftButtonText }
                        </LeftButton>
                        {rightButtonText &&                     
                            <RightButton>
                                { rightButtonText }
                            </RightButton>
                        }
                    </ButtonGroup>
                </Fade>
                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url("images/${props.bgImage}")`};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    // @media (max-width: 400px) {
    //     transform: scale(2,1);
    //     // zoom: 50%
    //   }
      
    //   @media (max-width: 5500px) {
    //     transform: scale(1.8,1);
    //     // zoom: 65%
    //   }
      
    //   @media (max-width: 700px) {
    //     transform: scale(1.6,1);
    //     // zoom: 80%
    //   }
      
    //   @media (max-width: 1000px) {
    //     transform: scale(2,1);
    //     // zoom: 80%
    //   }
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`

const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65; 
    color: black;
`

const DownArrow = styled.img`
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`

`