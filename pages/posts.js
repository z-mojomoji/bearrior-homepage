import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { PostGridItem } from '../components/grid-item'

import thumbMockUp1 from '../public/images/works/mockup1.jpg'
import thumbMockUp2 from '../public/images/works/mockup2.jpg'
import thumbMockUp3 from '../public/images/works/mockup3.jpg'
import thumbMockUp4 from '../public/images/works/mockup4.jpg'

const Posts = () => (
  <Layout title="Post">
    <Container>
      <Heading as="h2" fontSize={24} mb={4}>
        Post
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        {/* Start One Post */}
        <Section>
          <PostGridItem id="mock1" title="Mock 1" thumbnail={thumbMockUp1}>
            Description 1
          </PostGridItem>
        </Section>
        {/* End One Post */}
        <Section>
          <PostGridItem id="mock1" title="Mock 2" thumbnail={thumbMockUp2}>
            Description 2
          </PostGridItem>
        </Section>

        <Section delay={0.1}>
          <PostGridItem id="mock1" title="Mock 3" thumbnail={thumbMockUp3}>
            Description 3
          </PostGridItem>
        </Section>
        <Section delay={0.1}>
          <PostGridItem id="mock1" thumbnail={thumbMockUp4} title="Mock 4">
            Description 4
          </PostGridItem>
        </Section>
      </SimpleGrid>

      {/* New Section */}
      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" fontSize={18} mb={4}>
          Another Mock heading
        </Heading>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
