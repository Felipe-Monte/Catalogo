import PropTypes from 'prop-types';

const CategoryIcon = ({ iconName, altText }) => {
  return (
    <img src={`/icons/${iconName}.png`} alt={altText} width="20" height="20" />
  );
};

CategoryIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
  altText: PropTypes.string,
};

export default CategoryIcon;
