import PropTypes from 'prop-types';
import { Container } from './styles';
export function HeaderDetails({ title }) {
  return (
    <Container>
      <div className="container-title">
        <h1>{title}</h1>
      </div>
    </Container>
  );
}

HeaderDetails.propTypes = {
  title: PropTypes.string,
};
