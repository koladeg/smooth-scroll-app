import { Link as LinkR } from 'react-router-dom'
import { Link as LinkScroll} from 'react-scroll'
import styled from 'styled-components'
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside `
    position: fixed;
    background: #0d0d0d;
    height: 100%;
    display: grid;
    align-items: center;
    left: 0;
    width: 100%;
    z-index: 999;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes) `
    color: #fff;
`;


export const Icon = styled.div `
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none; 
`;

export const SidebarWrapper = styled.div `
    color: #fff;
`;
export const SidebarLink = styled(LinkScroll) `
    display: flex;
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    align-items: center;
    justify-content:center;
    font-size: 1.5rem;
    list-style: none;
    transition: 0.2s ease-in-out;

    &:hover {
        transition: 0.2s ease-in-out;
        color: #01bf71;
    }
`;
export const SidebarWrap = styled.div `
    display: flex;
    justify-content:center;
`;
export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    text-decoration: none;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    cursor: pointer;
    font-size: 16px;
    outline: none;
    border: none;
    transition: all 0.2s ease-in-out;
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;

export const SidebarMenu = styled.ul `
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 768px) {  
        grid-template-rows: repeat(6, 60px);
    }
`;

