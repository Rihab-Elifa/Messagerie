import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';


@Component({
  selector: 'app-message-e',
  templateUrl: './message-e.component.html',
  styleUrls: ['./message-e.component.scss']
})
export class MessageEComponent {

  links = ['First', 'Second'];
  activeLink = this.links[0];
  background: ThemePalette = undefined;

  showFiller = false;
  
  selectedMenuItem: string = 'r';

  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }

  addLink() {
    this.links.push(`Link ${this.links.length + 1}`);
  }

}
