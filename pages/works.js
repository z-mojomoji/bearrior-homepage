import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem, GridItem } from '../components/grid-item'

import thumbMockUp1 from '../public/images/works/mockup1.jpg'
import thumbMockUp2 from '../public/images/works/mockup2.jpg'
import thumbMockUp3 from '../public/images/works/mockup3.jpg'
// import thumbMockUp4 from '../public/images/works/mockup4.jpg'
import thumbAbcTech from '../public/images/works/abc-tech.png'
import thumbOpenCharity from '../public/images/works/open-charity.png'
import thumbLeafrey from '../public/images/works/leafrey.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h2" fontSize={24} mb={4}>
        Works
      </Heading>
      <Heading as="h3" fontSize={18} mb={4}>
        User Experiences
      </Heading>
      <SimpleGrid columns={[1, 1, 1]} gap={6}>
        {/* Start One Work section */}
        <Section>
          <WorkGridItem
            id="anantara-elevating-user-experience"
            title="Elevating User Experience: Redesigning the Anantara Booking Engine
        Website"
            thumbnail={thumbMockUp1}
          >
            Anantara, a luxury hotel chain, sought to elevate its online booking
            experience to match its exceptional hospitality. Faced with an
            outdated and convoluted booking engine, Anantara turned to UX design
            to create a seamless and engaging booking experience that would
            delight users and drive conversions.
          </WorkGridItem>
        </Section>
        {/* End One Work section */}
        <Section delay={0.1}>
          <WorkGridItem id="mock1" title="Mock 2" thumbnail={thumbMockUp2}>
            Description 2
          </WorkGridItem>
        </Section>

        <Section delay={0.2}>
          <WorkGridItem id="mock1" title="Mock 3" thumbnail={thumbMockUp3}>
            Description 3
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      {/* New Section */}
      <Section delay={0.3}>
        <Divider my={6} />
        <Heading as="h3" fontSize={18} mb={4}>
          Codes
        </Heading>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="/code-work/abctech/index.html"
            title="ABC Tech Web Landing"
            thumbnail={thumbAbcTech}
          >
            Web Landing for all devices
          </GridItem>
          <GridItem
            href="/code-work/compucorp/index.html"
            title="ComuCorp Web Landing"
            thumbnail={thumbOpenCharity}
          >
            Web Landing for Desktop/Mobile
          </GridItem>
          <GridItem
            href="/code-work/lefery/index.html"
            title="Lefery Advertising"
            thumbnail={thumbLeafrey}
          >
            Web Landing for Desktop/Mobile
          </GridItem>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
