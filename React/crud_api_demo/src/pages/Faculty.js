import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Faculty(){

    const [data, setData] = useState([]);

    const apiUrl = "https://62d6c51451e6e8f06f12bd5d.mockapi.io/faculties";

    useEffect(()=>{
        fetch(apiUrl, {method:"GET"})
        .then(res=>res.json())
        .then(res=>setData(res));
    },[]);

    const foramtedFaculty = data.map((fac)=>{
        return(
            <tr>
                <td>{fac.id}</td>
                <td>{fac.FacultyID}</td>
                <td>{fac.FacultyName}</td>
                <td><Link className="btn btn-primary" to={"/faculty/"+fac.id}>Read More</Link></td>
            </tr>
        );
    })

    return(<table className="table">{foramtedFaculty}</table>);
}

export default Faculty;