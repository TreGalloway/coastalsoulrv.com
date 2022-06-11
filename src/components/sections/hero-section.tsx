import {
    Stack,
    Flex,
    Button,
    Text,
    Image,
    VStack,
    useBreakpointValue,
    Box,
    Heading,
} from '@chakra-ui/react'
// import Image from 'next/image'
export default function Hero() {
    return (
        <VStack>
            <Stack>
                <Box>
                    <Image
                        src={
                            'https://images.pexels.com/photos/12456368/pexels-photo-12456368.jpeg?cs=srgb&dl=pexels-tre-galloway-12456368.jpg&fm=jpg'
                        }
                        alt={''}
                        boxSize="full"
                        backgroundSize="cover"
                    />
                </Box>
                {/* <Box>
                    <Heading
                        as="h1"
                        size={'2xl'}
                        lineHeight={1.1}
                        fontWeight={600}
                        fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
                        ml={4}
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
                    <Text color={'gray.500'}>
                        Snippy is a rich coding snippets app that lets you
                        create your own code snippets, categorize them, and even
                        sync them in the cloud so you can use them
                    </Text>
                </Box> */}
            </Stack>
        </VStack>
    )
}
