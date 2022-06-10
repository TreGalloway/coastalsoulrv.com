import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
} from '@chakra-ui/react'
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
} from 'react-icons/md'
import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
} from 'formik'

import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs'
import Link from 'next/link'

interface MyFormValues {
    name: string
    email: string
    message: string
}

export default function Contact() {
    const initialValues: MyFormValues = { name: '', email: '', message: '' }

    return (
        <Container
            maxW="full"
            pt={10}
            centerContent
            overflow="hidden"
            id="contact"
        >
            <Flex>
                <Box
                    bg={'emerald.600'}
                    color="white"
                    borderRadius="lg"
                    m={{ sm: 4, md: 16, lg: 10 }}
                    p={{ sm: 5, md: 5, lg: 16 }}
                >
                    <Box p={4}>
                        <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                            <WrapItem>
                                <Box>
                                    <Heading>Call or Email to Book</Heading>
                                    <Formik
                                        initialValues={initialValues}
                                        onSubmit={(values, actions) => {
                                            console.log({ values, actions })
                                            alert(
                                                JSON.stringify(values, null, 2)
                                            )
                                            actions.setSubmitting(false)
                                        }}
                                    ></Formik>
                                    {/* <Text
                                        mt={{ sm: 3, md: 3, lg: 5 }}
                                        color="gray.50"
                                    >
                                        Fill up the form below to contact
                                    </Text> */}
                                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                                        <VStack
                                            pl={0}
                                            spacing={3}
                                            alignItems="center"
                                        >
                                            <Button
                                                size="md"
                                                height="48px"
                                                width="200px"
                                                variant="ghost"
                                                color="mango.400"
                                                _hover={{
                                                    border: '2px solid #1C6FEB',
                                                }}
                                                leftIcon={
                                                    <MdPhone
                                                        color="#1970F1"
                                                        size="20px"
                                                    />
                                                }
                                            >
                                                <a
                                                    href={'tel:+17135025126'}
                                                ></a>
                                                713-502-5126
                                            </Button>
                                            <Button
                                                size="md"
                                                height="48px"
                                                width="200px"
                                                variant="ghost"
                                                color="#DCE2FF"
                                                _hover={{
                                                    border: '2px solid #1C6FEB',
                                                }}
                                                leftIcon={
                                                    <MdEmail
                                                        color="#1970F1"
                                                        size="20px"
                                                    />
                                                }
                                            >
                                                <Link
                                                    href={
                                                        'mailto:feliciafish@att.net'
                                                    }
                                                >
                                                    feliciafish@att.net
                                                </Link>
                                            </Button>
                                            <Button
                                                size="md"
                                                height="48px"
                                                width="200px"
                                                variant="ghost"
                                                color="#DCE2FF"
                                                _hover={{
                                                    border: '2px solid #1C6FEB',
                                                }}
                                                leftIcon={
                                                    <MdLocationOn
                                                        color="#1970F1"
                                                        size="20px"
                                                    />
                                                }
                                            >
                                                <a
                                                    href={
                                                        'https://goo.gl/maps/9zTGGPPfNWMRS8ea9'
                                                    }
                                                >
                                                    {' '}
                                                    Crystal Beach, TX
                                                </a>
                                            </Button>
                                        </VStack>
                                    </Box>
                                </Box>
                            </WrapItem>
                            {/* <WrapItem padding={5}>
                                <Box bg="white" borderRadius="lg">
                                    <Box m={8} color="#0B0E3F">
                                        <VStack spacing={5}>
                                            <FormControl id="name" isRequired>
                                                <FormLabel>Your Name</FormLabel>
                                                <InputGroup borderColor="#E0E1E7">
                                                    <InputLeftElement
                                                        pointerEvents="none"
                                                        children={
                                                            <BsPerson color="gray.800" />
                                                        }
                                                    />
                                                    <Input
                                                        type="text"
                                                        size="md"
                                                    />
                                                </InputGroup>
                                            </FormControl>
                                            <FormControl id="mail" isRequired>
                                                <FormLabel>Mail</FormLabel>
                                                <InputGroup borderColor="#E0E1E7">
                                                    <InputLeftElement
                                                        pointerEvents="none"
                                                        children={
                                                            <MdOutlineEmail color="gray.800" />
                                                        }
                                                    />
                                                    <Input
                                                        type="text"
                                                        size="md"
                                                    />
                                                </InputGroup>
                                            </FormControl>
                                            <FormControl
                                                id="message"
                                                isRequired
                                            >
                                                <FormLabel>Message</FormLabel>
                                                <Textarea
                                                    borderColor="gray.300"
                                                    _hover={{
                                                        borderRadius:
                                                            'gray.300',
                                                    }}
                                                    placeholder="message"
                                                />
                                            </FormControl>
                                            <FormControl
                                                id="submit"
                                                float="right"
                                            >
                                                <Button
                                                    type="submit"
                                                    variant="solid"
                                                    bg="#0D74FF"
                                                    color="white"
                                                    _hover={{}}
                                                >
                                                    Send Message
                                                </Button>
                                            </FormControl>
                                        </VStack>
                                    </Box>
                                </Box>
                            </WrapItem> */}
                        </Wrap>
                    </Box>
                </Box>
            </Flex>
        </Container>
    )
}
