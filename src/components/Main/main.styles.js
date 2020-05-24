import styled from "styled-components";
import {mediaMobile, mediaTablet} from "../../mediaBreakpointsMixin";

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const Content = styled.div`
  width: 60%;
  margin: 40px 140px 0 140px;
  
  ${mediaTablet(`
    width: 100%;
    margin: 40px 40px 0 40px;
  `)}
  
  ${mediaMobile(`
    width: 100%;
    margin: 20px 20px 0 20px; 
  `)}
`;

export const Holder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 75px;
`;

export const Name = styled.div`
  font-size: 20px;
  line-height: 28px;
  font-weight: bold;
  color: #333333;
`;

export const Title = styled.div`
  font-size: 32px;
  line-height: 44px;
  font-weight: bold;
  color: #333333;
`;

export const Subtitle = styled.div`
  margin-bottom: 40px;
  font-size: 24px;
  line-height: 44px;
  font-weight: 500;
  color: #333333;
`;

export const CheckboxText = styled.div`
  margin-left: 15px;
  color: #333333;
`;

export const Button = styled.button`
  padding: 10px 40px;
  margin-top: 30px;
  margin-bottom: 40px;
  font-size: 16px;
  color: white;
  border: none;
  border-radius: 10px;
  background: linear-gradient(92.01deg, #8ea7ff 0%, #7291ff 100%);
  outline: none;
  cursor: pointer;
`;
