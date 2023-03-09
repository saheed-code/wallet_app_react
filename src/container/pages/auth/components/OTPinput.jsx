import React from 'react'
import SignUpImage from '../../../../assets/image/svg/SignUpImage.svg'
import { LoginContainer, InputField, CheckBox, InputForm, FormContainer, RightPTagTwo, LeftHalf, PTagContainer, RightHalf, PagingButton, CheckBoxField } from '../styles/authentication.styled'


export const OTPinput = () => {
  return (
    <LoginContainer>
        <LeftHalf imgUrl={SignUpImage}></LeftHalf>
        <RightHalf>
            <PTagContainer>
                <RightPTagTwo name={"one"}>Enter your OTP</RightPTagTwo>
            </PTagContainer>
            <FormContainer>
                <CheckBoxField>
                    <CheckBox type="number" maxLength="1" id=""/>
                    <CheckBox type="number" maxLength="1" id=""/>
                    <CheckBox type="number" maxLength="1" id=""/>
                    <CheckBox type="number" maxLength="1" id=""/><br/>                    
                </CheckBoxField>
                <PagingButton>Continue</PagingButton>
            </FormContainer>
        </RightHalf>
    </LoginContainer>
  )
}
