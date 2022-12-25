import { Observable } from 'rxjs';

const observable$ = new Observable<string>((subscriber) => {
  console.log('Observable executed');
  subscriber.next('Apple');
  setTimeout(() => subscriber.next('Banana'), 2000);
  setTimeout(() => subscriber.next('Cherry'), 4000);
});

console.log('Subscription 1');
observable$.subscribe((value) => console.log('Subscription 1', value));

setTimeout(() => {
  console.log('Subscription 2');
  observable$.subscribe((value) => console.log('Subscription 2', value));
}, 3000);
