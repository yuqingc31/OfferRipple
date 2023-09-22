import { NewAdsWrapper, NewAdsButton } from './StyledNewAds';
import AddIcon from '@mui/icons-material/Add';

interface CoinsButtonProps {
  onPostAdClick: () => void;
}

const CoinsButton: React.FC<CoinsButtonProps> = ({ onPostAdClick }) => {
  return (
    <NewAdsWrapper>
      <NewAdsButton onClick={onPostAdClick}>
        <AddIcon sx={{ fontSize: 20, marginRight: 0.5 }} />
        Submit Ads
      </NewAdsButton>
    </NewAdsWrapper>
  );
};

export default CoinsButton;
