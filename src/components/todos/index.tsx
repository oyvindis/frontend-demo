import React, { FC } from 'react';

import type { Todo } from '../../types';
import SC from './styled';
import { deleteTodo } from '../../services/flask-demo/todos';

interface Props {
    todos: Todo[];
}

export const Todos: FC<Props> = ({todos = []}) =>
    <SC.Page>
        <SC.Title>Mine oppgaver:</SC.Title>
        <SC.Todos>
            {todos.length > 0 ? todos.map(({id, task}: Todo) => (
                <SC.Todo>
                    <SC.TodoTitle>{task}</SC.TodoTitle>
                    <SC.DeleteButton onClick={() => deleteTodo(id)}>Slett meg</SC.DeleteButton>
                </SC.Todo>
            )) : <div>Jeg har ingen oppgaver!</div>}
        </SC.Todos>
    </SC.Page>
