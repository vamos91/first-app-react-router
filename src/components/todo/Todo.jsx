import React from 'react';
import { Table } from 'flowbite-react';


const Todo = ({ id, taskName, handleParentClick }) => {

    const deleteTask = (todoName) => {
        handleParentClick(todoName)
    }

    return (
        <Table.Row data-testid={`todo-${id}`} data-task="task" className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell data-testid="todo" className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {taskName}
            </Table.Cell>
            <Table.Cell>
                Not complete
            </Table.Cell>
            <Table.Cell>
                <div data-cy={`todo-${id}`} onClick={() => deleteTask(taskName)}
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                    <p>
                        Supprimer
                    </p>
                </div>
            </Table.Cell>
        </Table.Row>
    );
};

export default Todo;