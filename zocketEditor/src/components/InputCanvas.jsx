import {
    Box,
    Stack,
    Button,
    Heading,
    Text,
    useDisclosure,
    ScaleFade,
    Divider,
    AbsoluteCenter,
    Center,
    Flex,
    FormLabel,
    Input,
} from '@chakra-ui/react'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useState } from 'react';
import { HexColorPicker } from "react-colorful";




export default function InputCanvas({ handleImageUpload, handleContentChange,content, handleCtaChange, addColor, handleColorChange, colors, selectedColor }) {
    const { isOpen, onToggle } = useDisclosure();


    return (
        <>
            <Center>
                <Box height={"auto"} p={10}>
                    <Button borderRadius={"50%"} color={"red"} onClick={onToggle}>X</Button>
                    <ScaleFade initialScale={0.9} in={isOpen} >
                        <Box
                            marginTop={"-200px"}
                            color='white'
                            mt='4'
                            rounded='md'
                        >
                            <Stack spacing={2} mx={'auto'} maxW={'lg'} >
                                <Stack align={'center'}>
                                    <Heading fontSize={'4xl'} color={"#000"}>Ad customization</Heading>
                                    <Text fontSize={'lg'} color={'gray.600'}>
                                        Customise your ad and get the templates accordingly
                                    </Text>
                                </Stack>
                                <Box
                                    rounded={'lg'}
                                    bg={"white"}
                                    p={4} >

                                    <Stack spacing={4}>
                                        <Box border={"1px solid grey"} p={4} borderRadius={10} >
                                            <Flex gap={2}>
                                                <AddPhotoAlternateIcon style={{ color: '#c2e7ff' }} />
                                                <Text color={"grey"}>Change the ad creative image.</Text>
                                                <Box>
                                                    <FormLabel htmlFor="file" color="blue.500" borderBottom="2px solid blue">
                                                        Select file
                                                    </FormLabel>
                                                    <Input id="file" type="file" opacity={0} position="absolute" onChange={(e) => handleImageUpload(e)} />
                                                </Box>
                                            </Flex>
                                        </Box>
                                        <Box position='relative' padding='4'>
                                            <Divider />
                                            <AbsoluteCenter bg='white' color={"grey"} px='4'>
                                                Edit contents
                                            </AbsoluteCenter>
                                        </Box>
                                        <Box border={"1px solid grey"} p={1} borderRadius={10}>
                                            <Text mb='8px' color={"grey"}>Ad content</Text>
                                            <Input
                                                size='md'
                                                color={"#000"}
                                                border={"none"}
                                                // value={content}
                                                onChange={handleContentChange}
                                            />
                                        </Box>
                                        <Box border={"1px solid grey"} p={1} borderRadius={10}>
                                            <Text mb='8px' color={"grey"}>CTA</Text>
                                            <Input
                                                size='md'
                                                color={"#000"}
                                                border={"none"}
                                                onChange={(e) => handleCtaChange(e)}
                                            />
                                        </Box>
                                        <Box>
                                            <Flex>
                                                {colors.map((color, index) => (
                                                    <Box key={index} bg={color} w="30px" h="30px" mr={2}></Box>
                                                ))}
                                                {colors.length < 5 && (
                                                    <>
                                                        <Box mr={2}>
                                                            <HexColorPicker color={selectedColor} onChange={handleColorChange} />
                                                        </Box>
                                                        <Button onClick={addColor} mt={2} color="#000">
                                                            +
                                                        </Button>
                                                    </>
                                                )}
                                            </Flex>
                                        </Box>
                                    </Stack>
                                </Box>
                            </Stack>
                        </Box>
                    </ScaleFade>
                </Box>
            </Center>
        </>
    )
}
