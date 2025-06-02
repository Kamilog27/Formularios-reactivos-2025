import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'app-switch-page',
  imports: [JsonPipe,ReactiveFormsModule],
  templateUrl: './switch-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitchPageComponent {

  private fb = inject(FormBuilder);
  formutils = FormUtils;
  myForm:FormGroup = this.fb.group({
    gender:['M',Validators.required],
    wantNotifications:[true],
    termAndConditions:[false,Validators.requiredTrue],
  })

  onSubmit() {
    this.myForm.markAllAsTouched();
console.log(this.myForm.value);
}

}
