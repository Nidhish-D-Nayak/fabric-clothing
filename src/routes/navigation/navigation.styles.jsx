import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationContainer = styled.div`
    height: 70px;
    top: 0;
    // z-index of secondaryBodyContainer is z-1
    z-index: 2;
    background-color: #FFFFFF; 
    opacity: 0.90; 
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
    position: fixed;
    border-bottom: 1px rgb(200, 200, 200) solid;
    // To avoid annoying selections on clicks
    user-select: none;

    @media (max-width: 768px) {
        padding: 0 10px;   
    }
`;

export const LogoContainer = styled(Link)`
    display: flex;
    align-items: center;
`;

export const Logo = styled.img`
    width: 180px;
    padding: 0 0.25em;

    @media (max-width: 768px) {
        width: 140px;
        padding: 0 0.1em;
    }

    @media (max-width: 400px) {
        width: 120px;
        padding: 0 0.1em;
    }

    @media (max-width: 330px) {
        width: 100px;
        padding: 0 0.05em;
    }
`;

export const NavLinks = styled.div`
    width: 50%;
    height: 100%;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    @media (max-width: 768px) {
        width: 100%;   
        font-size: 0.85rem;
    }

    @media (max-width: 300px) {
        width: 110%;
        font-size: 0.75rem;
    }
`;

export const NavLink = styled(Link)`
    padding: 10px 18px;
    cursor: pointer;
    border-radius: 2px;

    &:hover {
        background-color: #efefef;
    }

    @media (max-width: 768px) {
        padding: 10px 10px;
    }
`;
