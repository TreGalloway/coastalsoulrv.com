import { VStack, Container, Stack, Heading, Text } from '@chakra-ui/react'
import RentalStack from '../rentals/rental-stack'
import Rental1 from '../rentals/rental1'

export default function Rentals() {
    return (
        <VStack marginLeft={10}>
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
                                    bg: 'red.400',
                                    zIndex: -1,
                                }}
                            >
                                Write once,
                            </Text>
                            <br />
                            <Text as={'span'} color={'red.400'}>
                                use everywhere!
                            </Text>
                        </Heading>
                    </Stack>
                </Stack>
            </Container>
            <RentalStack />
        </VStack>
    )
}
