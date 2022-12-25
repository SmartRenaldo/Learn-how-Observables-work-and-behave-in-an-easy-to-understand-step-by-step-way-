import { Observable } from 'rxjs';

const observable$ = new Observable<string>((subscriber) => {
  console.log('Observable executed');
  subscriber.next('Apple');
  subscriber.next('Banana');
  setTimeout(() => {
    subscriber.next('Cherry');
  }, 2000);
});

console.log('Before subscribe');
observable$.subscribe((value) => console.log(value));
console.log('After subscribe');
