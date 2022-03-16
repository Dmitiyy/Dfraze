import { fromEvent, map, take, Observable, Subject, switchMap } from "rxjs";
import workWithCanvas from "./canvas";

const btnElement = document.querySelector('.btn');
const data$: Subject<string[]> = new Subject();
const passedData: string = 'your-name-Here';
let firstFinalResult: string = '';

const isDash$: Observable<{active: Boolean, text: string}> = new Observable(subscriber => {
  if (passedData.includes('-')) {
    subscriber.next({active: true, text: passedData});
  } else {
    subscriber.next({active: false, text: firstFinalResult});
  }
});

fromEvent(btnElement!, 'click')
  .subscribe(() => {data$.next([passedData])});

const transformText = (text: string, active: Boolean): string => {
  const stringData: string[] = text.split(!active ? ' ' : '-');
  let result: string = '';

  for (let item of stringData) {
    if (item.length !== 0) {
      const endOfWord: string = item.slice(1, item.length).toLowerCase();
      result += item[0].toUpperCase() + endOfWord;
    }
  }

  if (!active) {firstFinalResult = result};
  return result;
}

data$
  .pipe(
    map(data => {return transformText(data[0], false)}),
    switchMap(() => {return isDash$}),
    take(1)
  ).subscribe(data => {
    let result: string = '';
    if (data.active) {result = transformText(data.text, true)} 
    
    else {result = data.text};
    document.querySelector('h3')!.textContent = result;
  });

workWithCanvas();