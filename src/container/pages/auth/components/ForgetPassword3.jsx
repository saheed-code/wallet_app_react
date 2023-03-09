import React from 'react'
import { useNavigate } from "react-router-dom"
import newPassword from '../../../../assets/image/svg/newPassword.svg'
import { LoginContainer, InputField, CheckBox, StandAlone, InputForm, FormContainer, RightPTagTwo, LeftHalf, PTagContainer, RightHalf, PagingButton } from '../styles/authentication.styled'

export const ForgetPassword3 = () => {
   return(
    <LoginContainer>
        <LeftHalf imgUrl={newPassword}></LeftHalf>
        <RightHalf>
        <PTagContainer>
                <RightPTagTwo name={"one"}>Enter your OTP</RightPTagTwo>
            </PTagContainer>
            <FormContainer>
                <InputForm>
                    <CheckBox type="checkbox" name="checkbox" id="" placeholder='-'/>
                    <CheckBox type="checkbox" name="checkbox" id="" />
                    <CheckBox type="checkbox" name="checkbox" id="" />
                    <CheckBox type="checkbox" name="checkbox" id=""/><br/>
                    <PagingButton>Continue</PagingButton>
                </InputForm>
            </FormContainer>
        </RightHalf>
    </LoginContainer>
  )
}
