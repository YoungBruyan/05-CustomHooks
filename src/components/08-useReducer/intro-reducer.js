

const initialState = [{
    id: 1,
    todo: 'Comprar leche',
    done: false
}];

const todoReducer = (state = initialState, action) =>{


    if (action?.type === 'agregar') {
        /*de esta manera se agregan
        primero el state inicial y depues lo que se va agregae*/
        return [...state, action.payload]; 
    }
    
    
    return state;
}



let todos= todoReducer();


const newTodo = {
    id: 2,
    todo: 'Comprar pan',
    done: false
};

const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo
}


todos = todoReducer(todos, agregarTodoAction);







console.log(todos);