import { Component, OnInit } from '@angular/core'
import { ListDataService, Card } from './data.service'

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  title = 'projects-overview'
  currentYear = new Date().getFullYear()
  cards: Card[] = []
  keyword = ''

  btnIcon = 'icon-frame-expand'
  btnContent = '全屏'

  launchFullscreen({ isFullscreen }: { isFullscreen: boolean }) {
    if (isFullscreen) {
      this.btnIcon = 'icon-frame-contract'
      this.btnContent = 'Exit'
    } else {
      this.btnIcon = 'icon-frame-expand'
      this.btnContent = 'FullScreen'
    }
  }

  preferredLanguage = 'EN'
  constructor(private listDataService: ListDataService) {
    try {
      this.preferredLanguage = window.navigator.languages[0]
        .toUpperCase()
        .startsWith('ZH')
        ? 'ZH'
        : 'EN'
    } catch (error) {}
  }

  switchLanguage() {
    const lang = this.preferredLanguage
    if (lang === 'EN') {
      this.preferredLanguage = 'ZH'
    } else {
      this.preferredLanguage = 'EN'
    }
  }

  ngOnInit() {
    this.getList()
  }

  search() {
    this.getList()
  }

  private getList() {
    this.cards = this.listDataService.getCardSource(this.keyword)
  }

  gotoLink(card: Card) {
    window.open(card.link, '_blank')
  }
}
