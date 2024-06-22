import arcade from '../../assets/icon-arcade.svg';
import advanced from '../../assets/icon-advanced.svg';
import pro from '../../assets/icon-pro.svg';

interface CardProps {
  icon: string,
  title: string,
  price: string,
}
const card: CardProps[] = [
  {
    icon: arcade,
    title: 'Arcade',
    price: '$9/mo'
  },
  {
    icon: advanced,
    title: 'Advanced',
    price: '$12/mo'
  },
  {
    icon: pro,
    title: 'Pro',
    price: '$15/mo'
  },
]
export default card