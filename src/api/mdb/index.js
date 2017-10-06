import { Router } from 'express'
import { middleware as query } from 'querymen'
import { index, show } from './controller'

const router = new Router()

/**
 * @api {get} /mdb Retrieve mdbs
 * @apiName RetrieveMdbs
 * @apiGroup Mdb
 * @apiUse listParams
 * @apiSuccess {Object[]} mdbs List of mdbs.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /mdb/:id Retrieve mdb
 * @apiName RetrieveMdb
 * @apiGroup Mdb
 * @apiSuccess {Object} mdb Mdb's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Mdb not found.
 */
router.get('/:id',
  show)

export default router
