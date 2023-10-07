import {
  Component,
  ChangeDetectionStrategy,
  HostBinding,
  ElementRef,
  Renderer2,
  Input,
  AfterViewInit,
  ViewEncapsulation,
  OnInit,
  OnChanges,
  OnDestroy,
} from '@angular/core'

import { takeUntil } from 'rxjs/operators'
import { Subject } from 'rxjs'
import { setGridClass, setScreenPointElementsSpaceAndGutter } from './layout-utils'
import { DaScreenMediaQueryService } from './screen-media-query.service'
import { DaAlign, DaAlignSelf, DaJustify } from './layout.types'

@Component({
  selector: 'da-layout-row',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ' <ng-content></ng-content> ',
  styles: [
    `
      da-layout-row.da-layout-row {
        margin: 0;
        padding: 0;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class LayoutRowComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>()

  @HostBinding('class.da-layout-row') daLayoutRow = true
  @HostBinding('class.dl-row') dlRow = true
  @HostBinding('class.dl-flex-row') dlFlexRow = true

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
          'row',
          this,
          this.renderer,
        )
      })
  }

  getAllItems(): HTMLElement[] {
    return (Array.from(this.elementRef.nativeElement.children) as []).filter(
      (ele: HTMLElement) => {
        return ele.matches('da-col-item, da-layout-col')
      },
    )
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
