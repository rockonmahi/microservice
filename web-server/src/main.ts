import { bootstrapApplication } from '@angular/platform-browser';
import { escolaConfig } from './escola/escola.config';
import {EscolaComponent} from './escola/escola';

bootstrapApplication(EscolaComponent, escolaConfig)
  .catch((err) => console.error(err));
