import { Observable } from 'rxjs';

const observable$ = new Observable<string>((subscriber) => {
  console.log('Observable executed');
  subscriber.next('Apple');
  setTimeout(() => subscriber.next('Banana'), 2000);
  setTimeout(() => subscriber.next('Cherry'), 4000);
});

const subscription = observable$.subscribe((value) => console.log(value));

setTimeout(() => {
  console.log('Unsubscribe');
  subscription.unsubscribe();
}, 3000);
