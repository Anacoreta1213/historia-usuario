import React from 'react';

import { Link } from 'react-router-dom';
export default function Home() {
    return (
        <>
        <div className="container mt-5 vh-95">
            <div className="row">
            <div className="col-md-4">
                <img src="https://cdn.pixabay.com/photo/2018/10/17/20/06/reaching-3754844_960_720.png" className="figure-img img-fluid rounded" style={{width:400}}  alt=""/>
            </div>
            <div className="col-md-8">
            <div className="text-center">
                <h1 className="especial">Subscribete y se parte de un proyecto</h1>
                <Link className="btn btn-info text-white fw-bold my-5 btn-lg rounded-pill" to="/signup">Sign up</Link>
            </div>
            </div>
        </div>
    </div>
    </>
    )
}
