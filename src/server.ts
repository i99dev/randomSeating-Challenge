import App from '@/app';
import { AuthController } from '@controllers/auth.controller';
import { IndexController } from '@controllers/index.controller';
import { UsersController } from '@controllers/users.controller';
import { CampusController } from './controllers/42.controller';
import validateEnv from '@utils/validateEnv';
import axios from 'axios';

validateEnv();

const app = new App([AuthController, IndexController, UsersController, CampusController]);

app.listen();
