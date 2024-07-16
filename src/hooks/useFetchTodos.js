// src/hooks/useFetchTodos.js

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchTodos = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');
    return data;
};

const useFetchTodos = () => {
    return useQuery({
        queryKey: ['todos'],
        queryFn: fetchTodos,
    });
};

export default useFetchTodos;
