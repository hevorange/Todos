
import './styles.css';
import {Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';



const tarea = new Todo('aprender PLatzi');
export const todoList = new TodoList();

todoList.nuevoTodo(tarea);

console.log(todoList);

crearTodoHtml(tarea);