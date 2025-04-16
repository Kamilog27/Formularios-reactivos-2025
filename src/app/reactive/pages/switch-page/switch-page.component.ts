import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-switch-page',
  imports: [JsonPipe],
  templateUrl: './switch-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitchPageComponent { }
