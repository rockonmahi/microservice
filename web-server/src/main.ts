import { bootstrapApplication } from '@angular/platform-browser';
import { webConfig } from './web/web.config';
import { WebComponent } from './web/web';

bootstrapApplication(WebComponent, webConfig)
  .catch((err) => console.error(err));