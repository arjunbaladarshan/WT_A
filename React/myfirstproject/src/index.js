import React from 'react';
import ReactDOM from 'react-dom/client';

import Seperator from './Seperator';
import {Logo, Menu, Footer} from './Logo';
import Form from './Form';

const students = [
    {name:'keval', rollNo:101, image:'https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/5---29-04-2023-11-00-29.jpg'},
    {name:'renish', rollNo:102,image:'https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/3---28-04-2023-02-02-42.jpg'},
    {name:'vishal', rollNo:103,image:'https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/6---28-04-2023-02-06-07.jpg'},
    {name:'het', rollNo:104,image:'https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/8---28-04-2023-02-06-25.jpg'},
    {name:'dhairya', rollNo:105,image:'https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/12---28-04-2023-02-06-51.jpg'}
];

const studentsFormated = students.map((stu)=>{
    return(
        <div class="col-4 my-3">
            <div class="card">
                <img src={stu.image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{stu.name}</h5>
                    <p class="card-text">{stu.rollNo}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <div class="container">
            <div class="row">
                { studentsFormated }
            </div>
        </div>
    </>
);