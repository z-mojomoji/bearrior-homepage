import NextLink from 'next/link'
import { Heading, Box, Link, Image, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const ContentImage = ({ src, alt }) => (
    <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
  )
  
export const Meta = ({ children }) => (
    <Badge colorScheme="green" mr={2}>
        {children}
    </Badge>
)

export const Title = ({ type, children }) => (
    <Box>
      <NextLink href={(type === 'post') ? `/posts` : `/works`}>
        <Link>{(type === 'post') ? `Posts` : `Works`}</Link>
      </NextLink>
      <span>
        {' '}
        <ChevronRightIcon />{' '}
      </span>
      <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
        {children}
      </Heading>
    </Box>
)