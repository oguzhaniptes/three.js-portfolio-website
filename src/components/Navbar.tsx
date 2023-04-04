import React from 'react'
import { NavbarDiv, NavbarSection, List, ListItem, Button, Links, Logo, Icon, Icons } from '../styles/Styles'

export default function Navbar() {
    return (
        <NavbarSection>
            <NavbarDiv>
                <Links>
                    <Logo src='public/img/logo.png'></Logo>
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>Contact</ListItem>
                    </List>

                </Links>
                <Icons>
                    <Icon src='public/img/search.png' width={'28px'}></Icon>
                    <Button>Click here!</Button>
                </Icons>
            </NavbarDiv>
        </NavbarSection>
    )
}
