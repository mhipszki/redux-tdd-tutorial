import React from 'react';

const TodoApp = ({ store }) => (
    <div>
        <button onClick={() => {
                store.dispatch({
                    type: 'ADD_TODO',
                    id: 0,
                    text: 'Test'
                });
            }}>Add todo</button>
    </div>
);

export default TodoApp;
