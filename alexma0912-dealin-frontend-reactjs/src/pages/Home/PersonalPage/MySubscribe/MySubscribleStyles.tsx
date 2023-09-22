import styled from 'styled-components';

const SubscribeItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 8rem;
  width: 100%;
  border-radius: 10px;
  margin-bottom: 3rem;
  box-sizing: border-box;
  /* box-shadow: 0px 0.125rem 0.375rem 0px rgba(0, 0, 0, 0.1); */
  @media (max-width: 767px) {
    /* 添加移动设备断点样式 */
    align-items: left;
  }
  /* 平板电脑断点样式 */
  @media (min-width: 768px) and (max-width: 1023px) {
    /* 添加平板电脑断点样式 */
    flex-direction: row;
    align-items: center;
  }
`;

const Div = styled.div`
  margin-bottom: 5rem;
  @media (max-width: 767px) {
    /* 添加移动设备断点样式 */
    margin-bottom: 0;
  }
  /* 平板电脑断点样式 */
  @media (min-width: 768px) and (max-width: 1023px) {
    /* 添加平板电脑断点样式 */
    width: 95%;
    margin: 0 auto;
    margin-bottom: 0;
  }
`;

const BusinessProfileContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
  gap: 10px;
  @media (min-width: 768px) and (max-width: 1023px) {
    /* 添加平板电脑断点样式 */
    width: 60%;
  }
`;

const SubscribeContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
  max-height: 40rem; /* Set the maximum height of the container */
  overflow-y: auto; /* Enable vertical scrollbar when content exceeds the maximum height */
  overflow-x: hidden;
  border-radius: 1.25rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  box-sizing: border-box;
  box-shadow: 0px 2px 20px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 767px) {
    /* 添加移动设备断点样式 */
    margin: 0;
    width: 100%;
    border-radius: 16px;
  }

  /* 平板电脑断点样式 */
  @media (min-width: 768px) and (max-width: 1023px) {
    /* 添加平板电脑断点样式 */
  }

  /* 桌面断点样式 */
  @media (min-width: 1024px) {
    /* 添加桌面断点样式 */
  }
`;

const SubscribeImage = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  margin-right: 5px;
  margin-left: 2rem;
  border-radius: 50%;
  @media (max-width: 767px) {
    /* 添加移动设备断点样式 */
  }

  /* 平板电脑断点样式 */
  @media (min-width: 768px) and (max-width: 1023px) {
    /* 添加平板电脑断点样式 */
    margin-left: 4rem;
  }

  /* 桌面断点样式 */
  @media (min-width: 1024px) {
    /* 添加桌面断点样式 */
  }
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 8rem;
  border-radius: 5px;
`;

const SubscribeDetails = styled.div`
  margin-right: 20px;
  flex: 1;
`;

const HeadTitle = styled.div`
  color: rgb(30, 41, 59);
  font-size: 1.2rem;
  font-weight: 600;
  margin-left: 3rem;
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;
  @media (max-width: 767px) {
    /* 添加移动设备断点样式 */
  }

  /* 平板电脑断点样式 */
  @media (min-width: 768px) and (max-width: 1023px) {
    /* 添加平板电脑断点样式 */
    margin-left: 5rem;
  }

  /* 桌面断点样式 */
  @media (min-width: 1024px) {
    /* 添加桌面断点样式 */
  }
`;

const Title = styled.span`
  display: inline-block;
  width: 12rem;
  font-size: 16px;
  margin-bottom: 5px;
  font-weight: 600;
  color: rgb(128, 128, 128);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Phone = styled.p`
  font-size: 15px;
  color: rgb(128, 128, 128);
  margin-top: 8px;
  display: flex;
  align-items: center;
`;

const SubscribeButton = styled.button<{ subscribed: boolean }>`
  margin: 0 auto;
  margin-top: 0.5rem;
  width: 65%;
  padding: 0.8rem 0.5rem;
  border-radius: 25px;
  font-size: 1rem;
  color: white;
  font-weight: bold;
  cursor: pointer;
  background-color: ${(props) => (props.subscribed ? '#f85c70' : 'grey')};
  @media (max-width: 767px) {
    /* 添加移动设备断点样式 */
  }

  /* 平板电脑断点样式 */
  @media (min-width: 768px) and (max-width: 1023px) {
    /* 添加平板电脑断点样式 */
    width: 20%;
  }

  /* 桌面断点样式 */
  @media (min-width: 1024px) {
    /* 添加桌面断点样式 */
  }
`;

export {
  SubscribeItem,
  SubscribeContainer,
  SubscribeImage,
  SubscribeDetails,
  Title,
  Div,
  Phone,
  SubscribeButton,
  BackgroundImage,
  HeadTitle,
  BusinessProfileContainer,
};
