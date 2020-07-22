import React from 'react';
import { Titulo } from './style';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
  return <Titulo>{title}</Titulo>;
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
