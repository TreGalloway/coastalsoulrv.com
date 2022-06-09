import {
    Container,
    HStack,
    VStack,
    Stack,
    Wrap,
    WrapItem,
} from '@chakra-ui/react'
import Rental1 from './rental1'
import Rental2 from './rental2'
import Rental3 from './rental3'

export default function RentalStack() {
    return (
        <VStack>
            <Stack>
                <Wrap>
                    <WrapItem>
                        <Rental1 />
                    </WrapItem>
                    <WrapItem>
                        <Rental2 />
                    </WrapItem>
                    <WrapItem>
                        <Rental3 />
                    </WrapItem>
                </Wrap>
            </Stack>
        </VStack>
    )
}
