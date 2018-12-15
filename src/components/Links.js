import React from 'react';
import { Link } from 'react-router-dom';

const Links = props => {
  const { link = '' } = props;
  return (
    <div>
      <Link to={link}>{link}</Link>
    </div>
  );
};

export default Links;
