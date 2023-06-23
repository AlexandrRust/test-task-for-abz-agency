const getUsersList= state => state.users.items
const getPages = state => state.users.pages



const usersSelectors = {
    getUsersList,
    getPages
}

export default usersSelectors