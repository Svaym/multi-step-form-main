import { FC } from 'react'

interface TitleProps {
  children: string,
  textCenter?: string
}
const Title: FC<TitleProps> = ({ children, textCenter }) => {
  return (
    <h2 className={`${textCenter} text-2xl font-bold text-marineBlue`}>
      { children }
    </h2>
  )
}

export default Title
