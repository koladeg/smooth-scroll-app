import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarWrapper, SidebarLink, SidebarMenu, SidebarWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about'>About</SidebarLink>
                    <SidebarLink to='discover'>Discover</SidebarLink>
                    <SidebarLink to='services'>Services</SidebarLink>
                    <SidebarLink to='signup'>Sign Up</SidebarLink>
                </SidebarMenu>
                <SidebarWrap>
                    <SidebarRoute to='signin'>Sign In</SidebarRoute>
                </SidebarWrap>    
            </SidebarWrapper>         
        </SidebarContainer>
    )
}

export default Sidebar
