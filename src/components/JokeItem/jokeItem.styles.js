import styled from "styled-components";
import favorite from "./img/favorite.png";
import favoriteSelect from "./img/favoriteSelect.png";
import message from "./img/message.png";

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 40px 40px;
  margin-bottom: 20px;
  background: #f8f8f8;
  border-radius: 20px;
`;

export const Favorite = styled.div`
  height: 17px;
  margin-bottom: 10px;
  background-image: url(${favorite});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
  cursor: pointer;
`;

export const MessageHolder = styled.div`
  display: flex;
`;

export const Message = styled.div`
  height: 40px;
  width: 40px;
  margin-right: 20px;
  background-color: white;
  border-radius: 50%;
  background-image: url(${message});
  background-size: 20px 18px;
  background-repeat: no-repeat;
  background-position: center;
`;

export const ItemHolder = styled.div`
  flex: 1;
`;

export const ItemId = styled.div`
  margin-bottom: 5px;
  font-size: 10px;
  line-height: 14px;
  color: #ababab;
`;

export const ItemText = styled.div`
  margin-bottom: 23px;
  font-size: 18px;
  line-height: 26px;
  color: #333333;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ItemUpdate = styled.div`
  font-size: 10px;
  line-height: 14px;
  color: #ababab;
`;

export const ItemCategory = styled.div`
  padding: 6px 20px;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #333333;
  background-color: white;
  border-radius: 6px;
`;
