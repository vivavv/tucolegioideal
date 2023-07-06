export const CloseButton: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <button
      type="button"
      onClick={onClose}
      className="bg-blueGray-200 rounded-md p-2 inline-flex items-center justify-center self-end text-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
    >
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};
