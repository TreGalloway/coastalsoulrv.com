//@ts-nocheck
import React, { useState } from 'react'
import {
    Text,
    Box,
    Flex,
    useColorModeValue,
    Image,
    HStack,
} from '@chakra-ui/react'

const Rental1Carousel = (props: any) => {
    const arrowStyles = {
        cursor: 'pointer',
        pos: 'absolute',
        top: '50%',
        w: 'auto',
        mt: '-22px',
        p: '16px',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '18px',
        transition: '0.6s ease',
        borderRadius: '0 3px 3px 0',
        userSelect: 'none',
        _hover: {
            opacity: 0.8,
            bg: 'black',
        },
    }

    const slides = [
        {
            img: 'https://images.pexels.com/photos/12455978/pexels-photo-12455978.jpeg?cs=srgb&dl=pexels-tre-galloway-12455978.jpg&fm=jpg',
        },
        {
            img: 'https://images.pexels.com/photos/12455985/pexels-photo-12455985.jpeg?cs=srgb&dl=pexels-tre-galloway-12455985.jpg&fm=jpg',
        },
        {
            img: 'https://images.pexels.com/photos/12455982/pexels-photo-12455982.jpeg?cs=srgb&dl=pexels-tre-galloway-12455982.jpg&fm=jpg',
        },
        {
            img: 'https://images.pexels.com/photos/12455980/pexels-photo-12455980.jpeg?cs=srgb&dl=pexels-tre-galloway-12455980.jpg&fm=jpg',
        },
        {
            img: 'https://images.pexels.com/photos/12455976/pexels-photo-12455976.jpeg?cs=srgb&dl=pexels-tre-galloway-12455976.jpg&fm=jpg',
        },
        {
            img: 'https://images.pexels.com/photos/12455975/pexels-photo-12455975.jpeg?cs=srgb&dl=pexels-tre-galloway-12455975.jpg&fm=jpg',
        },
        {
            img: 'https://images.pexels.com/photos/12455986/pexels-photo-12455986.jpeg?cs=srgb&dl=pexels-tre-galloway-12455986.jpg&fm=jpg',
        },
        {
            img: 'https://images.pexels.com/photos/12455981/pexels-photo-12455981.jpeg?cs=srgb&dl=pexels-tre-galloway-12455981.jpg&fm=jpg',
        },
        {
            img: 'https://images.pexels.com/photos/12455977/pexels-photo-12455977.jpeg?cs=srgb&dl=pexels-tre-galloway-12455977.jpg&fm=jpg',
        },
        {
            img: 'https://images.pexels.com/photos/12455979/pexels-photo-12455979.jpeg?cs=srgb&dl=pexels-tre-galloway-12455979.jpg&fm=jpg',
        },
        {
            img: 'https://images.pexels.com/photos/12455984/pexels-photo-12455984.jpeg?cs=srgb&dl=pexels-tre-galloway-12455984.jpg&fm=jpg',
        },
    ]

    const [currentSlide, setCurrentSlide] = useState(0)

    const slidesCount = slides.length

    const prevSlide = () => {
        setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1))
    }
    const nextSlide = () => {
        setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1))
    }
    const setSlide = (slide) => {
        setCurrentSlide(slide)
    }
    const carouselStyle = {
        transition: 'all .5s',
        ml: `-${currentSlide * 100}%`,
    }

    return (
        // <Flex
        //     w="full"
        //     bg={useColorModeValue('gray.200', 'gray.600')}
        //     p={10}
        //     alignItems="center"
        //     justifyContent="center"
        // >
        <Flex w="full" overflow="hidden" pos="relative">
            <Flex h="400px" w="full" {...carouselStyle}>
                {slides.map((slide, sid) => (
                    <Box
                        key={`slide-${sid}`}
                        boxSize="full"
                        shadow="md"
                        flex="none"
                    >
                        <Text
                            color="white"
                            fontSize="xs"
                            p="8px 12px"
                            pos="absolute"
                            top="0"
                        >
                            {sid + 1} / {slidesCount}
                        </Text>
                        <Image
                            src={slide.img}
                            alt="carousel image"
                            boxSize="full"
                            backgroundSize="cover"
                        />
                    </Box>
                ))}
            </Flex>

            <Text {...arrowStyles} left="0" onClick={prevSlide}>
                &#10094;
            </Text>
            <Text {...arrowStyles} right="0" onClick={nextSlide}>
                &#10095;
            </Text>
            <HStack justify="center" pos="absolute" bottom="8px" w="full">
                {Array.from({ length: slidesCount }).map((_, slide) => (
                    <Box
                        key={`dots-${slide}`}
                        cursor="pointer"
                        boxSize={['7px', , '15px']}
                        m="0 2px"
                        bg={
                            currentSlide === slide
                                ? 'blackAlpha.800'
                                : 'blackAlpha.500'
                        }
                        rounded="50%"
                        display="inline-block"
                        transition="background-color 0.6s ease"
                        _hover={{ bg: 'blackAlpha.800' }}
                        onClick={() => setSlide(slide)}
                    ></Box>
                ))}
            </HStack>
        </Flex>
        // </Flex>
    )
}
export default Rental1Carousel
