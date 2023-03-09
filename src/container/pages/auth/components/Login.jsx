import React, { useState, useEffect, useCallback } from "react";
import "../styles/Login.css";
import { useNavigate, useParams } from "react-router";
import LoginImage from "../../../../assets/image/svg/LoginImage.svg";
import {
  FormContainer,
  CardMainContainer,
  LoginContainer,
  InputField,
  SmallInnerGrid,
  SmallGrid,
  CheckInputField,
  InputForm,
  SmallImage,
  RightPTagTwo,
  RightHalf,
  PTagContainer,
  LeftHalf,
  PagingButton,
} from "../styles/authentication.styled";
import forgotPassword from "../../../../assets/image/svg/forgotPassword.svg";
import PostCard from "../../../reuseableComponents/components/PostCard";

const Login = () => {
  const { id } = useParams();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [data, setData] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/posts/1";
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // const fetchFakeData = useCallback(async () =>{
  //     await fetch(url)
  //     .then((res)=> res.json())
  //     .then((response)=> setData(response))
  //     .catch((error)=> console.log("Error -> ", error))
  // }, [])

//   async function fakeOriginalCall() {
//     await fetch(url)
//       .then((res) => res.json())
//       .then((response) => setData(response))
//       .catch((error) => console.log("Error -> ", error));
//   }

//   useEffect(() => {
//     fakeOriginalCall();
//   }, []);
//   console.log("id ->", id);

  // console.log(data[0].id);

  // async function fakeOriginalCall(){
  //     await fetch(url)
  //     .then((res)=> res.json())
  //     .then((response)=> setData(response))
  //     .catch((error)=> console.log("Error -> ", error))
  // }

  // fakeOriginalCall()
  console.log(data);

  return (
    <>
      <LoginContainer>
        <LeftHalf imgUrl={LoginImage}></LeftHalf>
        <RightHalf>
          <PTagContainer>
            <RightPTagTwo name={"one"}>Welcome Back!</RightPTagTwo>
            <RightPTagTwo name={"two"}>Log in to your Dashboard</RightPTagTwo>
          </PTagContainer>
          <FormContainer>
            <InputForm>
              <InputField
                value={email}
                onChange={(e) => handleEmailChange(e)}
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
              <InputField
                value={password}
                onChange={handlePasswordChange}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              <SmallGrid>
                <SmallInnerGrid>
                  <CheckInputField
                    type="checkbox"
                    name="remember"
                    id="remember"
                  />
                  <RightPTagTwo name={"two"}>Remember Me</RightPTagTwo>
                </SmallInnerGrid>
                <SmallInnerGrid>
                  <SmallImage src={forgotPassword} alt="Forgot password" />
                  <RightPTagTwo name={"two"}>Forgot Password</RightPTagTwo>
                </SmallInnerGrid>
              </SmallGrid>
              <PagingButton onClick={() => navigate("/signup", {state: {id:id, email: email, password: password}})}>
                Login
              </PagingButton>
            </InputForm>
          </FormContainer>
        </RightHalf>
      </LoginContainer>
      <PTagContainer>
        {data.map((post) => (
          <CardMainContainer key={post.id}>
            <PostCard
              userId={post.userId}
              id={post.id}
              title={post.title}
              body={post.body}
            />
          </CardMainContainer>
        ))}
      </PTagContainer>
    </>
  );
};

export default Login;
