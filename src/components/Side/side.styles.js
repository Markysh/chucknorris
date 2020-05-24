import styled from "styled-components";
import { mediaMobile, mediaTablet } from "../../mediaBreakpointsMixin";

export const Container = styled.div`
  width: 40%;
  background-color: #f8f8f8;
  padding: 0 40px;

`;

export const Title = styled.div`
  margin-top: 40px;
  margin-left: 40px;
  margin-bottom: 20px;
  font-size: 20px;
  line-height: 28px;
  color: #ababab;

  ${mediaTablet(`
    display: none;
  `)}

  ${mediaMobile(`
    display: none;
  `)}
`;
