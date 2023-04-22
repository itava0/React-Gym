import Link from "next/link";

const MainButton = ({ color, bg, cN, arrowColor, hover, text, goTo }) => {
  return (
    <Link
      href={goTo}
      className={`text-[15px]  ${color} ${bg} ${cN} text-center pt-[18px] font-[600] w-[20rem] h-[5.5rem] uppercase hero-cta relative ml-2 ${hover} max-md:ml-24 `}
    >
      {text} &nbsp;
      <i className={`fa-solid fa-arrow-right text-[#FF0336] ${arrowColor}`}></i>
    </Link>
  );
}

export default MainButton;