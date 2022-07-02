import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro';
import Navbar from '../../components/navbar/index'
import { TopSection } from './topSection';

const PageContainer = styled.div`
    ${tw`
        flex
        flex-col
        w-full
        items-center
        overflow-x-hidden
    `}
`;


type Props = {}
const HomePage = (props: Props) => {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
    </PageContainer>
  )
}

export default HomePage