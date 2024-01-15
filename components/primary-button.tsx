interface PrimaryButton {
  children: string | React.ReactNode;
  className?: string;
  label: string;
  onClick?: () => void;
}

function PrimaryButton({ children, className, label, onClick }: PrimaryButton) {
  return (
    <button
      className={`px-2 py-1 rounded-md border-2 text-green border-green hover:bg-green hover:text-white active:bg-activeGreen active:border-activeGreen transition-all duration-100 ${className}`}
      onClick={onClick}
      aria-label={label}
      title={label}
    >
      {children}
    </button>
  );
}
export default PrimaryButton;
