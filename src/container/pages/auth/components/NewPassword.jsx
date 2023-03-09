import React from 'react'
import { useNavigate } from "react-router-dom"
import newPassword from '../../../../assets/image/svg/newPassword.svg'
import { LoginContainer, InputField, CheckBox, StandAlone, InputForm, FormContainer, RightPTagTwo, LeftHalf, PTagContainer, RightHalf, PagingButton } from '../styles/authentication.styled'

export const NewPassword = () => {
   return(
    <LoginContainer>
        <LeftHalf imgUrl={newPassword}></LeftHalf>
        <RightHalf>
        <PTagContainer>
                <RightPTagTwo name={"one"}>Enter New Password</RightPTagTwo>
        </PTagContainer>
        <FormContainer>
            <InputForm>
                <InputField type="password" name="password" id="lastName" placeholder="Password" />
                <PagingButton>Reset</PagingButton>
            </InputForm>
        </FormContainer>
        </RightHalf>
    </LoginContainer>
  )
}
