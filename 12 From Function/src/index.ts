import { from } from 'rxjs';

console.log('from array starts');
from(['Apple', 'Banana', 'Cherry']).subscribe({
  next: (value) => console.log('from array', value),
  complete: () => console.log('from array', 'Completed'),
});
console.log('from array finished');

const somePromise = new Promise((resolve, reject) => {
  // resolve('Resolved!');
  reject('Rejected!');
});

const observableFromPromise$ = from(somePromise);

observableFromPromise$.subscribe({
  next: (value) => console.log('from Promise', value),
  error: (err) => console.log('from Promise', 'Error:', err),
  complete: () => console.log('from Promise', 'Completed'),
});
