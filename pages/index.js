import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Image from 'next/image'
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a frontend developer based in Thailand!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1} textAlign={{ base: 'center', md: 'left' }}>
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
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/moji.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Suphicha is a freelance and a frontend developer based in Bangkok with
          a passion for building a website that people wants to use. She has a
          knack from planning and designing, all the way to solving real-life
          problems with code. When not online, she loves hanging out with her
          puppy. Currently, she is giving her best in her study.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Work Experience
        </Heading>
        <BioSection>
          <BioYear>2014-2016</BioYear>
          Worked as a <em>Web/CSS Designer</em> at Dek-D Interactive co., ltd.
        </BioSection>
        <BioSection>
          <BioYear>2016</BioYear>
          Worked as a <em>Freelance Frontend/UI Developer/Designer</em> for The
          BigDot and Manulife (Singapore)
        </BioSection>
        <BioSection>
          <BioYear>2016-2020</BioYear>
          Worked as a <em>UI Developer / ITIC Software Engineer</em> for Agoda
        </BioSection>
        <BioSection>
          <BioYear>2021 to 2024</BioYear>
          Working as an <em>UX Developer</em> at Minor Hotels
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Education
        </Heading>
        <BioSection>
          <BioYear>2011-2013</BioYear>
          Completed the <em>Bachelor of Multimedia Design</em> from The
          University of Queensland, Brisbane, Australia
        </BioSection>
        <BioSection>
          <BioYear>2021 to present</BioYear>
          Studying the <em>Master of Business Administration</em> at Sasin
          Graduate Institute of Business Administration of Chulalongkorn
          University
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          PUPPIES!, Art, Music, Drawing, Traveling,{' '}
          <Link href="#" target="_blank">
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
                leftIcon={<IoLogoGithub />}
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
                leftIcon={<IoLogoLinkedin />}
              >
                Suphicha Anusirikul
              </Button>
            </Link>
          </ListItem>
        </List>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/posts"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            Popular posts
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
