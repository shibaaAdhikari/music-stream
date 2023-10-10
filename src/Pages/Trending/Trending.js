import React from 'react';
import TrendingSongsCardContainer from '../../Components/CardContainer/TrendingSongsCardContainer';

const Trending = () => {
  return (
    <div className="container-fluid justify-content-center" style={{ marginLeft: '3%' }}>
      <TrendingSongsCardContainer containerTitle={'Trending Songs'} />
    </div>
  );
};

export default Trending;
