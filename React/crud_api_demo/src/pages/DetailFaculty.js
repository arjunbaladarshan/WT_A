import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function DetailFaculty(){
    const [data, setData] = useState({});

    const { id } = useParams();

    const navigate = useNavigate();

    const apiUrl = "https://62d6c51451e6e8f06f12bd5d.mockapi.io/faculties/"+id;

    useEffect(()=>{
        fetch(apiUrl, {method:"GET"})
        .then(res=>res.json())
        .then(res=>setData(res));
    },[]);

    return(
        <>
            <Link to="/faculty" className="btn btn-info">Back</Link>

            <button className="btn btn-danger" onClick={()=>{
                const apiUrl = "https://62d6c51451e6e8f06f12bd5d.mockapi.io/faculties/"+id;

                fetch(apiUrl, {method:"DELETE"})
                .then(res=>res.json())
                .then(res=>{
                    navigate('/faculty');
                })

                

            }}>Delete</button>
            <h1>Name of the faculty is = {data.FacultyName}</h1>
            <img src={data.FacultyImage} />
        </>
    );
}

export default DetailFaculty;