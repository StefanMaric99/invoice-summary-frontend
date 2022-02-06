import {UserCard} from "../components/UserCard";
import {API_INVENTORY} from "../constants";


export default function Inventory(props) {
    eturn (
        <div>
            <h1>Inventory</h1>

            <div className="w-full p-5">
                {inventories.map((user, index) => {
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
    const inventories = await res.json();

    return {
        props: {
            inventories: inventories
        }
    }

}