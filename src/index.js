
import './styles.css';
import {Todo, TodoList} from './classes';



const tarea = new Todo('aprender JavaScript');
const todoList = new TodoList();

todoList.nuevoTodo(tarea);

console.log(todoList);