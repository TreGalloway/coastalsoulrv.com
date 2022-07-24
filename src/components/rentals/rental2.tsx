import {
    Container,
    VStack,
    Button,
    Box,
    Heading,
    Text,
    Divider,
} from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'
import Rental2Carousel from '../carousels/rental2-carousel'

// const Outside2 = require('/Users/tre/coastalsoulrv.com/public/assets/rental2/outside 1.JPEG')

export default function Rental2() {
    return (
        <VStack shadow={'md'} padding={'2'} rounded={'md'} id="coastalsoul2">
            <Container maxW={'md'} mt={'5'} mb={'3'}>
                <Box rounded={'lg'} border={'md'} borderColor={'gray.900'}>
                    <Box>
                        <Rental2Carousel />
                        {/* <Image src={Outside2} alt="rental2 outside" /> */}
                    </Box>
                    <Box>
                        <Heading color={'tangerine.400'}>
                            Coastal Soul II (Lodging)
                        </Heading>
                        <Divider />
                        <Text
                            padding={'3'}
                            fontSize={'xl'}
                            fontWeight={'semibold'}
                        >
                            27’ Skyline Layton RV/Trailer with living area,
                            private sleeping areas, sofa, appliances. Sleeps 6
                            guests. The daily rental rate is $150/day (2-day
                            minimum). The weekly rental rate is $550. The
                            monthly rental rate is $800. All rates include
                            utilities. (Rates are based on 2 adult guests per
                            site and are subject to change)
                        </Text>
                        {/* <Button size={'lg'}>
                            <Link href={'/rental1'}>Gallery</Link>{' '}
                        </Button> */}
                    </Box>
                </Box>
            </Container>
        </VStack>
    )
}
