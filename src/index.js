import './sass/styles.scss';

import debounce from 'lodash.debounce';
import refs from './js/refs';
import fetchCountry from './js/fetch-countries';
import showQueryResults from './js/handle-query-resuts';

refs.input.addEventListener('input', debounce(onInput, 500));
refs.clearBtn.addEventListener('click', onBtnClick);

function onInput(event) {
  const searchQuery = event.target.value;
  refs.countriesContainer.innerHTML = '';

  if (searchQuery) {
    fetchCountry(searchQuery).then(showQueryResults);
  }
}

function onBtnClick() {
  refs.input.value = '';
  refs.countriesContainer.innerHTML = '';
}
