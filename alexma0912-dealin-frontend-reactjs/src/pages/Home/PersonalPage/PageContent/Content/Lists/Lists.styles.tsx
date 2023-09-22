import styled from 'styled-components';

export const ListContainer = styled.ul`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
  list-style: none;
  padding: 0;
  @media (max-width: 767px) {
    /* 添加移动设备断点样式 */
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
    margin-top: 0;
    grid-gap: 0px;
  }
`;

export const ListItemContainer = styled.li`
  width: 340px;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  margin-bottom: 46px;
  box-shadow: 0px 2px 20px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  @media (max-width: 767px) {
    /* 添加移动设备断点样式 */
    margin-top: 0;
    margin-bottom: 2rem;
  }
`;

export const ImageContainer = styled.div`
  width: 340px;
  height: 250px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px 0 0 8px;
  @media (max-width: 767px) {
    /* 添加移动设备断点样式 */
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
  background-color: gainsboro;
`;

export const DeadLineContainer = styled.div`
  position: absolute;
  top: 230px;
  width: 300px;
  text-align: center;
`;

export const DeadLineSpan = styled.span`
  font-size: 14px;
  font-weight: bold;
  height: 20px;
  line-height: 20px;
  background-color: #f85c70;
  color: white;
  border-radius: 15px;
  padding: 10px 20px;
`;

export const DeadLine = styled.span`
  color: white;
`;

export const ContentContainer = styled.div`
  width: 100%;
`;

export const CategoryContainer = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #808080;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #1e293b;
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 0.5rem;
  width: 100%;
  box-sizing: border-box;
  word-wrap: break-word;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* max lines */
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  @media (max-width: 767px) {
    /* 添加移动设备断点样式 */
  }
`;

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;

  @media (max-width: 767px) {
    /* 添加移动设备断点样式 */
    width: 20rem;
  }
`;

export const Location = styled.p`
  font-size: 14px;
  color: #808080;
  margin-left: 8px;
  display: flex;
  align-items: center;
`;

export const TimeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 767px) {
    /* 添加移动设备断点样式 */
    width: 20rem;
  }
`;

export const TimeStamp = styled.span`
  font-size: 14px;
  margin-left: 8px;
  display: inline-block;
  width: 170px;
  color: #808080;
  display: flex;
  align-items: center;
`;

export const TagsContainer = styled.div`
  display: flex;
  justify-content: left;
  margin-top: 10px;
  padding-left: 15px;
`;

export const AuthorSpan = styled.span`
  margin-top: 0.2rem;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 15px;
  color: #808080;
  img {
    width: 40px;
    height: 40px;
    border-radius: 25px;
  }
  @media (max-width: 767px) {
    /* 添加移动设备断点样式 */
    width: 20rem;
  }
`;

export const NameSpan = styled.span`
  width: 220px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Tag = styled.div`
  display: inline-block;
  background-color: #f85c70;
  color: white;
  font-weight: bold;
  padding: 8px 10px;
  border-radius: 16px 4px 16px 4px;
  margin: 5px;
  font-size: 14px;
  position: absolute;
  top: -5px;
  left: -5px;
  width: 100px;
  text-align: center;
`;

export default {
  ListContainer,
  ListItemContainer,
  ImageContainer,
  Image,
  DeadLineContainer,
  DeadLine,
  ContentContainer,
  CategoryContainer,
  // Category,
  Title,
  Location,
  LocationContainer,
  TimeStamp,
  TagsContainer,
  Tag,
};
