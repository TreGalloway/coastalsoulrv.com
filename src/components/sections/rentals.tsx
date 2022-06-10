import { VStack, Container, Stack, Heading, Text } from '@chakra-ui/react'
import RentalStack from '../rentals/rental-stack'
import Rental1 from '../rentals/rental1'

export default function Rentals() {
    return (
        <VStack>
            <Container maxW={'7xl'}>
                <Stack
                    align={'center'}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 20, md: 28 }}
                    direction={{ base: 'column', md: 'row' }}
                >
                    <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
                        >
                            <Text
                                as={'span'}
                                position={'relative'}
                                _after={{
                                    content: "''",
                                    width: 'full',
                                    height: '30%',
                                    position: 'absolute',
                                    bottom: 1,
                                    left: 0,
                                    bg: 'tangerine.500',
                                    zIndex: -1,
                                }}
                            >
                                Explore our
                            </Text>
                            <br />
                            <Text as={'span'} color={'tangerine.400'}>
                                Rental Options!
                            </Text>
                        </Heading>
                    </Stack>
                </Stack>
            </Container>
            <RentalStack />
            <Text color={'red.400s'}>
                A $25 Cleaning Fee shall be assessed to all RV rentals
            </Text>
        </VStack>
    )
}
