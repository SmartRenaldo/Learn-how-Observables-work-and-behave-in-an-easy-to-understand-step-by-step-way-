import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

interface AdType {
  category: 'Business' | 'Sports';
  content: string;
}

const newsFeed$ = new Observable<AdType>((subscriber) => {
  setTimeout(
    () => subscriber.next({ category: 'Business', content: 'A' }),
    1000
  );
  setTimeout(() => subscriber.next({ category: 'Sports', content: 'B' }), 2000);
  setTimeout(
    () => subscriber.next({ category: 'Business', content: 'C' }),
    3000
  );
  setTimeout(() => subscriber.next({ category: 'Sports', content: 'D' }), 5000);
  setTimeout(
    () => subscriber.next({ category: 'Business', content: 'E' }),
    6500
  );
});

const sportsNewsFeed$ = newsFeed$.pipe(
  filter((item) => item.category === 'Sports')
);

newsFeed$.subscribe((item) => console.log(item));
