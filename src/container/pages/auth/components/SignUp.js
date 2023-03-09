import React from 'react'
import { useLocation } from "react-router-dom"
// import { useNavigate } from "react-router-dom"
import SignUpImage from '../../../../assets/image/svg/SignUpImage.svg'
import { LoginContainer, InputField, InputForm, FormContainer, RightPTagTwo, LeftHalf, PTagContainer, RightHalf, PagingButton } from '../styles/authentication.styled'
import {
    Modal, useDisclosure,
    ModalOverlay, ChakraProvider,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody, Button,
    ModalCloseButton,
  } from '@chakra-ui/react'

export const SignUp = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    // const navigate = useNavigate();

    const {id, email, password} = useLocation().state
  return (
    <>
        <LoginContainer>
            <LeftHalf imgUrl={SignUpImage}></LeftHalf>
            <RightHalf>
                <PTagContainer>
                    <RightPTagTwo name={"one"}>Welcome Back!</RightPTagTwo>
                    <RightPTagTwo name={"two"}>Log in to your Dashboard</RightPTagTwo>
                </PTagContainer>
                <FormContainer>
                    <InputForm>
                        <InputField type="text" name="firstName" id="firstName" placeholder='First Name' />
                        <InputField type="text" name="lastName" id="lastName" placeholder='Last Name' />
                        <InputField type="email" name="email" id="email" placeholder='Email' value={email}/>
                        <InputField type="password" name="password" id="password" placeholder='Password' value={password} />
                        <Button onClick={onOpen}>Sign Up</Button>
                        
                    </InputForm>
                </FormContainer>
            </RightHalf>
        </LoginContainer>
        
        <ChakraProvider>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <p>Kindly check your mail to see your OTP number for email verification</p>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                    </Button>
                    <Button variant='ghost'>Secondary Action</Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </ChakraProvider>
    </>
  )
}
