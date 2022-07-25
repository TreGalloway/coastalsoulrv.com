import { ReactNode } from 'react'
import {
    Box,
    Flex,
    Avatar,
    HStack,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { ColorModeSwitcher } from './colormodeswitcher'
// const Links = ["Dashboard", "Projects", "Team"];
import navStyles from './navbar.module.css'
const Links = [
    // {
    //     name: 'Home',
    //     path: '/',
    // },
    {
        name: 'Coastal Soul I',
        path: '#coastalsoul1',
    },
    {
        name: 'Coastal Soul II',
        path: '#coastalsoul2',
    },
    {
        name: 'Rv Port/Site',
        path: '#rvsite',
    },
    {
        name: 'Contact',
        path: '#contact',
    },
]

const NavLink = ({ children, path }: { children: ReactNode; path: string }) => (
    <Box
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.100', 'gray.700'),
        }}
    >
        <Link href={path}>{children}</Link>
    </Box>
)

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <div className={navStyles.mobileNav}>
            <Box bg={useColorModeValue('gray.50', 'gray.900')} px={4}>
                <Flex
                    h={16}
                    alignItems={'center'}
                    // justifyContent={'space-between'}
                >
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />{' '}
                    <HStack spacing={8} alignItems={'center'}>
                        {/* <Box>Logo</Box> */} <ColorModeSwitcher />
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}
                        >
                            {Links.map(({ name, path }) => (
                                <NavLink key={path} path={path}>
                                    {name}
                                </NavLink>
                            ))}
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                            ></MenuButton>
                            <MenuList>
                                <MenuItem>Link 1</MenuItem>
                                <MenuItem>Link 2</MenuItem>
                                <MenuDivider />
                                <MenuItem>Link 3</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map(({ name, path }) => (
                                <NavLink key={path} path={path}>
                                    {name}
                                </NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>

            {/* <Box p={4}>Main Content Here</Box> */}
        </div>
    )
}
