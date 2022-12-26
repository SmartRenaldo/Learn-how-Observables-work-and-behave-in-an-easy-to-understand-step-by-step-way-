import { Observable, of } from 'rxjs';

console.log('of starts');
of('Apple', 'Banana', 'Cherry').subscribe({
  next: (value) => console.log('of', value),
  complete: () => console.log('of', 'Completed'),
});
console.log('of finished');

console.log('Observable starts');
const names$ = new Observable<string>((subscriber) => {
  subscriber.next('Apple');
  subscriber.next('Banana');
  subscriber.next('Cherry');
  subscriber.complete();
});

names$.subscribe({
  next: (value) => console.log('Observable', value),
  complete: () => console.log('Observable', 'Completed'),
});
console.log('Observable finished');

console.log('ourOwnOf starts');
ourOwnOf('Apple', 'Banana', 'Cherry').subscribe({
  next: (value) => console.log('ourOwnOf', value),
  complete: () => console.log('ourOwnOf', 'Completed'),
});
console.log('ourOwnOf finished');

function ourOwnOf(...args: string[]): Observable<string> {
  return new Observable<string>((subscriber) => {
    for (let i = 0; i < args.length; i++) {
      subscriber.next(args[i]);
    }
    subscriber.complete();
  });
}
