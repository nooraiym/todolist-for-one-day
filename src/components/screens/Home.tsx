import * as React from 'react';
import { TodoItem } from './item/TodoItem';
import { useState } from 'react';
import { CreateTodoField } from './create-todo-field/CreateTodoField';



export type TodoType = {
    _id: string
    title: string
    isCompleted: boolean
}

const data: TodoType[] = [
    {
        _id: 'dfad',
        title: 'Finish the project',
        isCompleted: false
    },
    {
        _id: 'dfadasdf',
        title: 'Finish the film',
        isCompleted: false
    },
    {
        _id: 'dfadqlot',
        title: 'Finish the essay',
        isCompleted: false
    },
]

export const Home = () => {
    const [todos, setTodos] = useState<TodoType[]>(data)

    const changeTodo = (id: string) => {
        const copy = [...todos]
        const current = copy.find(t => t._id === id)
        if (current) {
            current.isCompleted = !current.isCompleted
        }
        setTodos(copy)
    }

    const removeTodo = (id: string) => {
        setTodos([...todos].filter(t => t._id !== id))
    }




    return (
        <div className='px-40 py-10 bg-zinc-900 h-screen text-white w-full mx-auto' >
            
            <h1 className='text-2xl font-bold text-center mb-10'>todolist to control one day</h1>
            {todos.map( todo => (<TodoItem key={todo._id} todo={todo} changeTodo={changeTodo} removeTodo={removeTodo} />))}
            <CreateTodoField setTodos={setTodos} />
        </div>
    );
};
