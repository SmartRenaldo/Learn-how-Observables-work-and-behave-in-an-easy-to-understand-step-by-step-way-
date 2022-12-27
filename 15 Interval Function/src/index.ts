import { Observable, interval } from 'rxjs';

console.log('App started');

const interval$ = new Observable<number>((subscriber) => {
  let counter = 0;

  const intervalId = setInterval(() => {
    subscriber.next(counter++);
  }, 1000);

  return () => clearInterval(intervalId);
});

const subscription = interval(1000).subscribe({
  next: (value) => {
    console.log(value), console.log('interval(1000) Timeout!');
  },
  complete: () => console.log('Completed'),
});

const subscription2 = interval$.subscribe({
  next: (value) => {
    console.log(value), console.log('interval$ Timeout!');
  },
  complete: () => console.log('Completed'),
});

setInterval(() => {
  subscription.unsubscribe();
  subscription2.unsubscribe();
  console.log('Unsubscribe');
}, 5000);
