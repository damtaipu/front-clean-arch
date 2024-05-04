import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import { dependencyInversion } from './providers-di';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const PROVIDERS = [
  provideHttpClient(withFetch()),
  importProvidersFrom(BrowserModule, BrowserAnimationsModule),
  provideAnimations(),

  dependencyInversion.card,
];
