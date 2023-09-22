import PageContent from '../../../components/PageContent';
import PageHeader from '../../../components/PageHeader';
import FilterBar from '../../../components/PageContent/FilterBar';
import { useState, useEffect } from 'react';
import SmoothScroll from 'smooth-scroll';
import { Helmet } from 'react-helmet';

export interface Post {
  _id: string;
  author: {
    _id: string;
    avatar: string;
    username: string;
  };
  image: string[];
  promotion_end_date: string;
  title: string;
  category: string;
  business_address: string;
  discount: number;
  content: string;
  created_at: string;
}

const LandingPage = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [searched, setSearched] = useState<boolean>(false);
  const [searchCount, setSearchCount] = useState<number>(0);
  const [postList, setPostList] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (searchCount >= 0) {
      const scroll = new SmoothScroll();
      scroll.animateScroll(window.innerHeight - 80);
    }
  }, [searchCount]);

  return (
    <div>
      <Helmet>
        <title>OfferRipple</title>
        <meta name="description" content="OfferRipple Index Page" />
        <meta
          name="keywords"
          content="OfferRipple, Australian local discount, promotion event and money saving information"
        />
        <meta property="og:type" content="index" />
        <meta property="og:title" content="OfferRipple" />
        <meta property="og:author" content="OfferRipple Team" />
        <meta property="og:url" content="https://www.offerripple.com" />
        <meta property="og:category" content="OfferRipple index" />
        <meta property="og:site_name" content="OfferRipple" />
        <meta
          property="og:tag"
          content="Sydney discount, business promotion, money saving information"
        />
        <meta
          property="og:description"
          content="Get latest saving information in your Suburb and nearby"
        />
      </Helmet>
      <PageHeader />
      <FilterBar
        setLoaded={setLoaded}
        loaded={loaded}
        postList={postList}
        setPostList={setPostList}
        totalPages={totalPages}
        setTotalPages={setTotalPages}
        page={page}
        setPage={setPage}
        searched={searched}
        setSearched={setSearched}
        searchCount={searchCount}
        setSearchCount={setSearchCount}
      />
      {searched ? (
        <PageContent
          setLoaded={setLoaded}
          loaded={loaded}
          postList={postList}
          setPostList={setPostList}
          totalPages={totalPages}
          setTotalPages={setTotalPages}
          page={page}
          setPage={setPage}
          searched={searched}
          setSearched={setSearched}
          searchCount={searchCount}
          setSearchCount={setSearchCount}
        />
      ) : null}
    </div>
  );
};

export default LandingPage;
