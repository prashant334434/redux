import React, { useEffect } from 'react'
import { connect } from 'react-redux'
// import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../redux/user/userActions'

function UsersContainer({ userData, fetchUsers }) {
    console.log(userData)
    useEffect(() => {
        fetchUsers()
    }, [])
    return userData.loading ? (
        <h2>loading</h2>
    ) : userData.error ?
        (
            <h2>{userData.error}</h2>
        ) :
        <div>
            <h2>
                user list
            </h2>
            <div>
                {
                    userData && userData.users && userData.users.map(user => <p>{user.name}</p>)
                }
            </div>
        </div>
}

const mapStateToProps = state =>{
    return {
        userData: state.user
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        fetchUsers:()=>dispatch(fetchUsers())
    }
}

export default (mapDispatchToProps,mapStateToProps)(UsersContainer)