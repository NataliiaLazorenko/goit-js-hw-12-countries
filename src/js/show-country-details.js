import refs from './refs';
import countryDetails from '../templates/countryDetails.hbs';

function showCountryDetails(data) {
  const countryMarkup = countryDetails(data[0]);
  refs.countriesContainer.insertAdjacentHTML('beforeend', countryMarkup);
}

export default showCountryDetails;
