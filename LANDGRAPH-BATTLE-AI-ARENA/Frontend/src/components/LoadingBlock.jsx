export default function LoadingBlock() {
  return (
    <div className="loading-block" id="loading-block">
      <div className="loading-text">
        <div className="loading-dots">
          <span />
          <span />
          <span />
        </div>
        <span>AI agents are battling it out…</span>
      </div>

      <div className="skeleton-grid">
        <div className="skeleton-card" />
        <div className="skeleton-card" />
      </div>
      <div className="skeleton-judge" />
    </div>
  )
}
