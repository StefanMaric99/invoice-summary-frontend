const {
    ROOT_BACKEND_API = "http://localhost:4000"
} = process.env;
const API_INVENTORY = `$ROOT_BACKEND_API/inventories`
const API_USERS = `${ROOT_BACKEND_API}/users`;

export {
    ROOT_BACKEND_API,
    API_USERS,
    API_INVENTORY
}