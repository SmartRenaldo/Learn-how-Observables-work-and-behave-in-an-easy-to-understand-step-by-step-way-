import { Observable } from 'rxjs';

const observable$ = new Observable<string>((subscriber) => {
  console.log('Observable executed');
  subscriber.next('Apple');
  subscriber.next('Banana');
  setTimeout(() => {
    subscriber.next('Cherry');
  }, 2000);
  setTimeout(() => {
    subscriber.error(new Error('Database connected error'));
  }, 4000);

  return () => {
    console.log('Teardown');
  };
});

console.log('Before subscribe');
observable$.subscribe({
  next: (value) => console.log(value),
  error: (err) => console.log(err.message),
  complete: () => console.log('Completed'),
});
console.log('After subscribe');
