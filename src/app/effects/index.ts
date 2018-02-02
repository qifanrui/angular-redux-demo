import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { QuoteEffect } from './quote.effect';

export const effects = {
  quote: QuoteEffect,
};

@NgModule({
  imports: [
    EffectsModule.forRoot([effects.quote])
  ]
})
export class AppEffectsModule {
}
