import App from '@/app';
import { IndexController } from '@controllers/index.controller';
import { CampusController } from './controllers/42.controller';
import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App([IndexController, CampusController]);

app.listen();
