export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className='px-6 font-light py-3 rounded-full  text-white bg-[#0071E3] hover:bg-[#0071E3]/95'
      {...props}
    >
      {children}
    </button>
  );
};
