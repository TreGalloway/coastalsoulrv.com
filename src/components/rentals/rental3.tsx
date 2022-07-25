import {
    Container,
    Button,
    VStack,
    Box,
    Heading,
    Text,
    Divider,
} from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'
import Rental3Carousel from '../carousels/rental3-carousel'

export default function Rental3() {
    return (
        <VStack shadow={'md'} padding={'2'} rounded={'md'} id="rvsite">
            <Container maxW={'md'} mt={'5'} mb={'3'}>
                <Box rounded={'lg'} border={'md'} borderColor={'gray.900'}>
                    <Box>
                        {/* <Image src={Beach} alt="beach" /> */}
                        <Rental3Carousel />
                    </Box>
                    <Box>
                        <Heading color={'tangerine.400'}>RV Port/Site</Heading>
                        <Divider />
                        <Text
                            padding={'3'}
                            fontSize={'xl'}
                            fontWeight={'semibold'}
                        >
                            Property has all utilities
                            (Water/Electricity/Septic) including a 30 AMP
                            Breaker with two additional 110 plug outlets on the
                            pole. All amenities listed above included with
                            rental. The daily rental rate is $55/day (2-day
                            minimum). The weekly rate is $300/wk. The monthly
                            rental rate is $650 which includes utilities. (Rates
                            are subject to change).
                        </Text>
                    </Box>
                </Box>
            </Container>
        </VStack>
    )
}
