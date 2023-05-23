type Props = {
  text: string;
  onClick: () => void;
};

const ButtonQuiz = ({ text, onClick }: Props) => (
  <button
    className="bg-[green] w-[120px] h-[45px] select-none font-bold  rounded-[15px] text-white"
    onClick={onClick}
  >
    {text}
  </button>
);

export default ButtonQuiz;
