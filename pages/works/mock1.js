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
import { Title, PostImage, Meta } from '../../components/post'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Work Mock 1">
    <Container>
      <Title>
        Work Mock 1 <Badge>Years</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/posts/mockup2.jpg" alt="icon" />
      </Center>
      <P>
        Mock Text
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
            References{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      <SimpleGrid columns={2} gap={2}>
        <PostImage src="/images/posts/mockup1.jpg" alt="mock1" />
        <PostImage src="/images/posts/mockup2.jpg" alt="mock1" />
      </SimpleGrid>
      <PostImage src="/images/posts/mockup3.jpg" alt="mock1" />
      <PostImage src="/images/posts/mockup4.jpg" alt="mock1" />
    </Container>
  </Layout>
)

export default Work
