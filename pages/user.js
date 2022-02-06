import {UserCard} from "../components/UserCard";
import { API_USERS } from "../constants";

export default function User(props) {

  const { users } = props;

  console.log(API_USERS)
    console.log(users)
  return (
    <div>
      <h1>User</h1>

      <div className="w-full p-5">
        {users.map((user, index) => {
          return (
            <UserCard  key={index} user={user} />
          )
        })}
      </div>
    </div>
  )

}





export const getStaticProps = async() => {
    console.log(API_USERS)
  const res = await fetch(API_USERS);
  const users = await res.json();

  return {
    props: {
      users
    }
  }

}

