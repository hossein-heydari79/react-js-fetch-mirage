import React, { useState, useEffect } from 'react'
import './userlists.style.css'
import { useHistory } from 'react-router'

function UsersList() {
    const history = useHistory()
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch('api/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data.users)
            }).catch(e => {
                console.log(e)
                console.log(e.message)
                setError(true)
            }).finally(() => {
                setLoading(false)
            })
    }, [])
    if (loading) return (<div>...loading</div>)
    if (error) return (<div> 500 server error please retray again</div>)
    return (
        <div className='container w-50'>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginTop: 40
            }}>
                <table className='styled-table'>
                    <thead>
                        <tr>
                            <th>
                                {"id".toUpperCase()}
                            </th>
                            <th>
                                {'display name'.toUpperCase()}
                            </th>
                            <th>
                                {"email".toUpperCase()}
                            </th>
                            <th>
                                {"phone".toUpperCase()}
                            </th>
                            <th>
                                {'role'.toUpperCase()}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length === 0 ? <tr><td style={{
                            textAlign: 'center'
                        }} colSpan={5}>there is no users</td></tr> :
                            users.map((user) => (
                                <tr key={user.id} onClick={() => history.push(`/${user.id}`)}>
                                    <td>{user.id}</td>
                                    <td>{`${user.first_name} ${user.lastName}`}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.role}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <div>
                    <button className='btn btn-success' onClick={() => history.push('/create')}>
                        create a new user
                    </button>
                </div>
            </div>
        </div>

    )
}

export default UsersList
