export default function Tag({ label, hi = false }) {
  return <span className={`tag${hi ? ' hi' : ''}`}>{label}</span>
}
