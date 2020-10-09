import styled from "styled-components";

const Image = styled.img<{ visible: number; secondary?: boolean }>`
  opacity: ${(props) => props.visible};

  ${({ secondary }) =>
    secondary &&
    `position: absolute;
    left: 0;
    top: 2px;
    transition: opacity 0.1s ease-out;
    &:hover {
      opacity: 1;
    }
    `}
`;

export default Image;
