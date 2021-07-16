import React, { useState } from 'react'
import { useHistory } from 'react-router'
function CreateUser() {
    const history = useHistory()
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({
        first_name: '',
        lastName: '',
        email: '',
        phone: '',
        role: '',
    })
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        fetch('api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('user is create')
                history.push('/')
            }).catch(e => {
                console.log(e);
                console.log(e.message);
            }).finally(() => {
                setLoading(false)
            })
    }
    return (
        <div className='container p-5 w-50'>
            <form onSubmit={handleSubmit}>
                <div className="form-group mt-4">
                    <label htmlFor="first_name">first name</label>
                    <input type="text" onChange={handleChange} value={data.first_name}
                        className="form-control" name="first_name" id="first_name"
                        aria-describedby="helpId" />
                    <small id="first_name_helpId" className="form-text text-muted"></small>
                </div>
                <div className="form-group mt-4">
                    <label htmlFor="lastName">Last name</label>
                    <input type="text" onChange={handleChange} value={data.lastName}
                        className="form-control" name="lastName" id="lastName" aria-describedby="helpId" placeholder="" />

                </div>
                <div className="form-group mt-4">
                    <label htmlFor="email">Email</label>
                    <input type="email" onChange={handleChange} value={data.email}
                        className="form-control" name="email" id="email" aria-describedby="helpId" placeholder="" />

                </div>
                <div className="form-group mt-4">
                    <label htmlFor="phone">phone</label>
                    <input type="text" onChange={handleChange} value={data.phone}
                        className="form-control" name="phone" id="phone" aria-describedby="helpId" placeholder="" />

                </div>
                <div className="form-group mt-4">
                    <label htmlFor="role">role</label>
                    <input type="text" onChange={handleChange} value={data.role}
                        className="form-control" name="role" id="role" aria-describedby="helpId" placeholder="" />

                </div>
                <button disabled={loading} className='btn btn-primary mt-4' type='submit'>
                    Create User
                </button>
            </form>

        </div>
    )
}

export default CreateUser
