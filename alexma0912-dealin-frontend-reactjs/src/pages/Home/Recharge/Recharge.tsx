import { useState, useEffect } from 'react';
import { Div, InputSection, FormContainer } from './styledRecharge';
import SubpageTopImage from '../../../components/SubpageTopImage';
import RechargeTitle from './RechargeTitle/RechargeTitle';
import PageHeader from '../../../components/PageHeader';
import PageFooter from '../../../components/PageFooter';
import RechargeButton from './RechargeButton/RechargeButton';
import RechargeAmount from './RechargeAmount/RechargeAmount';
import axios from 'axios';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { ArrowIcon } from './styledRecharge';
import { AuthState } from '../../../reducers/tokenReducer';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

const Recharge: React.FC = () => {
  const [balance, setBalance] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [maxRechargeAmount, setMaxRechargeAmount] = useState<number>(10000);
  const [isVisible, setIsVisible] = useState(false);
  const token = useSelector((state: AuthState) => state.auth.token);
  const id = useSelector((state: AuthState) => state.auth.id);
  const userID = id;
  const jwtToken = token;
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'https://dev-api.offerripple.com';

  const headers = {
    Authorization: `Bearer ${jwtToken}`,
    'Content-Type': 'application/json',
  };

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/maxRecharge`)
      .then((res) => {
        setMaxRechargeAmount(res.data.max_recharge_amount);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    fetchBalance();
  }, []);

  const fetchBalance = async () => {
    try {
      const response = await axios
        .get(`${BACKEND_URL}/api/v1/users/me/${userID}`, { headers: headers })
        .then((res) => {
          return res.data;
        });
      const currentBalance = response.dcoin;
      setBalance(currentBalance);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition < 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const calculatePrice = (amount: number) => {
    axios
      .post(`${BACKEND_URL}/api/v1/calculateChargeAmount`, { coin_amount: amount })
      .then((res) => {
        setPrice(res.data.payment_amount);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCheckout = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post(`${BACKEND_URL}/api/v1/stripe/create-checkout-session`, {
        userId: userID,
        subTotal: price,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <Div className="pageContainer">
      <Helmet>
        <title>User Coins Recharge</title>
        <meta name="description" content="Recharge OfferRipple user coins" />
        <meta name="keywords" content="Page keywords goes here" />
        <meta property="og:type" content="recharge" />
        <meta property="og:title" content="OfferRipple recharge" />
        <meta property="og:author" content="OfferRipple Team" />
        <meta property="og:url" content="https://www.offerripple.com/recharge" />
        <meta property="og:category" content="recharge" />
        <meta property="og:site_name" content="OfferRipple" />
        <meta
          property="og:tag"
          content="Australian local discount, promotion event and money saving information"
        />
        <meta property="og:description" content="Recharge OfferRipple user coins" />
      </Helmet>
      <PageHeader />
      <SubpageTopImage lgText={'Recharge Your Coins'} smText={'Coins used for posting ads'} />
      <FormContainer className="formContainer" onSubmit={handleCheckout}>
        <InputSection>
          <RechargeTitle balance={balance} />
        </InputSection>
        <InputSection>
          <RechargeAmount
            rechargeLimit={maxRechargeAmount}
            onAmountChange={calculatePrice}
            price={price}
          />
        </InputSection>
        <RechargeButton />
      </FormContainer>
      {isVisible && (
        <ArrowIcon
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
          }}
        >
          <ArrowUpwardIcon sx={{ fontSize: '32px' }} />
        </ArrowIcon>
      )}
      <PageFooter />
    </Div>
  );
};

export default Recharge;
