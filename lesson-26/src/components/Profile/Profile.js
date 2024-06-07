const Profile = ({ user }) => (
    <p>
        <span>{user?.name} {user?.last_name}</span>
    </p>
)

export default Profile;