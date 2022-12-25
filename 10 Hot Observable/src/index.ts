import { Observable } from 'rxjs';

const helloButton = document.querySelector('button#hello');

const helloClick$ = new Observable<MouseEvent>((subscriber) => {
  helloButton.addEventListener('click', (event: MouseEvent) => {
    subscriber.next(event);
  });
});

console.log('Subscription 1 starts');
helloClick$.subscribe((event) =>
  console.log('Sub 1:', event.type, event.x, event.y)
);

setTimeout(() => {
  console.log('Subscription 2 starts');
  helloClick$.subscribe((event) =>
    console.log('Sub 2:', event.type, event.x, event.y)
  );
}, 3000);

setTimeout(() => {
  console.log('Subscription 3 starts');
  helloClick$.subscribe((event) =>
    console.log('Sub 3:', event.type, event.x, event.y)
  );
}, 6000);
