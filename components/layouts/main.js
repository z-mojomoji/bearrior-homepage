import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import BearLoader, { BearLoaderStyle } from '../bear-loader'

const LazyBear = dynamic(() => import('../bear'), {
  ssr: false,
  loading: () => <BearLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Suphicha's homepage" />
        <meta name="author" content="Suphicha Anusirikul" />
        <meta name="author" content="z-mojomoji" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Suphicha Anusirikul" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@z_mojimoji" />
        <meta name="twitter:creator" content="@z_mojimoji" />
        <meta
          name="twitter:image"
          content="https://www.bearrior.com/card.png"
        />
        <meta property="og:site_name" content="Suphicha Anusirikul" />
        <meta name="og:title" content="Suphicha Anusirikul" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.bearrior.com/card.png" />
        <title>Suphicha Anusirikul - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyBear />

        {children}

        <BearLoaderStyle />
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
