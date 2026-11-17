
import { Search, Bell, ChevronDown } from 'lucide-react'

function Header() {
  return (
    <header className="dashboard-header">
      <div className="header-title">
        <h1>Dashboard</h1>
        <p>Welcome back! Here's your task overview.</p>
      </div>

      <div className="header-actions">
        <div className="search-box">
          <Search size={18} />
          <input type="text" placeholder="Search tasks..." />
        </div>

        <button className="notification-btn" aria-label="Notifications">
          <Bell size={20} />
          <span className="notification-dot"></span>
        </button>

        <button className="profile-btn">
          <div className="profile-avatar">AN</div>
          <div className="profile-info">
            <strong>Ashish Ninama</strong>
            <span>Administrator</span>
          </div>
          <ChevronDown size={16} />
        </button>
      </div>
    </header>
  )
}

export default Header
