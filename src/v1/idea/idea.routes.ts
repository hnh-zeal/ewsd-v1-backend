import express from 'express';
import auth from '../../middleWares/auth';
import validate from '../../middleWares/validate';
import ideaValidation from './idea.validation';
import ideaController from './idea.controller';

const router = express.Router();

router
  .route('/')
  .post(auth('STAFF'), validate(ideaValidation.createIdea), ideaController.createIdea)
  .get(auth('STAFF'), validate(ideaValidation.getIdeas), ideaController.getIdeas);

router
  .route('/:ideaId')
  .get(auth('STAFF'), validate(ideaValidation.getIdea), ideaController.getIdea)
  .patch(auth('STAFF'), validate(ideaValidation.updateIdea), ideaController.updateIdea)
  .delete(auth('STAFF'), validate(ideaValidation.deleteIdea), ideaController.deleteIdea);

export default router;
