const buttonClass = "bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 cursor-pointer outline-none focus:outline-none";
const spanClass = "m-auto text-2xl font-thin";
const inputClass =
  "outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700";

function Counter({ className, count, onIncrement, onDecrement, onInputChange }) {
  return (
    <div className={`flex flex-row h-8 w-20 rounded-lg relative bg-transparent mt-1 ${className}`}>
      <button className={`rounded-l ${buttonClass}`} onClick={onDecrement}>
        <span className={spanClass}>−</span>
      </button>
      <input className={inputClass} type="number" onChange={onInputChange} value={count} />
      <button className={`rounded-r ${buttonClass}`} onClick={onIncrement}>
        <span className={spanClass}>+</span>
      </button>
    </div>
  );
}

export default Counter;
