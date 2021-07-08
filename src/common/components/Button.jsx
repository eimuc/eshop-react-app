import clsx from "clsx";
import { Link } from "react-router-dom";

const typeClassMap = {
  default: "text-blue-400 hover:bg-gray-50",
  primary: "text-white bg-blue-400 hover:bg-blue-500",
};
const initialClasses = "p-1 focus:outline-none rounded font-semibold";
const disabledClasses = "bg-gray-300 cursor-default text-gray-400";

function Button({ type = "default", className, children, disabled, to, onClick }) {
  const mergedClasses = clsx(initialClasses, disabled ? disabledClasses : typeClassMap[type], className);
  if (to) {
    return (
      <Link to={to} className={mergedClasses} disabled={disabled} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <button className={mergedClasses} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
