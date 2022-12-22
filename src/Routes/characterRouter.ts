import express from 'express'
const router = express.Router()

import {
  createCharacter,
  getAllCharacters,
  deleteCharacter,
  showStats,
  updateCharacter
} from "../controller/characterController";

router.route('/').post(createCharacter).get(getAllCharacters)

router.route('/stats').get(showStats)

router.route('/:id').delete(deleteCharacter).patch(updateCharacter)

export default router
