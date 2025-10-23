import CardPlan from '../../components/CardPlan/CardPlan'
import '../Plan/Plan.css'

const Plan = ({isLogged,nombre}) => {
  return (
    <div className='backColor'>
      <CardPlan isLogged={isLogged} nombre={nombre} />
    </div>
  )
}

export default Plan