import styled, { css } from 'styled-components'
import Header from '../Header'
import MainBanner from './MainBanner'
import Vision from './Vision'
import Typo from '../Typo'
import Strategy from './Strategy'
import Business from '../../Business'
import Footer from '../Footer'



const Home = () => {
  return (
    <>
      <Header />
      <Section>
        <MainBanner />
      </Section>
      <Section>
        <Typo />
      </Section>
      <Section>
        <Vision />
      </Section>
      <Section>
        <Strategy />
      </Section>
      <Section>
        <Business />
      </Section>
      <Footer />
    </>
  )
}

const Section = styled.section`
  width: 100%;
`

export default Home
