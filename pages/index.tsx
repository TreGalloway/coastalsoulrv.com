import { Container } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Image from 'next/image'
import { Header } from '../src/components/layout/header'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <Container
            display="flex"
            maxW="container.lg"
            minH={{ base: 'auto', md: '100vh' }}
            px={{ base: 4, lg: 0 }}
            centerContent
        >
            <Header />
        </Container>
    )
}

export default Home
