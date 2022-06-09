import {
    Container,
    VStack,
    Box,
    Heading,
    Text,
    Divider,
} from '@chakra-ui/react'

export default function Rental2() {
    return (
        <VStack shadow={'md'} padding={'2'}>
            <Container maxW={'md'} mt={'5'}>
                <Box rounded={'lg'} border={'md'} borderColor={'gray.900'}>
                    <Box></Box>
                    <Box>
                        <Heading>Coastal Soul II (Lodging)</Heading>
                        <Divider />
                        <Text>
                            27’ Skyline Layton RV/Trailer with living area,
                            private sleeping areas, sofa, appliances. Sleeps 6
                            guests. The daily rental rate is $150/day (2-day
                            minimum). The weekly rental rate is $550. The
                            monthly rental rate is $800. All rates include
                            utilities. (Rates are based on 2 adult guests per
                            site and are subject to change)
                        </Text>
                    </Box>
                </Box>
            </Container>
        </VStack>
    )
}
