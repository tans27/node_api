const express = require("express");
const router = express.Router();

const { getAllTodos, createTodo, getTodoById,getTodo,updateTodo,deleteTodo,create,get } = require("../controller/Todo");
router.get("/todos", getAllTodos);
router.post("/todo/create", createTodo);

router.get("/todos/create", create);
router.get("/todos/get", get);




router.param("todoId", getTodoById);
router.get("/todo/:todoId", getTodo);

router.put("/todo/:todoId/update", updateTodo);

router.delete("/todo/:todoId/delete", deleteTodo);



module.exports = router;
