import { Injectable, OnDestroy } from '@angular/core'
import { fromEvent, ReplaySubject, Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'
import { DaBreakpoint, DaBreakpoints, DaBreakpointsMap } from './layout.types'

@Injectable({ providedIn: 'root' })
export class DaScreenMediaQueryService implements OnDestroy {
  private currentPoint: DaBreakpoint | undefined
  private pointChangeSub: ReplaySubject<{
    currentPoint: DaBreakpoint
    change: number
    compare: { [key: string]: number }
  }> = new ReplaySubject(1)

  private destroy$: Subject<void> = new Subject<void>()

  public getPoint(): ReplaySubject<{
    currentPoint: DaBreakpoint
    change: number
    compare: { [key: string]: number }
  }> {
    if (!this.currentPoint) {
      this.currentPoint = this.getCurrentPoint()!
      this.pointChangeSub.next({
        currentPoint: this.currentPoint,
        change: 0,
        compare: this.comparePoints(this.currentPoint),
      })

      fromEvent(window, 'resize')
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          const tempPoint = this.getCurrentPoint()!
          if (this.currentPoint !== tempPoint) {
            const change = this.comparePoints(tempPoint, this.currentPoint) as number
            this.currentPoint = tempPoint

            this.pointChangeSub.next({
              currentPoint: this.currentPoint,
              change,
              compare: this.comparePoints(tempPoint),
            })
          }
        })
    }

    return this.pointChangeSub
  }

  private comparePoints(p1: DaBreakpoint, p2?: DaBreakpoint) {
    let index1: any
    let index2: any
    for (let i = 0; i < DaBreakpoints.length; i++) {
      if (p1 === DaBreakpoints[i]) {
        index1 = i
      }
      if (p2 === DaBreakpoints[i]) {
        index2 = i
      }
    }

    if (!p2) {
      const res: any = {}
      DaBreakpoints.forEach((point, index) => {
        res[point] = index1 - index
      })

      return res
    }

    return index1 - index2
  }

  private getCurrentPoint(): DaBreakpoint | undefined {
    const currentScreenWidth = window.innerWidth
    for (let i = 0; i < DaBreakpoints.length; i++) {
      if (
        DaBreakpointsMap[DaBreakpoints[i]] >= currentScreenWidth ||
        i === DaBreakpoints.length - 1
      ) {
        return DaBreakpoints[i] as DaBreakpoint
      }
    }
    return undefined
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
