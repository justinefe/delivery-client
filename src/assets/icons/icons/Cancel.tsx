const Cancel = ({ onClick }: any) => (
  <svg
    width="38"
    height="38"
    viewBox="0 0 38 38"
    fill="none"
    onClick={onClick}
    className="cursor-pointer"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M28.5 9.5L9.5 28.5"
      stroke="black"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.5 9.5L28.5 28.5"
      stroke="black"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Cancel;
