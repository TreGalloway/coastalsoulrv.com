import { Box, Divider } from '@chakra-ui/react'
import type { NextPage } from 'next'
import About from '../src/components/sections/about-section'
import Contact from '../src/components/sections/contact-section'
import Hero from '../src/components/sections/hero-section'
import Rentals from '../src/components/sections/rentals'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <Box>
            <Hero />
            <About />
            <Divider />
            <Rentals />
            <Contact />
        </Box>
    )
}

export default Home
