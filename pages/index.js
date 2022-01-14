import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
// import { GridItem } from '../components/grid-item'
import {
  IoLogoLinkedin,
  IoLogoGithub
} from 'react-icons/io5'
// import thumbYouTube from '../public/images/links/youtube.png'
// import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a frontend developer based in Thailand!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Suphicha Anusirikul
          </Heading>
          <p>Frontend Developer / UX Designer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/moji.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Suphicha is a freelance and a frontend developer based in Bangkok with a
          passion for building a website that people wants to use. She has a knack
          from planning and designing, all the way to solving real-life problems with code. 
          When not online, she loves hanging out with her puppy. Currently, she is giving
          her best in her study.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1991</BioYear>
          Born in Bangkok (กรุงเทพมหานคร), Thailand.
        </BioSection>
        <BioSection>
          <BioYear>2013</BioYear>
          Completed the Bachelor&apos;s Program in Multimedia Design from The University of Queensland, Brisbane, Australia
        </BioSection>
        <BioSection>
          <BioYear>2014</BioYear>
          Worked as a Web/CSS Designer at Dek-D Interactive co., ltd.
        </BioSection>
        <BioSection>
          <BioYear>2016</BioYear>
          Worked as a Freelance Frontend/UI Developer/Designer for The BigDot and Manulife (Singapore)
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Worked as a UI Developer / ITIC Software Engineer for Agoda
        </BioSection>
        <BioSection>
          <BioYear>2021 to present</BioYear>
          Studying Master of Business Administration at Sasin Graduate Institute of Business Administration of Chulalongkorn University and works as a freelance
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          PUPPIES!, Art, Music, Drawing, Traveling,{' '}
          <Link href="https://500px.com/p/craftzdog" target="_blank">
            Photography
          </Link>
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/z-mojomoji" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @z-mojomoji
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/suphicha" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                Suphicha Anusirikul
              </Button>
            </Link>
          </ListItem>
        </List>

        {/* <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid> */}

        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
