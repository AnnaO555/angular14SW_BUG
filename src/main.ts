import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from '@app/app.module';
import { environment } from '@environments/environment';
import { RUNTIME_CONFIG } from '@acoach/utils/runtime-config.token';

const configXhr = new XMLHttpRequest();
configXhr.open('GET', environment.configPath);
configXhr.send();
configXhr.onreadystatechange = function () {
  if (this.status === 200 && this.readyState === 4) {
    let config;
    if (configXhr.responseText) {
      config = JSON.parse(configXhr.responseText);
    }
    if (environment.production) {
      enableProdMode();
    }

    
    platformBrowserDynamic([
      {
        provide: RUNTIME_CONFIG,
        useValue: config || {},
      },
    ])
      .bootstrapModule(AppModule)
      .catch((err) => {
        
      });
  }
};
