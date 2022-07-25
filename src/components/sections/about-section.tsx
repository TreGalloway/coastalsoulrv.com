import {
    Box,
    VStack,
    Button,
    Flex,
    Divider,
    chakra,
    Grid,
    GridItem,
    Container,
} from '@chakra-ui/react'
import {} from '@chakra-ui/react'
import AmCarousel from '../carousels/amenities-carousel'
import Link from 'next/link'

interface FeatureProps {
    heading: string
    text: string
}

const Feature = ({ heading, text }: FeatureProps) => {
    return (
        <GridItem>
            <chakra.h3 fontSize="xl" fontWeight="600" color={'mango.400'}>
                {heading}
            </chakra.h3>
            <chakra.p
                fontSize={'2xl'}
                as={'span'}
                position={'relative'}
                _after={{
                    content: "''",
                    width: 'full',
                    height: '0%',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    bg: 'tangerine.200',
                    zIndex: -1,
                }}
            >
                {text}
            </chakra.p>
        </GridItem>
    )
}

export default function About() {
    return (
        <Box as={Container} maxW="7xl" mt={14} p={4}>
            <Grid
                templateColumns={{
                    base: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(2, 1fr)',
                }}
                gap={4}
            >
                <GridItem colSpan={1}>
                    <VStack alignItems="flex-start" spacing="20px">
                        <chakra.h2
                            fontSize="5xl"
                            fontFamily={'cursive'}
                            textAlign={'center'}
                        >
                            Welcome to Coastal Soul!
                        </chakra.h2>
                        <Button
                            colorScheme="tangerine"
                            size="lg"
                            placeSelf={'center'}
                        >
                            <Link href="#contact">Book Now</Link>
                        </Button>
                    </VStack>
                </GridItem>
                <GridItem>
                    <Flex>
                        <chakra.p fontSize={'lg'} fontWeight={'semibold'}>
                            “Coastal Soul” is a semi-private property that
                            affords you a relaxing, pleasant time in Crystal
                            Beach, TX. Located on the Bolivar Peninsula adjacent
                            to one of the Bird Sanctuaries, this property sits
                            just a few short walking steps from the sandy shores
                            of Crystal Beach, local restaurants, shops and bars.
                            Minutes away from the new Bolivar Rv resort lot
                            giving you access to live music, swimming pool, swim
                            up bar, & resturants. The property has a large,
                            spacious custom deck/patio for relaxing and watching
                            gorgeous sunsets. There is also great fishing in the
                            area with bait shops and local boat ramps just
                            minutes away.Let the memorires begin!
                        </chakra.p>
                    </Flex>
                </GridItem>
            </Grid>
            <Divider mt={12} mb={12} />
            <AmCarousel />

            <Grid
                templateColumns={{
                    base: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(4, 1fr)',
                }}
                gap={{ base: '8', sm: '12', md: '16' }}
                alignSelf={'center'}
            >
                <Feature
                    heading={'Cupboard Deck'}
                    text={
                        'Cupboard Deck for relaxing and watching beautiful sunsets.'
                    }
                />
                <Feature
                    heading={'BBQ Pit & Fire Pit'}
                    text={'Gas grill and smoker for outdoor cooking.'}
                />
                <Feature
                    heading={'Fire Pit'}
                    text={'Custom fire pit for late night campfires.'}
                />

                <Feature
                    heading={'Yamaha Golf Cart'}
                    text={'$100/day…Based on availability'}
                />
            </Grid>
        </Box>
    )
}
