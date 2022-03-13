import { fromEvent, map, Subject } from "rxjs";

// "example name" --> "ExampleName"
// "your-NaMe-here" --> "YourNameHere"
// "testing ABC" --> "TestingAbc"

const data$: Subject<string[]> = new Subject();
const btnElement = document.querySelector('.btn');


fromEvent(btnElement!, 'click')
  .subscribe(() => {data$.next(['example name'])});

data$
  .pipe(
    map(data => {
      const item: string = data[0];
      const itemData: string[] = item.split(' ');
      let firstFinalResult: string = '';

      for (let stringElement of itemData) {
        const bigLetter: string = stringElement[0].toUpperCase();

        if (stringElement[0] !== bigLetter) {
          firstFinalResult += bigLetter + stringElement.slice(1, stringElement.length);
        }
      }

      return firstFinalResult;
    }),
  ).subscribe(data => {
    console.log(data);
  });