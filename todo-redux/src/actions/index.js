let nextTodoId = 0

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const removeTodo = todoId => ({
  type: 'REMOVE_TODO',
  todoId
})

export const removeLastTodo = () => ({
  type: 'REMOVE_LAST_TODO'
})

export const editLastTodo = text => ({
  type: 'EDIT_LAST_TODO',
  text
 })

 export const removeTodoStartingA = () => ({
   type: 'REMOVE_TODO_STARTING_A'
 })
