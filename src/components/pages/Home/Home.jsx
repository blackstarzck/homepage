import styled from 'styled-components'
import Header from '../Header'
import MainBanner from './MainBanner'
import Vision from './Vision'
import Typo from '../Typo'
import Strategy from './Strategy'
import Business from '../../Business'
import Footer from '../Footer'
import Rescent from './Rescent'

const Home = () => {
  return (
    <main>
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
      <Section>
        <Rescent />
      </Section>
      <Footer />
    </main>
  )
}

const Section = styled.section`
  max-width: 1440px;
  margin: 0 auto;
`

export default Home
