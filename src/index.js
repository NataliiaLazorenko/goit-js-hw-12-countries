import './sass/styles.scss';
import showNotification from './js/notification.js';

import debounce from 'lodash.debounce';
import countriesList from './templates/countriesList.hbs';
import countryDetails from './templates/countryDetails.hbs';

const refs = {
  input: document.querySelector('.js-searchQuery'),
  countriesContainer: document.querySelector('.js-countriesContainer'),
  clearBtn: document.querySelector('.js-clear-button'),
};

refs.input.addEventListener('input', debounce(onInput, 500));

function onInput(event) {
  const inputText = event.target.value;

  refs.countriesContainer.textContent = '';
  searchCountry(inputText);
}

function searchCountry(inputText) {
  console.log(inputText);

  fetch(`https://restcountries.eu/rest/v2/name/${inputText}`)
    .then(response => response.json())
    .then(data => {
      const numberOfCountries = data.length;
      // console.log(numberOfCountries);

      if (numberOfCountries > 10) {
        const infoMessage =
          'Too many matches found. Please enter a more specific query!';
        const type = 'info';
        showNotification(infoMessage, type);
        return;
      }
      if ((numberOfCountries > 2) & (numberOfCountries <= 10)) {
        const countriesListMarkup = countriesList(data);

        refs.countriesContainer.insertAdjacentHTML(
          'beforeend',
          countriesListMarkup,
        );
        return;
      }
      if (numberOfCountries === 1) {
        const countryMarkup = countryDetails(data[0]);
        refs.countriesContainer.insertAdjacentHTML('beforeend', countryMarkup);
        return;
      } else {
        const errorMessage = 'Matches not found. Please adjust your request';
        const type = 'error';
        showNotification(errorMessage, type);
      }
    })
    .catch(error => console.log(error));
}

refs.clearBtn.addEventListener('click', () => {
  refs.input.value = '';
  refs.countriesContainer.textContent = '';
});
