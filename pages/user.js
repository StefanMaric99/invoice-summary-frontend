import {UserCard} from "../components/UserCard";

export default function User() {
  const db = [
    {
      id: 1,
      name: 'John Doe',
      age: 19,
    },
    {
      id: 2,
      name: 'Mike Doe',
      age: 20,
    },
  ]

  console.log('db', db)

  return (
    <div>
      <h1>User</h1>

      <div className="w-full p-5">
        {db.map((user, index) => {
          return (
            <UserCard  key={index} user={user} />
          )
        })}
      </div>
    </div>
  )
}