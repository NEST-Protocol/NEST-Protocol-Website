import * as React from 'react'
import {Helmet} from 'react-helmet'
import Banner from "./Banner";
import LatestNews from "./LatestNews";

const News = () => {
  return (
    <>
      <Helmet>
        <title>NEST News</title>
      </Helmet>
      <Banner/>
      <LatestNews/>
    </>
  )
}

export default News