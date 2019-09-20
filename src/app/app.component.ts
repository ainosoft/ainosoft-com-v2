import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  title = 'ainosoft';
  color = 'primary';

  clients = ['../assets/images/clients/c1.png', '../assets/images/clients/c2.png', '../assets/images/clients/c3.png',
    '../assets/images/clients/c4.png', '../assets/images/clients/c5.png', '../assets/images/clients/c6.png',
    '../assets/images/clients/c7.png', '../assets/images/clients/c8.png'];

  portfolioAll = ['../assets/images/folio/w1.png', '../assets/images/folio/w2.png', '../assets/images/folio/w3.png',
    '../assets/images/folio/w4.png', '../assets/images/folio/w5.png', '../assets/images/folio/w6.png',
    '../assets/images/folio/m1.png', '../assets/images/folio/m2.png',
    '../assets/images/folio/m3.png', '../assets/images/folio/m4.png'];

  portfolioWeb = ['../assets/images/folio/w1.png', '../assets/images/folio/w2.png', '../assets/images/folio/w3.png',
   '../assets/images/folio/w4.png', '../assets/images/folio/w5.png', '../assets/images/folio/w6.png'];

  portfolioPhone = ['../assets/images/folio/m1.png', '../assets/images/folio/m2.png',
    '../assets/images/folio/m3.png', '../assets/images/folio/m4.png'];

  constructor() { }

  ngOnInit(): void {
    /** Hides all the tab contents intially */
    const tabcontent = document.getElementsByClassName('tabcontent');
    for (let i = 0; i < tabcontent.length; i++) {
      const content = tabcontent[i] as HTMLElement;
      content.style.display = 'none';
    }

    /** Hides all the animation lines connected to service tabs initially */
    const lines = document.getElementsByClassName('line');
    for (let j = 0; j < lines.length; j++) {
      const line = lines[j] as HTMLElement;
      line.style.display = 'none';
    }
    const content1 = document.getElementsByClassName('tabcontent')[0] as HTMLElement;
    content1.style.display = 'block';

    const line1 = document.getElementsByClassName('line')[0] as HTMLElement;
    line1.classList.add('path-vert');
    line1.style.display = 'block';
  }

  /** Toggles the service tabs content along with the animation lines connected to 
   *  service tabs
   */
  changeTabContent(value) {
    const lines = document.getElementsByClassName('line');
    for (let j = 0; j < lines.length; j++) {
      const line = lines[j] as HTMLElement;
      line.classList.remove('path-vert');
      line.style.display = 'none';
    }

    const tabcontent = document.getElementsByClassName('tabcontent');
    for (let i = 0; i < tabcontent.length; i++) {
      const content = tabcontent[i] as HTMLElement;
      content.style.display = 'none';
      if (value === 'startup') {
        const content1 = tabcontent[0] as HTMLElement;
        content1.style.display = 'block';
        const line = lines[0] as HTMLElement;
        line.classList.add('path-vert');
        line.style.display = 'block';

      } else if (value === 'resource') {
        const content2 = tabcontent[1] as HTMLElement;
        content2.style.display = 'block';
        const line = lines[1] as HTMLElement;
        line.classList.add('path-vert');
        line.style.display = 'block';

      } else if (value === 'delivery') {
        const content3 = tabcontent[2] as HTMLElement;
        content3.style.display = 'block';
        const line = lines[2] as HTMLElement;
        line.classList.add('path-vert');
        line.style.display = '';
      }
    }
  }
}
