import {
  Component,
  ChangeDetectionStrategy,
  HostBinding,
  Input,
  AfterViewInit,
  ElementRef,
  Renderer2,
  OnInit,
  OnChanges,
  ViewEncapsulation,
  OnDestroy,
} from '@angular/core'

import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'
import { DaAlign, DaJustify, DaAlignSelf, DaMergedProperty } from './layout.types'
import {
  setGridClass,
  setScreenPointFlex,
  setScreenPointElementsSpaceAndGutter,
} from './layout-utils'
import { DaScreenMediaQueryService } from './screen-media-query.service'

@Component({
  selector: 'da-layout-col',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ' <ng-content></ng-content> ',
  styles: [
    `
      da-layout-col.da-layout-col {
        margin: 0;
        padding: 0;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class LayoutColComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>()

  @HostBinding('class.da-layout-col') daLayoutCol = true
  @HostBinding('class.dl-d-flex') flex = true
  @HostBinding('class.dl-flex-column') flexColumn = true

  @Input() daSpace: number | number[] = 0
  @Input()
  daSpaceMs: number | number[] = []

  @Input()
  daSpaceMn: number | number[] = []

  @Input()
  daSpaceMl: number | number[] = []

  @Input()
  daSpaceXs: number | number[] = []

  @Input()
  daSpaceSm: number | number[] = []

  @Input()
  daSpaceMd: number | number[] = []

  @Input()
  daSpaceLg: number | number[] = []

  @Input()
  daSpaceXl: number | number[] = []

  @Input() daGutter: number | number[] = 0
  @Input()
  daGutterMs: number | number[] = []

  @Input()
  daGutterMn: number | number[] = []

  @Input()
  daGutterMl: number | number[] = []

  @Input()
  daGutterXs: number | number[] = []

  @Input()
  daGutterSm: number | number[] = []

  @Input()
  daGutterMd: number | number[] = []

  @Input()
  daGutterLg: number | number[] = []

  @Input()
  daGutterXl: number | number[] = []

  @Input()
  daSpan!: number

  @Input()
  daMs!: number | DaMergedProperty

  @Input()
  daMm!: number | DaMergedProperty

  @Input()
  daMl!: number | DaMergedProperty

  @Input()
  daXs!: number | DaMergedProperty

  @Input()
  daSm!: number | DaMergedProperty

  @Input()
  daMd!: number | DaMergedProperty

  @Input()
  daLg!: number | DaMergedProperty

  @Input()
  daXl!: number | DaMergedProperty

  @Input()
  daOffset!: number

  @Input()
  daOffsetMs!: number

  @Input()
  daOffsetMn!: number

  @Input()
  daOffsetMl!: number

  @Input()
  daOffsetXs!: number

  @Input()
  daOffsetSm!: number

  @Input()
  daOffsetMd!: number

  @Input()
  daOffsetLg!: number

  @Input()
  daOffsetXl!: number

  @Input()
  daAlign: DaAlign = 'start'

  @Input()
  daAlignMs: DaAlign = 'start'

  @Input()
  daAlignMn: DaAlign = 'start'

  @Input()
  daAlignMl: DaAlign = 'start'

  @Input()
  daAlignXs: DaAlign = 'start'

  @Input()
  daAlignSm: DaAlign = 'start'

  @Input()
  daAlignMd: DaAlign = 'start'

  @Input()
  daAlignLg: DaAlign = 'start'

  @Input()
  daAlignXl: DaAlign = 'start'

  @Input()
  daJustify: DaJustify = 'start'

  @Input()
  daJustifyMs: DaJustify = 'start'

  @Input()
  daJustifyMn: DaJustify = 'start'

  @Input()
  daJustifyMl: DaJustify = 'start'

  @Input()
  daJustifyXs: DaJustify = 'start'

  @Input()
  daJustifySm: DaJustify = 'start'

  @Input()
  daJustifyMd: DaJustify = 'start'

  @Input()
  daJustifyLg: DaJustify = 'start'

  @Input()
  daJustifyXl: DaJustify = 'start'

  @Input()
  daAlignSelf: DaAlignSelf = 'start'

  @Input()
  daAlignSelfMs: DaAlignSelf = 'start'

  @Input()
  daAlignSelfMm: DaAlignSelf = 'start'

  @Input()
  daAlignSelfMl: DaAlignSelf = 'start'

  @Input()
  daAlignSelfXs: DaAlignSelf = 'start'

  @Input()
  daAlignSelfSm: DaAlignSelf = 'start'

  @Input()
  daAlignSelfMd: DaAlignSelf = 'start'

  @Input()
  daAlignSelfLg: DaAlignSelf = 'start'

  @Input()
  daAlignSelfXl: DaAlignSelf = 'start'

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private screenQueryService: DaScreenMediaQueryService,
  ) {}

  ngOnInit(): void {
    setGridClass(this, this.elementRef, this.renderer)
  }

  ngOnChanges(): void {
    setGridClass(this, this.elementRef, this.renderer)
  }

  ngAfterViewInit(): void {
    this.screenQueryService
      .getPoint()
      .pipe(takeUntil(this.destroy$))
      .subscribe(({ currentPoint }) => {
        setScreenPointElementsSpaceAndGutter(
          this.getAllItems(),
          currentPoint,
          'col',
          this,
          this.renderer,
        )
      })
  }

  getAllItems(): HTMLElement[] {
    return (Array.from(this.elementRef.nativeElement.children) as []).filter(
      (ele: HTMLElement) => {
        return ele.matches('da-row-item, da-layout-row')
      },
    )
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
