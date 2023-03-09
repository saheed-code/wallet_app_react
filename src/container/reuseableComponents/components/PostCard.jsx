import React from 'react';
import { CardContainer, SmallGrid, SmallerPtag, PTagContainer } from '../../pages/auth/styles/authentication.styled';

const PostCard = (props) => {
  return (
    <CardContainer>
      <SmallGrid>
        <SmallerPtag>{props.userId}</SmallerPtag>
        <SmallerPtag>{props.id}</SmallerPtag>
      </SmallGrid>
      <PTagContainer>
        <SmallerPtag>{props.title}</SmallerPtag>
      </PTagContainer>
      <PTagContainer>
        <SmallerPtag>{props.body}</SmallerPtag>
      </PTagContainer>
    </CardContainer>
  )
}

export default PostCard
