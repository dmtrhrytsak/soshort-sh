import { Router } from 'express';

import validationMiddleware from '../../middlewares/validation.middleware.js';
import validation from './url.validation.js';
import { createURLHandler } from './url.controller.js';

const router = Router();

router.post('/', validationMiddleware(validation.url), createURLHandler);

export default router;
