import refs from './refs';
import countriesList from '../templates/countriesList.hbs';

function showCountriesList(data) {
  const countriesListMarkup = countriesList(data);
  refs.countriesContainer.insertAdjacentHTML('beforeend', countriesListMarkup);
}

export default showCountriesList;
