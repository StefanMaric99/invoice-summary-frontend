export const UserCard = (props) => {
  const { user } = props;
  return (
    <ul  className="p-3 hover:bg-blue-100 mt-2 shadow-lg rounded-lg">
      <li>ID: {user['id']}</li>
      <li>NAME: {user['name']}</li>
      <li>AGE: {user['age']}</li>
    </ul>
  )
}
