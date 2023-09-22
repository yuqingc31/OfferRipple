import {
  FilterBarContainer,
  Form,
  TitleContent,
  SelectFieldContainer,
  CheckboxContainer,
  CustomTextField,
  TickBox,
  LabelSpan,
  TickLabel,
  FilterBtn,
} from './FilterBar.styles';
import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import { getLocation } from '../../../api/getGeoLocation/getGeoLocation';
import { Post } from '../../../pages/Home/LandingPage/LandingPage';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthState } from '../../../reducers/tokenReducer';
import { useSelector } from 'react-redux';
import CATAGORY_DATA from '../../../assets/Docs/CATAGORY_DATA';

export interface FilterBarProps {
  loaded: boolean;
  postList: Post[];
  totalPages: number;
  page: number;
  searched: boolean;
  searchCount: number;
  setLoaded: Dispatch<SetStateAction<boolean>>;
  setPostList: Dispatch<SetStateAction<Post[]>>;
  setTotalPages: Dispatch<SetStateAction<number>>;
  setPage: Dispatch<SetStateAction<number>>;
  setSearched: Dispatch<SetStateAction<boolean>>;
  setSearchCount: Dispatch<SetStateAction<number>>;
}

interface LocationData {
  postcode: string;
  suburb: string;
  state: string;
  lat: string;
  lon: string;
}

