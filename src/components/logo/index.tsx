import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import CarLogoImg from '../../assets/images/car-logo.png'

const LogoContainer = styled.div`
    ${tw`
        flex
        items-center
    `}
`

const LogoText = styled.div`
    ${tw`
        text-xl
        items-center
        font-bold
        text-black
        m-1
    `}
`;

const Image = styled.div`
    ${tw`
        h-6
        md:h-9
    `}

    img {
        width: auto;
    }
`;



const index = () => {
  return (
    <LogoContainer>
        <Image>
            <img src={CarLogoImg} alt="Car-logo" />
        </Image>
        <LogoText>CarZone</LogoText>
    </LogoContainer>
  );
}

export default index