/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars);

      // tslint:disable-next-line:typedef
    const scrollTo = (id) => {        
        console.log(id);
        const element = document.getElementById(id + " wrap");
    
        console.log(element);
        element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    }

    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>
                {cars && cars.map((car, index) => 
                    <a key={index} onClick={() => scrollTo(car)}>{car}</a>
                )}
                {/* <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a> */}

            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu onClick={() => setBurgerStatus(true)} />
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerStatus(false)} />
                </CloseWrapper>
                {cars && cars.map((car, index) => 
                    <li><a key={index} onClick={() => scrollTo(car)}>{car}</a></li>
                )}
                <li><a>Existing Inventory</a></li>
                <li><a>Used Inventory</a></li>
                <li><a>Trade-in</a></li>
                <li><a>Cybertruck</a></li>
                <li><a>Roadaster</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0:
    right: 0;
    width: 100%;
    z-index: 1;
    a {
        padding-right: 15.5%;
    }
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        cursor: pointer;
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }

    @media(max-width: 876px) {
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
    }
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;

    transform: ${props => props.show ? `translateX(0)` : `translateX(100%)`};
    transition: transform 0.4s;
    
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);
    }

    a {
        cursor: pointer;
        font-weight: 600;
    }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWrapper = styled.div`
    display:flex;
    justify-content: flex-end;
`