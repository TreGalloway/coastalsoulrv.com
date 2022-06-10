import type { NextPage } from 'next'
import { Box, VStack, Text, Heading } from '@chakra-ui/react'
import Rental1Carousel from '../src/components/carousels/rental1-carousel'
const CoastalSoul1: NextPage = () => {
    return (
        <VStack maxW={'lg'}>
            <Box>
                {/* <Heading>Coastal Soul I Gallery</Heading> */}
                <Rental1Carousel />
            </Box>
        </VStack>
    )
}
export default CoastalSoul1
