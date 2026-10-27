import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState('')

  function addTask(e) {
    e.preventDefault()
    if (!task.trim()) return

    setTasks([...tasks, { text: task, done: false }])
    setTask('')
  }

  function toggleTask(index) {
    setTasks(tasks.map((item, i) =>
      i === index ? { ...item, done: !item.done } : item
    ))
  }

  const completed = tasks.filter(item => item.done).length

  return (
    <div className="app">
      <aside className="sidebar">
        <h2 className="logo">Life<span>Desk.</span></h2>
        <p className="label">WORKSPACE</p>
        <div className="menu active">⌂ &nbsp; Dashboard</div>
        <div className="menu">✓ &nbsp; My Tasks</div>
        <div className="menu">▤ &nbsp; Study Tracker</div>
        <div className="profile">👤 &nbsp; My Workspace</div>
      </aside>

      <main className="main">
        <header className="topbar">My Workspace / Dashboard</header>

        <section className="welcome">
          <p className="label">YOUR PERSONAL PRODUCTIVITY SPACE</p>
          <h1>Make today count.</h1>
          <p>Small steps every day lead to big changes. Let's get started.</p>
        </section>

        <section className="stats">
          <div className="card">
            <p>Total Tasks</p>
            <h2>{tasks.length}</h2>
          </div>
          <div className="card">
            <p>Completed</p>
            <h2>{completed}</h2>
          </div>
          <div className="card">
            <p>Remaining</p>
            <h2>{tasks.length - completed}</h2>
          </div>
        </section>

        <section className="task-panel">
          <h2>Today's Tasks</h2>
          <p>Plan your day, one task at a time.</p>

          <form onSubmit={addTask} className="task-form">
            <input
              value={task}
              onChange={e => setTask(e.target.value)}
              placeholder="What do you want to accomplish?"
            />
            <button type="submit">+ Add Task</button>
          </form>

          {tasks.length === 0 && (
            <div className="empty">
              ✨
              <h3>Your day, your pace.</h3>
              <p>Add your first task and start making progress!</p>
            </div>
          )}

          {tasks.map((item, index) => (
            <div className="task" key={index}>
              <input
                type="checkbox"
                checked={item.done}
                onChange={() => toggleTask(index)}
              />
              <span className={item.done ? 'done' : ''}>{item.text}</span>
            </div>
          ))}
        </section>

        <footer>LifeDesk · Plan your day. Build your future.</footer>
      </main>
    </div>
  )
}

export default App