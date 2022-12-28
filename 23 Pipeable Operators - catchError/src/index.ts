import { EMPTY, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const failingHttpRequest$ = new Observable((subscriber) => {
  setTimeout(() => {
    subscriber.error(new Error('Timeout Error'));
  }, 3000);
});

console.log('App started');

failingHttpRequest$.pipe(catchError((err) => of(err.message))).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed'),
});
