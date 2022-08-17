import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { Container, Button, Stack, Link, Text, useFocusOnShow } from '@chakra-ui/react'
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




export default function Home({ ip }) {
  var { t } = useTranslation('nav')

  const router = useRouter()
  const { id } = router.query
  console.log({ ip })

  function changeLanguage(key) {
    i18next.changeLanguage(key)
  }

  if (typeof window !== 'undefined') {
    window.document.onmousemove = function (ev) {
      var event = ev || event
      document.getElementById("xcoor").innerHTML = event.clientX
      document.getElementById("ycoor").innerHTML = event.clientY
      watchChangeSize()
    }

    window.onload = function () {
      console.log('页面加载完毕')
      watchChangeSize()
    }

    window.onresize = function () {
      console.log('监听变化')
      watchChangeSize()
    }



    function watchChangeSize() {
      //可视区的宽/高(DOM)    
      var offsetWid = document.documentElement.clientWidth
      var offsetHei = document.documentElement.clientHeight
      console.log(offsetWid)
      console.log(offsetHei)
      document.getElementById("offsetWid").innerHTML = offsetWid
      document.getElementById("offsetHei").innerHTML = offsetHei
    }

    var runTime = null
    var dt = null
    runTime = setTimeout(time, 1000) //開始运行
    function time() {
      clearTimeout(runTime) //清除定时器
      dt = new Date()
      var y = dt.getFullYear()
      var mt = dt.getMonth() + 1
      var day = dt.getDate()
      var h = dt.getHours() //获取时
      var m = dt.getMinutes() //获取分
      var s = dt.getSeconds() //获取秒
      document.getElementById("showTime").innerHTML =
        y +
        "-" +
        mt +
        "-" +
        day
      //  +
      // "-" +
      // h +
      // "时" +
      // m +
      // "分" +
      // s +
      // "秒"
      runTime = setTimeout(time, 1000) //设定定时器，循环运行
    }

  }



  return (

    // <div className={styles.container}>
    <Container maxW='-moz-max-content' bg='gray.500' color='white' centerContent >
      <Head>
        <title>Make Your Own Blog</title>
        <meta name="description" content="Make Your Own Blog - Create Your Blog For Free" />
        <link rel="icon" href="/favicon.ico" />
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
              <Text fontSize='2xl'>{t('Status 1')}  &rarr;</Text>
              <Text fontSize='1xl'>{t('Page height:')}<span id="offsetHei"></span>{t('px')}</Text>
              <Text fontSize='1xl'>{t('Page width:')}<span id="offsetWid"></span>{t('px')}</Text>
            </Link>
          </Button>
          <Button colorScheme='blackAlpha' size='lg' height='200px' width='250px' border='2px' borderColor='whiteAlpha.800'>
            <Link href="https://nextjs.org/docs">
              <Text fontSize='2xl'>{t('Status 2')} &rarr;</Text>
              <Text fontSize='1xl'>{t('Mouse position:')}(<span id="xcoor"></span>,<span id="ycoor"></span>)</Text>
            </Link>
          </Button>
          <Button colorScheme='blackAlpha' size='lg' height='200px' width='250px' border='2px' borderColor='whiteAlpha.800'>
            <Link href="https://nextjs.org/docs">
              <Text fontSize='2xl'>{t('Status 3')} &rarr;</Text>
              <Text fontSize='1xl'>{t('Current date:')}<span id="showTime"></span></Text>
            </Link>
          </Button>
          <Button colorScheme='blackAlpha' size='lg' height='200px' width='250px' border='2px' borderColor='whiteAlpha.800'>
            <Link href="https://nextjs.org/docs">
              <Text fontSize='2xl'>{t('Status 4')} &rarr;</Text>
              <Text fontSize='1xl'>{t('Your IP:')}{ip}</Text>
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

Home.getInitialProps = async ({ req }) => {
  console.log(req.headers)
  const ip = req.headers['x-real-ip'] || req.connection.remoteAddress
  console.log('ip is', ip)
  return { ip }
}
