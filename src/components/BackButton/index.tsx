
import Link from 'next/link'
import Image from 'next/image'

import { BackButtonWrapper, BackButton } from './styles'

const Back = () => {
    return (
        <>
            <Link href='/' >
                <BackButtonWrapper>
                    <BackButton>
                        <Image src='/assets/Icons/Back.svg' width={24} height={24} />
                    </BackButton>
                </BackButtonWrapper>
            </Link>
        </>
    )
}

export default Back
