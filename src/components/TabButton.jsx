export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <li>
      <button
        type="button"
        className={isSelected ? 'active' : undefined}
        onClick={onSelect}
      >
        {children}
      </button>
    </li>
  );
}
