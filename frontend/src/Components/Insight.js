import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import insig from "./ins.png"
function Insight() {
    const history = useNavigate()
    useEffect(() => {
        if (localStorage.getItem('token')) {
            history('/insight')
        }
        else {
            history("/login")
        }
    }, [])
    return (
        <div>
            <h1 className='log'>Financial Insights</h1>
            <img src={insig} alt="" width={`1100`} height={`650`} />
        </div>
    )
}

export default Insight
