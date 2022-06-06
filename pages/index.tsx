import { Container } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Image from 'next/image'
import Header from '../src/components/layout/header'
import About from '../src/components/sections/about-section'
import Hero from '../src/components/sections/hero-section'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <div>
            <Header />
            <Hero />
            <About />
        </div>
    )
}

export default Home
