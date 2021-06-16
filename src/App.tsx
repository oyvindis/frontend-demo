import React, { FC, useEffect, useState } from 'react';

import type { Todo } from './types';
import { getTodos, convertTodosToArray } from './services/flask-demo/todos';
import { Todos } from './components/todos';

import SC from './styled';

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        getTodos().then(convertTodosToArray).then(setTodos)
    }, [])

    return (
        <SC.App>
            <Todos todos={todos}/>
        </SC.App>
    );
}

export default App;
