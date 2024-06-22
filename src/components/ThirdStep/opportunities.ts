interface OpportunityProps {
  title: string,
  desc: string,
  price: string,
}
const opportunity: OpportunityProps[] = [
  {
    title: 'Online service',
    desc: 'Access to multiplayer games',
    price: '+$1/mo'
  },
  {
    title: 'Larger storage',
    desc: 'Extra 1TB of cloud save',
    price: '+$2/mo'
  },
  {
    title: 'Customizable Profile',
    desc: 'Custom theme on your profile',
    price: '+$2/mo'
  },
]
export default opportunity