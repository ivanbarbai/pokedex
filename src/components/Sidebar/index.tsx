import React from 'react'
import { SideBar, SideBarContainer, SideBarMobile, TextButton, SidebarLogoWrapper, SideBarLogo, SideBarContent, SideBarAvatar, SideBarUser, SideBarLevel, SideBarLegend, SideBarFooter, LogOutButton } from './styles'

import Image from 'next/image';


const Sidebar = ({ toggle, isFlexed }) => {
    return (
        <>
            <SideBar isFlexed={isFlexed}>
                <SideBarContainer>
                    <SideBarMobile onClick={toggle}>
                        <Image src='/assets/Icons/Menu.svg' width={24} height={24} />
                    </SideBarMobile>
                    <SideBarContent>
                        <SidebarLogoWrapper>
                            <SideBarLogo href='/'>
                                <a href='/'><Image src="/assets/logo.png" width={420} height={156} /></a>
                            </SideBarLogo>
                        </SidebarLogoWrapper>
                        <SideBarAvatar>
                            <Image src='/assets/avatar.png' width={543} height={543} />
                        </SideBarAvatar>
                        <SideBarUser>ASHK123</SideBarUser>
                        <SideBarLevel>Level 1</SideBarLevel>
                        <SideBarLegend>"Work hard on your test"</SideBarLegend>
                    </SideBarContent>
                    <SideBarFooter>
                        <LogOutButton>
                            <Image src='/assets/Icons/Logout.svg' width={24} height={24} />
                            <TextButton>Log Out</TextButton>
                        </LogOutButton>
                    </SideBarFooter>
                </SideBarContainer>
            </SideBar>
        </>
    )
}

export default Sidebar
