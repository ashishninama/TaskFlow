
import { useState } from 'react'
import {
  LayoutDashboard,
  CheckSquare,
  FolderKanban,
  Users,
  Settings,
  HelpCircle,
  LogOut,
  CheckCircle
} from 'lucide-react'

const navigationItems = [
  { name: 'Dashboard', icon: LayoutDashboard },
  { name: 'My Tasks', icon: CheckSquare },
  { name: 'Projects', icon: FolderKanban },
  { name: 'Team', icon: Users },
]

function Sidebar() {
  const [activeItem, setActiveItem] = useState('Dashboard')

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <CheckCircle size={28} />
        <h2>TaskFlow</h2>
      </div>

      <div className="sidebar-menu">
        <p className="menu-label">MENU</p>

        <nav>
          {navigationItems.map((item) => {
            const Icon = item.icon

            return (
              <button
                key={item.name}
                className={`nav-item ${
                  activeItem === item.name ? 'active' : ''
                }`}
                onClick={() => setActiveItem(item.name)}
              >
                <Icon size={20} />
                <span>{item.name}</span>
              </button>
            )
          })}
        </nav>
      </div>

      <div className="sidebar-bottom">
        <button className="nav-item">
          <HelpCircle size={20} />
          <span>Help & Support</span>
        </button>

        <button className="nav-item">
          <Settings size={20} />
          <span>Settings</span>
        </button>

        <button className="nav-item logout">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