const FilterBar = ({
  setLoaded,
  setPostList,
  setTotalPages,
  page,
  setSearched,
  searchCount,
  setSearchCount,
}: FilterBarProps) => {
  //resize for responsive
  const [width, setWidth] = useState<string>('220px');
  //get postal code once page loading
  const [geoInfo, setGeoInfo] = useState<string>('');
  //Current location checkbox
  const [checkCurrent, setCheckCurrent] = useState<boolean>(false);
  //My subscription checkbox
  const [checkSubscription, setCheckSubscription] = useState<boolean>(false);
  //Key words search Input
  const [customTextField, setCustomTextField] = useState<string>('');
  //Category select input
  const [formSelect, setFormSelect] = useState<string>('Food and Beverage');
  //Suburb search autocomplete input
  const [selectedValue, setSelectedValue] = useState<LocationData | null>(null);
  const [searchValue, setSearchValue] = useState('');
  const [postCodeLoading, setPostCodeLoading] = useState(false);
  const [options, setOptions] = useState([]);

  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'https://dev-api.offerripple.com';
  const navigate = useNavigate();
  const id = useSelector((state: AuthState) => state.auth.id);
  const token = useSelector((state: AuthState) => state.auth.token);
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  //resize for responsive
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 767) {
        setWidth('300px');
      } else if (window.innerWidth < 1024) {
        setWidth('500px');
      } else {
        setWidth('220px');
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  //Key words search Input
  const handleCustomTextField = (value: string) => {
    setCustomTextField(value);
  };

  //Category select input
  const handleFormSelect = (value: string) => {
    setFormSelect(value);
  };

  //Suburb search autocomplete input
  const handleAutocompleteChange = (newValue: LocationData | null) => {
    if (newValue !== null) {
      setSelectedValue(newValue);
    } else {
      setSelectedValue(null);
    }
  };

  const fetchOptions = async (searchTerm: string) => {
    try {
      const response = await fetch(
        `${BACKEND_URL}/api/v1/postcode-search?search=${searchTerm}&page=1`
      );
      const data = await response.json();
      setOptions(data);
      setPostCodeLoading(true);
    } catch (error) {
      console.error('Error fetching options:', error);
    }
    setPostCodeLoading(false);
  };

  useEffect(() => {
    fetchOptions(searchValue);
  }, [searchValue, postCodeLoading]);

  //Current location checkbox
  const handleCheckCurrent = () => {
    if (checkCurrent) {
      setCheckCurrent(false);
    } else {
      setCheckCurrent(true);
    }
  };

  //My subscription checkbox
  const handleCheckSubscription = () => {
    if (checkSubscription) {
      setCheckSubscription(false);
    } else {
      setCheckSubscription(true);
    }
  };

  const setLocalStorageWithExpiration = (key: string, value: string, expirationMinutes: number) => {
    const expirationTimestamp = Date.now() + expirationMinutes * 60 * 1000;
    const data = {
      value,
      expirationTimestamp,
    };
    localStorage.setItem(key, JSON.stringify(data));
  };

  const getLocalStorageWithExpiration = (key: string) => {
    const rawData = localStorage.getItem(key);
    if (rawData) {
      const data = JSON.parse(rawData);
      if (data.expirationTimestamp && data.expirationTimestamp > Date.now()) {
        return data.value;
      } else {
        localStorage.removeItem(key);
      }
    }
    return null;
  };

  // get GeoLocation once page loading
  useEffect(() => {
    const cachedGeoInfo = getLocalStorageWithExpiration('cachedGeoInfo');
    if (cachedGeoInfo) {
      setGeoInfo(JSON.parse(cachedGeoInfo));
    } else {
      const updateCurrentPostCode = async () => {
        try {
          const geo = await getLocation();
          setGeoInfo(geo);
          setLocalStorageWithExpiration('cachedGeoInfo', JSON.stringify(geo), 360);
          // console.log(geo);
        } catch (error) {
          console.log(error);
        }
      };
      updateCurrentPostCode();
    }
  }, []);

  useEffect(() => {
    if (checkCurrent) {
      const cachedGeoInfo = getLocalStorageWithExpiration('cachedGeoInfo');
      if (cachedGeoInfo) {
        setGeoInfo(JSON.parse(cachedGeoInfo));
      } else {
        const updateCurrentPostCode = async () => {
          try {
            const geo = await getLocation();
            setGeoInfo(geo);
            setLocalStorageWithExpiration('cachedGeoInfo', JSON.stringify(geo), 360);
            // console.log(geo);
          } catch (error) {
            console.log(error);
          }
        };
        updateCurrentPostCode();
      }
    }
  }, [checkCurrent]);

  // get post list data
  useEffect(() => {
    const postData = {
      customTextField,
      formSelect,
      selectedValue,
      checkCurrent,
      checkSubscription,
      page,
      geoInfo,
      id,
    };
    setLoaded(false);
    //don't execute on page loading
    if (searchCount !== 0 && !checkSubscription) {
      try {
        axios
          .post(`${BACKEND_URL}/api/v1/posts/filter`, postData)
          .then((res) => {
            setTotalPages(res.data.totalPages);
            setPostList(res.data.slicedPosts);
          })
          .then(() => {
            setLoaded(true);
          });
      } catch (error) {
        setLoaded(false);
        console.error('Error:', error);
      }
    }
    if (searchCount !== 0 && checkSubscription) {
      try {
        axios
          .post(`${BACKEND_URL}/api/v1/posts/filter/subscribe`, postData, {
            headers: headers,
          })
          .then((res) => {
            setTotalPages(res.data.totalPages);
            setPostList(res.data.slicedPosts);
          })
          .then(() => {
            setLoaded(true);
          })
          .catch((error) => {
            navigate('/login');
            // if no valid token, catch error response 401
            if (error.response && error.response.status === 400) {
              setLoaded(false);
            } else {
              console.error('Error:', error);
            }
          });
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }, [searchCount, page, geoInfo]);

  const handleSearch = () => {
    setSearched(true);
    setSearchCount(searchCount + 1);
  };

  return (
    <FilterBarContainer>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <TitleContent>
          <h1>
            Get Lastest Saving Infomation, <br />
            in ONE click
          </h1>
          <h3>We serve Australia locally</h3>
        </TitleContent>
        <SelectFieldContainer>
          <CustomTextField
            placeholder="Key words"
            id="outlined-search"
            type="search"
            sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
            onChange={(e) => {
              handleCustomTextField(e.target.value);
              if (customTextField === '') {
                return;
              }
              console.log('CustomTextField: ' + e.target.value);
            }}
            value={customTextField}
          ></CustomTextField>

          <FormControl
            style={{
              width: width,
              height: '3.5rem',
              backgroundColor: '#5092e3',
              border: 'none',
              outline: 'none',
              borderRadius: '0 0 0 0',
              color: '#e3e3e3',
              opacity: '1',
              appearance: 'none',
            }}
          >
            <Select
              sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
              style={{
                color: '#e3e3e3',
                opacity: '1',
                appearance: 'none',
              }}
              MenuProps={{
                disableScrollLock: true,
                style: {
                  maxHeight: 300,
                },
              }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formSelect}
              onChange={(e) => {
                handleFormSelect(e.target.value);
                console.log('Form Select: ' + e.target.value);
              }}
            >
              {CATAGORY_DATA.map((data) => {
                return (
                  <MenuItem key={data} value={data}>
                    {data}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <Autocomplete
            style={{
              width: width,
              height: '3.5rem',
              backgroundColor: '#5092e3',
              border: 'none',
              outline: 'none',
              color: '#e3e3e3',
              opacity: '1',
              appearance: 'none',
            }}
            disablePortal
            id="combo-box-demo"
            options={options}
            getOptionLabel={(option) => `${option.suburb}, ${option.state} ${option.postcode}`}
            value={selectedValue}
            onChange={(event, newValue) => handleAutocompleteChange(newValue)}
            ListboxProps={{ style: { maxHeight: '12rem' } }}
            renderInput={(params) => (
              <TextField
                placeholder="Enter suburb to find"
                {...params}
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                autoComplete="off"
                sx={{
                  boxShadow: 'none',
                  '.MuiOutlinedInput-notchedOutline': { border: 0 },
                  input: {
                    color: '#e3e3e3',
                  },
                }}
              />
            )}
          />

          <FilterBtn type="submit">
            <span>
              <SearchIcon />
              Search
            </span>
          </FilterBtn>
        </SelectFieldContainer>

        <CheckboxContainer>
          <TickLabel>
            <TickBox type="checkbox" checked={checkCurrent} onChange={handleCheckCurrent}></TickBox>
            <LabelSpan>Current Location</LabelSpan>
          </TickLabel>
          <TickLabel>
            <TickBox
              type="checkbox"
              checked={checkSubscription}
              onChange={handleCheckSubscription}
            ></TickBox>
            <LabelSpan>My Subscriptions</LabelSpan>
          </TickLabel>
        </CheckboxContainer>
      </Form>
    </FilterBarContainer>
  );
};

export default FilterBar;
