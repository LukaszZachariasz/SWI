import {Component, Input} from '@angular/core';
import {WaterLevelControlService} from '../../../services/water-level-control.service';
import {DisplayConstants as DC_EXT} from '../../../constants/display-constants';
import {ConfigConstants as CC_EXT} from '../../../constants/config-constants';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent {

  private DC = DC_EXT;
  private CC = CC_EXT;

  @Input() waterLevelLiveData;
  sliderWaterLevelValue: any = 0;

  constructor(private waterLevelControlService: WaterLevelControlService) {
  }

  onWaterLevelSetClick() {
    this.waterLevelControlService.postWaterLevel(this.sliderWaterLevelValue);
  }
}
