const express = require("express");
const router = express.Router();

/**
 * @openapi
 * /api/v1/jokes:
 *   get:
 *     tags:
 *       - Jokes
 *     parameters:
 *
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Workout"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Some error message"
 */

const jokesController = require("../../controllers/jokesController");

router.get("/", jokesController.getARandomJoke);

router.get("/:jokeId", jokesController.getASelectedJoke);

router.post("/", jokesController.createAJoke);

module.exports = router;
