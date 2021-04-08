import styled from "styled-components";

export const ImageWrapper = styled.div`
  img {
    width: ${(props)=> props.size ? `${props.size}
    ;` : "100%;"};
  }
`;
