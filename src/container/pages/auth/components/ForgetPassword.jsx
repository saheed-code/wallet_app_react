import React from 'react'
import { useNavigate } from "react-router-dom"
import newPassword from '../../../../assets/image/svg/newPassword.svg'
import { LoginContainer, InputField, StandAlone, InputForm, FormContainer, RightPTagTwo, LeftHalf, PTagContainer, RightHalf, PagingButton } from '../styles/authentication.styled'

export const ForgetPassword = () => {
   return(
    <LoginContainer>
        <LeftHalf imgUrl={newPassword}></LeftHalf>
        <RightHalf>
            <PTagContainer>
                <RightPTagTwo name={"one"}>Reset password</RightPTagTwo>
            </PTagContainer>
            <FormContainer>
            <RightPTagTwo name={"two"}>Enter email address to reset password</RightPTagTwo>
                <InputForm>
                    <InputField type="text" name="lastName" id="lastName" placeholder="Email Address" />
                    <PagingButton>Next</PagingButton>
                </InputForm>
            </FormContainer>
        </RightHalf>
    </LoginContainer>
  )
}
