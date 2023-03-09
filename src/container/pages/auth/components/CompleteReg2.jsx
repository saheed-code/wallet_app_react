import React from 'react'
import { useNavigate } from "react-router-dom"
import completeReg from '../../../../assets/image/svg/completeReg.svg'
import { LoginContainer, InputField, StandAlone, InputForm, FormContainer, RightPTagTwo, LeftHalf, PTagContainer, RightHalf, PagingButton } from '../styles/authentication.styled'

export const CompleteReg2 = () => {
   return(
    <LoginContainer>
        <LeftHalf imgUrl={completeReg}></LeftHalf>
        <RightHalf>
            <PTagContainer>
                <RightPTagTwo name={"two"}>More Details about you</RightPTagTwo><br/><hr/>
                <StandAlone>KYC</StandAlone>
            </PTagContainer>
            <FormContainer>
            <RightPTagTwo name={"one"}>Next of kin</RightPTagTwo>
                <InputForm>
                    <InputField type="text" name="firstName" id="firstName" placeholder='Fullname' />
                    <InputField type="text" name="firstName" id="firstName" placeholder='Email Address' />
                    <InputField type="text" name="firstName" id="firstName" placeholder='Phone Number' />
                    <InputField type="text" name="lastName" id="lastName" placeholder="Relationship" /><br/><br/><hr/>
                    <StandAlone>BVN</StandAlone>
                    <InputField type="text" name="firstName" id="firstName" placeholder='BVN' />
                    <PagingButton>Continue</PagingButton>
                </InputForm>
            </FormContainer>
        </RightHalf>
    </LoginContainer>
  )
}
