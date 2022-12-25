import { Observable } from 'rxjs';

const observable$ = new Observable<string>((subscriber) => {
  console.log('Observable executed');
});

console.log('Before subscribe');
observable$.subscribe((value) => console.log(value));
console.log('After subscribe');
