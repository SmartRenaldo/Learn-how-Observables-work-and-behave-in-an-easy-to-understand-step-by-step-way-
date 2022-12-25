import { ajax } from 'rxjs/ajax';

const ajax$ = ajax<any>('https://random-data-api.com/api/v2/appliances');

ajax$.subscribe((data) => console.log('Sub 1:', data.response.brand));

ajax$.subscribe((data) => console.log('Sub 2:', data.response.brand));

ajax$.subscribe((data) => console.log('Sub 3:', data.response.brand));
