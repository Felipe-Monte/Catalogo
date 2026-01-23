
const CategoryIcon = ({ iconName, altText }) => {
  return (
    <img src={`/icons/${iconName}.png`} alt={altText} width="20" height="20" />
  );
};

export default CategoryIcon;
