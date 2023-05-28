import React, { useState } from 'react'
import styled from 'styled-components'
import avatar from '../../img/avatar.png'
import { Link, useNavigate } from 'react-router-dom'

function Navigation({ active, setActive, props }) {
    const history = useNavigate();
    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        history("/login");
    }
    return (
        <NavStyled>
            <div className="user-con">
                <img src={avatar} alt="" />
                <div className="text">
                    <h2>Code Crushers</h2>
                    <p>Financial Management</p>
                </div>
            </div>
            <ul className="menu-items">
                <li className='my-2'><Link class={`nav-link active`} aria-current="page" to="/dashboard">Dashboard</Link></li>
                <li className='my-2'><Link class={`nav-link active`} aria-current="page" to="/income">Income</Link></li>
                <li className='my-2'><Link class={`nav-link active`} aria-current="page" to="/expences">Expences</Link></li>
                <li className='my-2'><Link class={`nav-link active`} aria-current="page" to="/dashboard">View_Transactions</Link></li>
                <li className='my-2'><Link class={`nav-link active`} aria-current="page" to="/insight">Financial_Insights</Link></li>

            </ul>
            {/* {!localStorage.getItem('token') ? <form className="d-flex">
                <Link className="btn btn-primary mx-1" to="/" role="button">Login</Link>
            </form> : <div class="dropdown">
                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {props.credentials.email}
                </a>
                <ul class="dropdown-menu dropdown-menu-dark">
                    <li><Link onClick={handleLogout} className="dropdown-item">Logout</Link></li>
                </ul>
            </div>} */}
            <div className="navcon">
                <Link class={`nav-link active`} aria-current="page" to="/">Logout</Link>
            </div>
        </NavStyled>
    )
}

const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 374px;
    height: 100%;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    .user-con{
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            border: 2px solid #FFFFFF;
            padding: .2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
        }
        h2{
            color: rgba(34, 34, 96, 1);
        }
        p{
            color: rgba(34, 34, 96, .6);
        }
    }

    .menu-items{
        flex: 1;
        display: flex;
        flex-direction: column;
        li{
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: .6rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            color: rgba(34, 34, 96, .6);
            padding-left: 1rem;
            position: relative;
            i{
                color: rgba(34, 34, 96, 0.6);
                font-size: 1.4rem;
                transition: all .4s ease-in-out;
            }
        }
    }

    .active{
        color: rgba(34, 34, 96, 1) !important;
        i{
            color: rgba(34, 34, 96, 1) !important;
        }
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: #222260;
            border-radius: 0 10px 10px 0;
        }
    }
`;

export default Navigation