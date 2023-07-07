export const DeleteIcon = ({ onClick }: { onClick: () => void }) => (
  <svg
    viewBox="0 0 14 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-[10px] h-[14px] lg:w-[14px] lg:h-[18px] cursor-pointer transition-all duration-200 ease-in-out fill-black hover:fill-red-400"
    onClick={onClick}
  >
    <path d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z" />
  </svg>
);
