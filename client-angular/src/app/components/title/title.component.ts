import {Component} from '@angular/core';
import {DisplayConstants as DC_EXT} from '../../constants/display-constants';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  private DC = DC_EXT;
}
