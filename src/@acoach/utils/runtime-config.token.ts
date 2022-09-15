import { InjectionToken } from '@angular/core';

export const RUNTIME_CONFIG = new InjectionToken<never>(
  'Config that changes per Deployment Environment'
);
