import {
    Container,
    VStack,
    Box,
    Heading,
    Text,
    Divider,
    Button,
    useColorMode,
    useColorModeValue,
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import Rental1Carousel from '../carousels/rental1-carousel'

export default function Rental1() {
    const { toggleColorMode } = useColorMode()

    const bg = useColorModeValue('gray.100', 'gray.900')
    const color = useColorModeValue('white', 'gray.800')
    return (
        <VStack shadow={'md'} rounded={'md'} id="coastalsoul1">
            <Container maxW={'md'} mt={'5'} mb={'3'}>
                <Box
                    border={'md'}
                    borderColor={'gray.900'}
                    bg={'bg'}
                    color={'color'}
                >
                    <Rental1Carousel />
                    {/* <Image src={Outside1} alt="rental1 outside" /> */}
                    <Box>
                        <Heading color={'tangerine.400'}>
                            Coastal Soul I (Lodging)
                        </Heading>
                        <Divider />
                        <Text fontSize={'xl'}>
                            27’ Coachman Catalina SBX RV/Trailer with super
                            slide out living area, private sleeping areas, sofa,
                            appliances. Sleeps 6 guests. The daily rental rate
                            is $150/day (2-day minimum). The weekly rental rate
                            is $550. The monthly rental rate is $800. All rates
                            include utilities. (Rates are based on 2 adult
                            guests per site and are subject to change)
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
