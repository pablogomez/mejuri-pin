import styled from "styled-components";

const Heart = styled.span<{ active: boolean }>`
  z-index: 2;
  width: 76px;
  height: 64px;
  background-image: url("./love_icon.png");
  background-repeat: no-repeat;
  background-position: center;
  display: block;
  cursor: pointer;
  opacity: ${(props) => (props.active ? "1" : "0.2")};
  margin: 15px auto;
  box-shadow: 0 0 0 rgba(255, 0, 0, 0.8);

  border-radius: 50%;
  &:hover {
    animation: pulse 0.7s infinite;
  }
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.8);
    }
    70% {
      box-shadow: 0 0 0 10px rgba(255, 0, 0, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(255, 0, 0, 0);
    }
  }
`;

export default Heart;
