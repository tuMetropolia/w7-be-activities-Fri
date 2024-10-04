const express = require("express");
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Workout:
 *       type: object
 *       required:
 *         - title
 *         - load
 *         - reps
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the workout
 *         title:
 *           type: string
 *           description: The workout title
 *         load:
 *           type: number
 *           description: The weight/load of the workout
 *         reps:
 *           type: number
 *           description: The number of repetitions
 *       example:
 *         id: d5fE_asz
 *         title: Bench Press
 *         load: 100
 *         reps: 10
 */

/**
 * @swagger
 * tags:
 *   name: Workouts
 *   description: The workouts managing API
 */

/**
 * @swagger
 * /workouts:
 *   get:
 *     summary: Returns the list of all workouts
 *     tags: [Workouts]
 *     responses:
 *       200:
 *         description: The list of workouts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Workout'
 */
router.get("/", getWorkouts);

/**
 * @swagger
 * /workouts/{id}:
 *   get:
 *     summary: Get a workout by ID
 *     tags: [Workouts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The workout id
 *     responses:
 *       200:
 *         description: The workout description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Workout'
 *       404:
 *         description: Workout not found
 */
router.get("/:id", getWorkout);

/**
 * @swagger
 * /workouts:
 *   post:
 *     summary: Create a new workout
 *     tags: [Workouts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Workout'
 *     responses:
 *       201:
 *         description: The workout was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Workout'
 *       500:
 *         description: Some server error
 */
router.post("/", createWorkout);

/**
 * @swagger
 * /workouts/{id}:
 *   delete:
 *     summary: Delete a workout by ID
 *     tags: [Workouts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The workout id
 *     responses:
 *       200:
 *         description: The workout was deleted
 *       404:
 *         description: Workout not found
 */
router.delete("/:id", deleteWorkout);

/**
 * @swagger
 * /workouts/{id}:
 *   patch:
 *     summary: Update a workout by ID
 *     tags: [Workouts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The workout id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Workout'
 *     responses:
 *       200:
 *         description: The workout was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Workout'
 *       404:
 *         description: Workout not found
 *       500:
 *         description: Some server error
 */
router.patch("/:id", updateWorkout);

module.exports = router;
