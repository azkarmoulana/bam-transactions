import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureContainerComponent } from './components/feature-container/feature-container.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { TransactionItemComponent } from './components/transactions/transaction-item/transaction-item.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubmitButtonModule } from '../shared/ui/submit-button.module';

@NgModule({
  declarations: [
    FeatureContainerComponent,
    TransactionsComponent,
    TransactionItemComponent,
    TransferComponent,
  ],
  exports: [FeatureContainerComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SubmitButtonModule],
})
export class FeaturesModule {}
