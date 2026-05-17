export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark';

  return (
    <button
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
      style={{
        background: 'none',
        border: '1px solid var(--border)',
        borderRadius: '6px',
        color: 'var(--muted)',
        cursor: 'pointer',
        padding: '6px 8px',
        lineHeight: 1,
        fontSize: '14px',
        transition: 'color 0.15s, border-color 0.15s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = 'var(--text)';
        e.currentTarget.style.borderColor = 'var(--faint)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = 'var(--muted)';
        e.currentTarget.style.borderColor = 'var(--border)';
      }}
    >
      {isDark ? '☀' : '☾'}
    </button>
  );
}
