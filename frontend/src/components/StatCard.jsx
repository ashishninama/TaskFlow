
function StatCard({ title, value, change, icon: Icon, color }) {
  return (
    <div className="stat-card">
      <div className="stat-card-top">
        <div className={`stat-icon ${color}`}>
          <Icon size={22} />
        </div>
        <span className="stat-change">{change}</span>
      </div>

      <div className="stat-card-info">
        <p>{title}</p>
        <h2>{value}</h2>
      </div>
    </div>
  )
}

export default StatCard
