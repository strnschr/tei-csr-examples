import { Component, ViewChild } from '@angular/core';
import CETEI from 'CETEIcean';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private tei = new CETEI();

  private urls = {
    sturm:
      'https://raw.githubusercontent.com/digicademy/sturm-exist-app/master/xml/quellen/01.briefe/1914-00-00/JVH/Q.01.19140322.JVH.01.xml',
    faustus:
      'https://raw.githubusercontent.com/evt-project/evt-sample-documents/master/EVT2js/data/text/marlowe.xml',
  };

  @ViewChild('edition')
  selectedEdition: any;

  onClick(mode: 'sturm' | 'faustus') {
    this.tei.getHTML5(this.urls[mode], (data) => {
      this.selectedEdition.nativeElement.innerHTML = '';
      this.selectedEdition.nativeElement.appendChild(data);
    });
  }
}
