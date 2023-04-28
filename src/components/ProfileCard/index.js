import './index.css'

const ProfileCard = props => {
  const {ProfileData} = props
  const {name, profileImageUrl, shortBio} = ProfileData

  return (
    <li>
      <div>
        <img src={profileImageUrl} alt={name} />
        <h1>{name}</h1>
        <p>{shortBio}</p>
      </div>
    </li>
  )
}

export default ProfileCard
