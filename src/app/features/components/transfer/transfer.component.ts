import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
})
export class TransferComponent {
  transferForm: FormGroup;
  isToAccountInvalid: boolean = false;
  isAmountInvalid: boolean = false;
  amoundInvalidMessage: string = '';

  constructor(private fb: FormBuilder) {
    this.transferForm = this.fb.group({
      fromAccount: ['My Personal Account: €5824.76'],
      toAccount: ['', Validators.required],
      amount: ['', Validators.required],
    });
  }

  onTransferSubmit(event: any) {
    this.validateTransferForm();

    // On form submit action goes here...
  }

  validateTransferForm() {
    if (this.transferForm.controls['toAccount'].status === 'INVALID') {
      this.isToAccountInvalid = true;
    } else {
      this.isToAccountInvalid = false;
    }
  }
}
