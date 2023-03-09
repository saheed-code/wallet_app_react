import React from 'react'
import { useNavigate } from "react-router-dom"
import completeReg from '../../../../assets/image/svg/completeReg.svg'
import { LoginContainer, InputField, StandAlone, InputForm, FormContainer, RightPTagTwo, LeftHalf, PTagContainer, RightHalf, PagingButton } from '../styles/authentication.styled'

export const CompleteReg = () => {
   return(
    <LoginContainer>
        <LeftHalf imgUrl={completeReg}></LeftHalf>
        <RightHalf>
            <PTagContainer>
                <RightPTagTwo name={"two"}>Kindly complete your registration</RightPTagTwo><br/><hr/>
                <StandAlone>KYC</StandAlone>
            </PTagContainer>
            <FormContainer>
            <RightPTagTwo name={"one"}>Select a Form of Identification</RightPTagTwo>
                <InputForm>
                    <InputField type="text" name="firstName" id="firstName" placeholder='NIN' />
                    <InputField type="text" name="lastName" id="lastName" placeholder="Home Address" /><br/><br/><hr/>
                    <StandAlone>Add Cards</StandAlone>
                    <InputField type="text" name="firstName" id="firstName" placeholder='Card Name' />
                    <InputField type="text" name="lastName" id="lastName" placeholder="Card Number" />
                    <InputField type="text" name="firstName" id="firstName" placeholder='Exp. Date' />
                    <InputField type="text" name="lastName" id="lastName" placeholder="CVV" />
                </InputForm>
            </FormContainer>
        </RightHalf>
    </LoginContainer>
  )
}
