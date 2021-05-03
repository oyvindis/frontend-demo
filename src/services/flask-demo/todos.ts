import {flaskApiGet, flaskApiDelete } from './host';
import { Task, Todo } from '../../types';

export const getTodos = (): Promise<{[key: string]: Task}> =>
    flaskApiGet('/todos');

export const deleteTodo = (id: string) =>
    flaskApiDelete(`/todos/${id}`);

export const convertTodosToArray = (todos: {[key: string]: Task}): Todo[] =>
    Object.entries(todos ?? {}).map(([key, {task}]) => ({id: key, task}))
