import showNotification from './notification';
import showCountriesList from './show-countries-list';
import showCountryDetails from './show-country-details';

function showQueryResults(data) {
  const numberOfCountries = data.length;

  if (numberOfCountries > 10) {
    const infoMessage =
      'Too many matches found. Please enter a more specific query!';
    const type = 'info';

    showNotification(infoMessage, type);
  } else if ((numberOfCountries >= 2) & (numberOfCountries <= 10)) {
    showCountriesList(data);
  } else if (numberOfCountries === 1) {
    showCountryDetails(data);
  } else {
    const errorMessage = 'Matches not found. Please adjust your request';
    const type = 'error';

    showNotification(errorMessage, type);
  }
}

export default showQueryResults;
