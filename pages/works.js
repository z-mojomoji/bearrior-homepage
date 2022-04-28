import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbMockUp1 from '../public/images/works/mockup1.jpg'
import thumbMockUp2 from '../public/images/works/mockup2.jpg'
import thumbMockUp3 from '../public/images/works/mockup3.jpg'
import thumbMockUp4 from '../public/images/works/mockup4.jpg'

const Works = () => (
  <Layout title="Works">
  <Container>
    <Heading as="h3" fontSize={20} mb={4}>
    Works
    </Heading>

    <SimpleGrid columns={[1, 1, 2]} gap={6}>
      {/* Start One Work section */}
      <Section>
        <WorkGridItem id="mock1" title="Mock 1" thumbnail={thumbMockUp1}>
          Description 1
        </WorkGridItem>
      </Section>
      {/* End One Work section */}
      <Section>
        <WorkGridItem
          id="mock1"
          title="Mock 2"
          thumbnail={thumbMockUp2}
        >
          Description 2
        </WorkGridItem>
      </Section>

      <Section delay={0.1}>
        <WorkGridItem
          id="mock1"
          title="Mock 3"
          thumbnail={thumbMockUp3}
        >
          Description 3
        </WorkGridItem>
      </Section>
      <Section delay={0.1}>
        <WorkGridItem id="mock1" thumbnail={thumbMockUp4} title="Mock 4">
          Description 4
        </WorkGridItem>
      </Section>
    </SimpleGrid>

    {/* New Section */}
    <Section delay={0.2}>
      <Divider my={6} />
      <Heading as="h3" fontSize={20} mb={4}>
        Another Mock heading
      </Heading>
    </Section>
  </Container>
</Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'