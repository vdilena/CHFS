const removeLastTodo = (todos) => {
  let newTodos = [...todos]
  newTodos.pop()
  return [...newTodos]
}

const editLastTodo = (todos,newtext) =>{
  let newTodos = [...todos]
  let ultimo =  newTodos.pop()
  ultimo.text = newtext
  return [...newTodos,ultimo]
 }

const removeTodoStartingA = (todos) => {

  let newTodos = todos.filter(item => item.text.startsWith("A") === false)
  return newTodos
}

const sortTodo = (todos) => {

  let todosSorted = [...todos.sort((a,b) => a.text > b.text)]
  return todosSorted
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

    case 'REMOVE_TODO_STARTING_A':
      return removeTodoStartingA(state)
    case 'REMOVE_TODO':
      return state.filter((item) => item.id !== action.todoId)
    case 'EDIT_LAST_TODO':
      return editLastTodo(state, action.text)
    case 'SORT_TODO':
      return sortTodo(state)
    default:
      return state
  }
}

export default todos
