import './index.css'

const ShowEachDistrictData = props => {
  const {number, name} = props

  return (
    <li className="list-style">
      <p className="district-numbers">{number}</p>
      <p className="district-name">{name}</p>
    </li>
  )
}

export default ShowEachDistrictData
