import React from 'react';
import { useState } from 'react';
import { Button, Table, Label, TextInput } from 'flowbite-react';
import Todo from '../../components/todo/Todo'


const TodoList = () => {
    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([])
    const [isEmpty, setIsEmpty] = useState(true)

    const addTask = () => {
        setTodos([...todos, todo])
        setTodo('')
    }

    const isUserValue = (event) => {
        todo.length !== 0 ? setIsEmpty(false) : setIsEmpty(true)
        setTodo(event.target.value)
    }

    const deleteTask = (todoName) => {
        setTodos(todos.filter((e) => e !== todoName))
    }
    return (
        <div className='flex justify-center flex-col items-center h-screen'>
            <h3 data-testid="heading">TODOLIST</h3>
            <form className="flex max-w-md flex-col gap-4 w-full m-20">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email2"
                            value="Task"
                        />
                    </div>
                    <TextInput
                        id="email2"
                        placeholder="Ex: Faire les courses"
                        required
                        shadow
                        type="text"
                        onChange={(e) => isUserValue(e)}
                        value={todo}
                        role="todo"
                    />
                </div>
                <div> 
                </div>  
                <Button disabled={isEmpty} data-button="add-task" onClick={() => addTask()}>
                    Add task
                </Button>
            </form>
            {
                todos.length > 0 && (
                    <Table hoverable className='w-full'>
                        <Table.Head>
                            <Table.HeadCell>
                                Task name
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Status
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Status
                            </Table.HeadCell> 
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {
                                todos.map((todo, item) => (
                                    <Todo id={item + 1} taskName={todo} handleParentClick={deleteTask} />
                                ))
                            }
                        </Table.Body>
                    </Table>
                )
            } 
        </div>
    );
};

export default TodoList;