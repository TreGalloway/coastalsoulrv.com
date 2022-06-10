import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ColorModeScript } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '../src/components/layout/navbar/navbar'

function MyApp({ Component, pageProps }: any) {
    return (
        <ChakraProvider theme={theme}>
            <Head>
                <title>CoastalSoulRV</title>
                <meta
                    name="CoastalSoulRV - RV Rental Site"
                    content="RV rental site"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />

            <Navbar />
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default MyApp
