import { forkJoin } from 'rxjs';
// Mike is from New Delhi and likes to eat pasta.

import { ajax } from 'rxjs/ajax';

const randomName$ = ajax('https://random-data-api.com/api/name/random_name');

const randomNation$ = ajax(
  'https://random-data-api.com/api/nation/random_nation'
);

const randomFood$ = ajax('https://random-data-api.com/api/food/random_food');

forkJoin([randomName$, randomNation$, randomFood$]).subscribe(
  ([nameAjax, nationAjax, foodAjax]) =>
    console.log(
      `${nameAjax.response.first_name} is from ${nationAjax.response.capital} and likes to eat ${foodAjax.response.dish}.`
    )
);
