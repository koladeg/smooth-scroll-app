import { Link as LinkR } from 'react-router-dom'
import { Link as LinkScroll} from 'react-scroll'
import styled from 'styled-components'



export const HeroContainer = styled.div `
    position: relative;
    display: flex;
    justify-content: center;
    align-items:center;
    padding: 0 30px;
    height: 800px;
    background: #0c0c0c;
    font-size: 2rem;
    z-index: 1;
    ${'' /* cursor: pointer;
    outline: none;  */}
`;

export const HeroBg = styled.div `
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width:100%;
    height: 100%;
    overflow: hidden; 
`;

export const VideoBg = styled.video `
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
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


