import React from 'react'
import Image from 'next/image'

import { MobileContainer, MobileHeader, Icon, CloseIcon, MobileContent, MobileFooter, MobileAvatar, ContentWrapper, MobileWrapper, MobileUser, MobileLevel, MobileLegend } from './styles'
import { LogOutButton, TextButton } from '../../components/Sidebar/styles'


const MobileMenu = ({ isOpen, toggle }) => {
    return (
        <>
            <MobileWrapper isOpen={isOpen} >
                <MobileContainer>
                    <MobileHeader>
                        <Icon onClick={toggle}>
                            <CloseIcon />
                        </Icon>
                    </MobileHeader>
                    <ContentWrapper>
                        <MobileContent>
                            <MobileAvatar>
                                <Image src='/assets/avatar.png' width={543} height={543} />
                            </MobileAvatar>
                            <MobileUser>ASHK123</MobileUser>
                            <MobileLevel>Level 1</MobileLevel>
                            <MobileLegend>"Work hard on your test"</MobileLegend>
                        </MobileContent>
                        <MobileFooter>
                            <LogOutButton>
                                <Image src='/assets/Icons/Logout.svg' width={24} height={24} />
                                <TextButton>Log Out</TextButton>
                            </LogOutButton>
                        </MobileFooter>
                    </ContentWrapper>
                </MobileContainer>
            </MobileWrapper>
        </>
    )
}

export default MobileMenu
