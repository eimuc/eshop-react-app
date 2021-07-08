import { ReactComponent as SpinIcon } from "../assets/sping.svg";

function Spinner({ text = "Loading", dots }) {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <SpinIcon />
      <div className="flex mt-2 font-semibold">
        <span>{text}</span>
        <span className="w-3">{dots}</span>
      </div>
    </div>
  );
}

export default Spinner;
