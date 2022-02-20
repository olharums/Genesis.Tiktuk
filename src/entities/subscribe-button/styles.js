import styled from "styled-components";

export const SubscribeButtonStyled = styled.button`
  width: 25em !important;
  height: 5em;
  border-color: #fe2c55;
  border-radius: 3px;
  transition-duration: 0.5s;
  margin: 1.5rem;

  &:hover {
    box-shadow: 0px 0px 10px #fe2c55;
  }

  &.unsubscribed {
    background-color: #fe2c55;
    color: white;
  }

  &.subscribed {
    background-color: white;
    color: #fe2c55;
  }
`;
