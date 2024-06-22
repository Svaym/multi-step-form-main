import { FC } from 'react'

interface DescriptionProps {
  children: string,
  textCenter?: string
}
const Description: FC<DescriptionProps> = ({ children, textCenter }) => {
  return (
    <p className={`${textCenter}`}>
      { children }
    </p>
  )
}

export default Description