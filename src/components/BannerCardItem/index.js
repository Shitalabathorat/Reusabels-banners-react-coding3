// Write your code here.
import './index.css'
const BannerProfile = props => {
  const {bannerDetails} = props
  const {id, headerText, description, className} = bannerDetails

  return (
    <div className="banner-card-container">
      <div className={className}>
        <h1 class="heading">{headerText}</h1>
        <p className="para">{description}</p>
        <button className="btn">Show More</button>
      </div>
    </div>
  )
}
export default BannerProfile
