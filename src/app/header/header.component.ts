import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, VERSION, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isShow: boolean = true;
  isMen = true;
  isWomen = false;
  hidden: boolean = true;
  brand: boolean = false;
  constructor(private observer: BreakpointObserver) { }
  expanded: boolean = true;
  ngOnInit(): void {
  }
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  visibleMenu(value: any) {
    var el = document.getElementById("sidebar");
    el?.classList.toggle("toggle-sidebar")

    // this.isShow = !this.isShow;
    // this.isMen = !this.isMen;
  }
  // ngAfterViewInit() {
  //   this.observer.observe(['(max-width: 8000px)']).subscribe((res) => {
  //     if (res.matches) {
  //       this.sidenav.mode = 'over';
  //       this.sidenav.close();
  //     } else {
  //       this.sidenav.mode = 'side';
  //       this.sidenav.open();
  //     }
  //   });
  // }
  // visib

  // if (select('.toggle-sidebar-btn')) {
  //   on('click', '.toggle-sidebar-btn', function(e) {
  //     select('body').classList.toggle('toggle-sidebar')
  //   })
  // }
  status: boolean = false;
  statusLink: boolean = false;
  clickEvent() {
    this.status = !this.status;
    //this.statusLink = !this.statusLink;

    if (this.statusLink) {
      setTimeout(() => {
        this.statusLink = false;
      }, 230);
    } else {
      this.statusLink = true;
    }
  }
}
