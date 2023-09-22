import Content from './Content/Content';
import { StyledSideBar } from './styledSideBar';

const DetailPageSideBar = ({
  promotionEnd,
  publishDate,
  location,
  userAvatar,
  phoneNumber,
  email,
  signature,
  userName,
  businessUserId,
}: {
  promotionEnd: string | undefined;
  publishDate: string | undefined;
  location: string;
  userAvatar: string | undefined;
  phoneNumber: string | undefined;
  email: string | undefined;
  signature: string | undefined;
  userName: string | undefined;
  businessUserId: string | undefined;
}) => {
  return (
    <StyledSideBar>
      <Content
        promotionEnd={promotionEnd}
        publishDate={publishDate}
        location={location}
        userAvatar={userAvatar}
        phoneNumber={phoneNumber}
        email={email}
        signature={signature}
        userName={userName}
        businessUserId={businessUserId}
      />
    </StyledSideBar>
  );
};

export default DetailPageSideBar;
