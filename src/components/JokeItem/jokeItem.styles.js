import styled from "styled-components";
import favorite from "./img/favorite.png";
import favoriteSelect from "./img/favoriteSelect.png";
import message from "./img/message.png";
import link from "./img/link.png";
import { mediaMobile } from "../../mediaBreakpointsMixin";

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 40px 40px;
  margin-bottom: 20px;
  background: ${(props) => (props.theme === "light" ? "#ffffff" : "#f8f8f8")};
  border-radius: 20px;
  box-shadow: ${(props) =>
    props.theme === "light" ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none"};

  ${mediaMobile(`
    padding: 20px 20px;
  `)}
`;

export const Favorite = styled.div`
  height: 17px;
  margin-bottom: 10px;
  background-image: url(${favoriteSelect});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
  cursor: pointer;
`;

export const NotFavorite = styled.div`
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
  background-color: ${(props) =>
    props.theme === "light" ? "#F8F8F8" : "#ffffff"};
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
  display: flex;
  align-items: baseline;
  margin-bottom: 5px;
  font-size: 10px;
  line-height: 14px;
`;

export const Id = styled.div`
  margin-right: 3px;
  color: #ababab;
`;

export const Link = styled.a`
  color: #8ea7ff;
  cursor: pointer;
`;

export const LinkIcon = styled.a`
  width: 10px;
  height: 10px;
  margin-left: 3px;
  background-image: url(${link});
  background-repeat: no-repeat;
  background-size: contain;
  color: #8ea7ff;
  cursor: pointer;
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

  ${mediaMobile(`
    flex-direction: column;
    align-items: baseline;
  `)}
`;

export const ItemUpdate = styled.div`
  font-size: 10px;
  line-height: 14px;
  color: #ababab;

  ${mediaMobile(`
    margin-bottom: 10px;
  `)}
`;

export const ItemCategory = styled.div`
  padding: 6px 20px;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #333333;
  background-color: ${(props) =>
    props.theme === "light" ? "#F8F8F8" : "#ffffff"};
  border-radius: 6px;
`;
