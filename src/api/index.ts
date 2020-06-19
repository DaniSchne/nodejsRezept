import { Router } from 'express';
import customer from './routes/customer';
import user from './routes/user';
import rezept from './routes/rezept';

// guaranteed to get dependencies
export default () => {
	const app = Router();
	// auth(app);
	user(app);
    rezept(app);
    customer(app);

	return app
}