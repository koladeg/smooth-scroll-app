import { Link as LinkR } from 'react-router-dom'
import { Link as LinkScroll} from 'react-scroll'
import styled from 'styled-components'

export const Nav = styled.nav `
    background: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div `
    height: 80px;
    display: flex;
    justify-content: space-between;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`


export const Navlogo = styled(LinkR)`
    color: #fff;
    display: flex;
    cursor: pointer;
    font-size: 1.5rem;
    font-wieght: bold;
    justify-self: flex-start;
    text-decoration: none;
    align-items: center;
    margin-left: 24px;
`

export const MobileIcon = styled.div `
    display: none;
    
    @media screen and (max-width: 768px) {
        display: block;
        postion: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 30%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul `
    display: flex;
    text-align: center;
    align-items: center;
    margin-right: -22px;
    list-style:none;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height:80px;
`

export const NavLinks = styled(LinkScroll) `
    color: #fff;
    display: flex;
    cursor: pointer;
    text-decoration: none;
    align-items: center;
    padding: 0 1rem;
    height: 100%;

    &.active {
        border-bottom: 3px solid #01bf71;
    }
`
export const NavBtn = styled.nav `

display: flex;
align-items: center;

@media screen and (max-width: 768px) {
display: none;
}
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    text-decoration: none;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    transition: all 0.2s ease-in-out;
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`