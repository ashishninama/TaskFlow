
import {
  CheckSquare,
  Clock,
  CircleAlert,
  TrendingUp
} from 'lucide-react'

import StatCard from '../components/StatCard'

const stats = [
  {
    title: 'Total Tasks',
    value: '24',
    change: '+12%',
    icon: CheckSquare,
    color: 'blue'
  },
  {
    title: 'Completed',
    value: '12',
    change: '+8%',
    icon: TrendingUp,
    color: 'green'
  },
  {
    title: 'In Progress',
    value: '8',
    change: 'Active',
    icon: Clock,
    color: 'orange'
  },
  {
    title: 'Pending',
    value: '4',
    change: 'Needs attention',
    icon: CircleAlert,
    color: 'red'
  }
]

const tasks = [
  {
    title: 'Design Dashboard UI',
    project: 'TaskFlow',
    priority: 'High',
    status: 'In Progress'
  },
  {
    title: 'Create Login Page',
    project: 'Authentication',
    priority: 'Medium',
    status: 'Completed'
  },
  {
    title: 'Setup Backend API',
    project: 'TaskFlow',
    priority: 'High',
    status: 'Pending'
  },
  {
    title: 'Create Database Schema',
    project: 'Backend',
    priority: 'Low',
    status: 'In Progress'
  }
]

function Dashboard() {
  return (
    <main className="dashboard-content">
      <section className="stats-grid">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </section>

      <section className="recent-tasks">
        <div className="section-heading">
          <div>
            <h2>Recent Tasks</h2>
            <p>Track your latest activities</p>
          </div>

          <button className="view-all-btn">View All</button>
        </div>

        <div className="task-table-wrapper">
          <table className="task-table">
            <thead>
              <tr>
                <th>Task Name</th>
                <th>Project</th>
                <th>Priority</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {tasks.map((task) => (
                <tr key={task.title}>
                  <td>{task.title}</td>
                  <td>{task.project}</td>
                  <td>
                    <span className={`priority ${task.priority.toLowerCase()}`}>
                      {task.priority}
                    </span>
                  </td>
                  <td>
                    <span className={`status ${task.status.toLowerCase().replace(' ', '-')}`}>
                      {task.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}

export default Dashboard
