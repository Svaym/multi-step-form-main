import { FC } from "react"

interface ButtonProps {
  onClick?: () => void,
}
const Button: FC<ButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="bg-indigo-600 rounded-md py-3 px-4 block ml-auto font-semibold text-white transition-colors duration-500 ease-linear hover:bg-sky-950">Next Step</button>
  )
}

export default Button
