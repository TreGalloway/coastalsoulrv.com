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
            </Stack>
        </VStack>
    )
}
