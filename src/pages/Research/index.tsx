import {Helmet} from "react-helmet";
import * as React from "react";
import Banner from "./Banner";
import Info from "./Info";
import FundingOpportunity from "./FundingOpportunity";
import VacantPositions from "./VacantPositions";

const Research = () => {
  return (
    <>
      <Helmet>
        <title>NEST Research Academy</title>
      </Helmet>
      <Banner/>
      <Info />
      <FundingOpportunity/>
      <VacantPositions/>
    </>
  )
}

export default Research