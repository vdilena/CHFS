const removeLastTodo = (todos) => {
  let newTodos = [...todos]
  newTodos.pop()
  return [...newTodos]
}


const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    case 'REMOVE_LAST_TODO':
      //return state.filter(item => item !== state[state.length - 1])
      return removeLastTodo(state)
    case 'REMOVE_TODO':
      return state.filter((item) => item.id !== action.todoId)
    default:
      return state
  }
}

export default todos
