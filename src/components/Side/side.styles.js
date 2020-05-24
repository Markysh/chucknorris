import styled from "styled-components";
import { mediaMobile, mediaTablet } from "../../mediaBreakpointsMixin";

export const TabletBackground = styled.div`
  ${mediaTablet(`
    display: flex;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: scroll;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
  `)}
`;

export const Container = styled.div`
  width: 40%;
  min-height: 100%;
  background-color: #f8f8f8;
  padding: 0 40px;

  ${mediaTablet(`
    width: 60%;
    padding-top: 90px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: scroll;
    box-sizing: border-box;
  `)}

  ${mediaMobile(`
    width: 100%;
    padding-top: 90px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    overflow: scroll;
    box-sizing: border-box;
  `)}
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
