import './index.css'

const UserProfile = props => {
  const {userDetails} = props
  const {headerText, description, className} = userDetails

  return (
    <li className="user-card-container">
      <div className={className}>
        <h1 className="head">{headerText}</h1>
        <p className="para">{description}</p>
        <button className="btn" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}
export default UserProfile
