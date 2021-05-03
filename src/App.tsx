import React, { FC, useEffect, useState } from 'react';

import type { Todo } from './types';
import { getTodos, convertTodosToArray } from './services/flask-demo/todos';
import { Todos } from './components/todos';


function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        getTodos().then(convertTodosToArray).then(setTodos)
    }, [])

    return (
        <div className="App">
            <Todos todos={todos}/>
        </div>
    );
}

export default App;
