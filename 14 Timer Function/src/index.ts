import { Observable, timer } from 'rxjs';

console.log('App started');

const timer$ = new Observable<number>((subscriber) => {
  const timeoutId = setTimeout(() => {
    console.log('timer$ Timeout!');
    subscriber.next(0);
    subscriber.complete();
  }, 2000);

  return () => clearTimeout(timeoutId);
});

const subscription = timer(2000).subscribe({
  next: (value) => {
    console.log(value), console.log('timer(2000) Timeout!');
  },
  complete: () => console.log('Completed'),
});

const subscription2 = timer$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed'),
});

setTimeout(() => {
  subscription.unsubscribe();
  subscription2.unsubscribe();
  console.log('Unsubscribe');
}, 1000);
