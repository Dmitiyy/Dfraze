import { fromEvent, map, Observable, switchMap } from "rxjs";

interface IBox {
  active: Boolean;
  element: EventTarget | null;
}

function workWithCanvas() {
  const boxItems = document.querySelectorAll('.program__box-item');
  const container = document.querySelector('.program__box');

  let relativeX: number = 0;
  let relativeY: number = 0;

  const isClick: Observable<IBox> = new Observable(subscriber => {
    boxItems.forEach(box => {
      fromEvent(box, 'mouseenter').subscribe((event) => {
        subscriber.next({active: true, element: event.target});
      });
    });
  });

  fromEvent(container!, 'mousemove')
    .pipe(
      map(event => {
        const transformedEvent = event as MouseEvent;
        relativeX = transformedEvent.offsetX;
        relativeY = transformedEvent.offsetY;
        return event;
      }),
      switchMap(() => {return isClick})
    )
    .subscribe(data => {
      if (data.active) {
        const box = data.element as HTMLDivElement;
        box.style.marginTop = `${relativeY}px`;
        box.style.marginLeft = `${relativeX}px`;
      }
    });
}
export default workWithCanvas;