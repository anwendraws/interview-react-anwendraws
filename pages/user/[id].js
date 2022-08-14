import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { Container, Button, Stack, Link, Text } from '@chakra-ui/react'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import i18next from '../../i18n'
import { ChevronDownIcon } from '@chakra-ui/icons'
import Head from 'next/head'

const languageList = [
  {
    name: 'English',
    key: 'en-US',
  },
  {
    name: '中文',
    key: 'zh-CN',
  },
]


export default function Home() {
  const { t } = useTranslation('nav')
  const router = useRouter()
  const { id } = router.query

  function changeLanguage(key) {
    i18next.changeLanguage(key)
  }
  return (

    // <div className={styles.container}>
    <Container maxW='-moz-max-content' bg='gray.500' color='white' centerContent>
      <Head>
        <title>Make Your Own Blog</title>
        <meta name="description" content="Make Your Own Blog - Create Your Blog For Free" />
        <link rel="icon" href="/blog.ico" />
      </Head>
      <div className={styles.menuBox}>
        <Menu >
          <MenuButton
            px={4}
            py={2}
            transition="all 0.2s"
            borderRadius="md"
            borderWidth="1px"
            background="gray.600"
            _hover={{ bg: 'gray.700' }}
            _expanded={{ bg: 'gray.700' }}
            _focus={{ boxShadow: 'outline' }}
          >
            {t('language')}<ChevronDownIcon />
          </MenuButton>
          <MenuList background="gray.600">
            {languageList.map((item) => (
              <MenuItem
                key={item.key}
                onClick={() => changeLanguage(item.key)}
                background="gray.600"
                _hover={{ bg: 'gray.700' }}
                _expanded={{ bg: 'gray.800' }}
                _focus={{ boxShadow: 'outline' }}>
                {item.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        <Menu >
          <MenuButton
            px={4}
            py={2}
            mt={5}
            transition="all 0.2s"
            borderRadius="md"
            borderWidth="1px"
            background="gray.600"
            _focus={{ boxShadow: 'outline' }}

          >
            {t('home')}
          </MenuButton>
        </Menu>
        <Menu >
          <MenuButton
            px={4}
            py={2}
            transition="all 0.2s"
            borderRadius="md"
            borderWidth="1px"
            background="gray.600"
            _focus={{ boxShadow: 'outline' }}

          >
            {t('faq')}
          </MenuButton>
        </Menu>
      </div>
      <main className={styles.main}>
        <Text fontSize='6xl'>{t('Welcome to Home')}, {id}</Text>
        <Stack spacing={4} direction='row' align='center' mt='70px'>
          <Button colorScheme='blackAlpha' size='lg' height='200px' width='250px' border='2px' borderColor='whiteAlpha.800'>
            <Link href="https://nextjs.org/docs">
              <Text fontSize='3xl'>{t('Status 1')}  &rarr;</Text>
              <Text fontSize='2xl'>{t('Page height:')}</Text>
              <Text fontSize='2xl'>{t('Page width:')}</Text>
            </Link>
          </Button>
          <Button colorScheme='blackAlpha' size='lg' height='200px' width='250px' border='2px' borderColor='whiteAlpha.800'>
            <Link href="https://nextjs.org/docs">
              <Text fontSize='3xl'>{t('Status 2')} &rarr;</Text>
              <Text fontSize='2xl'>{t('Mouse position:')}</Text>
            </Link>
          </Button>
          <Button colorScheme='blackAlpha' size='lg' height='200px' width='250px' border='2px' borderColor='whiteAlpha.800'>
            <Link href="https://nextjs.org/docs">
              <Text fontSize='3xl'>{t('Status 3')} &rarr;</Text>
              <Text fontSize='2xl'>{t('Current date:')}</Text>
            </Link>
          </Button>
          <Button colorScheme='blackAlpha' size='lg' height='200px' width='250px' border='2px' borderColor='whiteAlpha.800'>
            <Link href="https://nextjs.org/docs">
              <Text fontSize='3xl'>{t('Status 4')} &rarr;</Text>
              <Text fontSize='2xl'>{t('Your IP:')}</Text>
            </Link>
          </Button>
        </Stack>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('Powered by')}{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </Container>

  )
}

export async function getServerSideProps(ctx) {
  // this is to ensure server return the right content based on language in the query string.
  // updateLanguage(ctx)
  return { props: {} }
}
