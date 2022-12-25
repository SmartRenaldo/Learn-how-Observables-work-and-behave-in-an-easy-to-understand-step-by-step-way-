import { Observable } from 'rxjs';

const observable$ = new Observable<string>((subscriber) => {
  console.log('Observable executed');
  subscriber.next('Apple');
  subscriber.next('Banana');
  setTimeout(() => {
    subscriber.next('Cherry');
    subscriber.complete();
  }, 2000);

  return () => {
    console.log('Teardown');
  };
});

console.log('Before subscribe');
const subscriber = observable$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed'),
});
console.log('After subscribe');

setTimeout(() => {
  subscriber.unsubscribe();
}, 2000);
