import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ContentImage, Meta } from '../../components/content'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Elevating User Experience: Redesigning the Anantara Booking Engine Website">
    <Container>
      <Title type="work">
        Elevating User Experience: Redesigning the Anantara Booking Engine
        Website <Badge>2023</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/posts/mockup2.jpg" alt="icon" />
      </Center>
      <P>
        Anantara, a world-renowned luxury hotel chain, sought to enhance its
        online booking experience to match its exceptional hospitality. The
        existing booking engine website, while functional, lacked a user-centric
        design, leading to frustration and decreased conversion rates.
      </P>
      <Heading as="h4" fontSize={16} my={6}>
        <Center>My role in this project</Center>
      </Heading>
      <P>
        Working collaboratively with project managers, product owners, and
        developers, I played a pivotal role in the redesign of the Anantara
        booking engine website. My contributions included conducting user
        research, developing information architecture, creating wireframes and
        prototypes, designing user interfaces, and conducting usability testing.
        Through my collaborative approach and focus on user-centered principles,
        I helped enhance the user experience, improve conversion rates, and
        strengthen Anantara's brand perception.
      </P>
      <UnorderedList ml={4} my={4}>
        <ListItem>Mock Unordered List</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Mock</Meta>
          <span>Badge list</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Heading</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="#">
            <Badge mr={2}>Mock</Badge>
            References <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      <SimpleGrid columns={2} gap={2}>
        <ContentImage src="/images/posts/mockup1.jpg" alt="mock1" />
        <ContentImage src="/images/posts/mockup2.jpg" alt="mock1" />
      </SimpleGrid>
      <ContentImage src="/images/posts/mockup3.jpg" alt="mock1" />
      <ContentImage src="/images/posts/mockup4.jpg" alt="mock1" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
