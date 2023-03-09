import React, { Component } from "react";
import forgotPassword from '../../../../assets/image/svg/forgotPassword.svg'
import { PagingButton, LoginContainer, LeftHalf, RightHalf, SmallGrid, RightPTagTwo, InputField, InputForm, 
    FormContainer, SmallImage, SmallInnerGrid, PTagContainer, CheckInputField
} from '../styles/authentication.styled';
import LoginImage from '../../../../assets/image/svg/LoginImage.svg'

class LoginClass extends Component{
    constructor(){
        super()
        this.state={
            email: "",
            password: ""
        }
        this.handleEmailChange = this.handleEmailChange.bind(this)
    }

    handleEmailChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
        console.log(this.state.email);
    }

    handlePasswordChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
        console.log(this.state.password);
    }


    render(){
        return(
            <LoginContainer>
            <LeftHalf imgUrl={LoginImage}></LeftHalf>
            <RightHalf>
                <PTagContainer>
                    <RightPTagTwo name={"one"}>Welcome Back!</RightPTagTwo>
                    <RightPTagTwo name={"two"}>Log in to your Dashboard</RightPTagTwo>
                </PTagContainer>
                <FormContainer>
                    <InputForm>
                        <InputField value={this.state.email} onChange={this.handleEmailChange} type="email" name="email" id="email" placeholder='Email' />
                        <InputField value={this.state.password} onChange={this.handlePasswordChange.bind(this)} type="password" name="password" id="password" placeholder='Password' />
                        <SmallGrid>
                            <SmallInnerGrid>
                                <CheckInputField type="checkbox" name="remember" id="remember" />
                                <RightPTagTwo name={"two"}>Remember Me</RightPTagTwo>
                            </SmallInnerGrid>
                            <SmallInnerGrid>
                                <SmallImage src={forgotPassword} alt="Forgot password" />
                                <RightPTagTwo name={"two"}>Forgot Password</RightPTagTwo>
                            </SmallInnerGrid>
                        </SmallGrid>
                        <PagingButton>Login</PagingButton>
                    </InputForm>
                </FormContainer>
            </RightHalf>
        </LoginContainer>
        )
    }
}

export default LoginClass;