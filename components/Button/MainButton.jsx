import Link from "next/link";

const MainButton = ({ color, bg, cN, hover, text, goTo }) => {
  return (
    <Link
      href={goTo}
      className={`text-[15px]  ${color} ${bg} ${cN} text-center pt-[18px] font-[600] w-[20rem] h-[5.5rem] uppercase relative ml-2 ${hover}`}
    >
      {text}
    </Link>
  );
}

export default MainButton;