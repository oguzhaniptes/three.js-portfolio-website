import React from 'react'
import {Logo, Icon, NavbarDiv, NavbarSection, ListItem, Button, Links, Icons, NavbarList } from '../styles/Styles'

export default function Navbar() {
    return (
        <NavbarSection>
            <NavbarDiv>
                <Links>
                    <Logo src='./img/logo.png'></Logo>
                    <NavbarList>
                        <ListItem>Home</ListItem>
                        <ListItem>Contact</ListItem>
                    </NavbarList>

                </Links>
                <Icons>
                    <Icon src='./img/search.png' width={'28px'}></Icon>
                    <Button>Click here!</Button>
                </Icons>
            </NavbarDiv>
        </NavbarSection>
    )
}
