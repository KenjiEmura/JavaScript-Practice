const todos = [
  {
    id: 1,
    title: 'Go to school',
    completed: true
  },
  {
    id: 2,
    title: 'Go to the library',
    completed: true
  },
  {
    id: 3,
    title: 'Go to the mall',
    completed: true
  },
  {
    id: 4,
    title: 'Go shopping',
    completed: true
  },
]

console.log("Old for loop:")
for (let i = 0; i < todos.length; i++) {
  console.log("task: ", todos[i].title)
}

console.log("\nNew for loop:")
todos.forEach(task => {
  console.log("task: ", task.title)
})