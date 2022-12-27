import { of } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

of(1, 12, 8, 17, 3)
  .pipe(
    filter((value) => value > 10),
    map((value) => value * 2),
    tap({
      next: (value) => console.log('Spy:', value),
    })
  )
  .subscribe((value) => console.log('Output:', value));
