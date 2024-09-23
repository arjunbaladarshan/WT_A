import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddFaculty(){
    const [data, setData] = useState({});
    const navigate = useNavigate();
    return(
        <>
            <div class="form-group row">
                <label for="text2" class="col-4 col-form-label">FacultyID</label> 
                <div class="col-8">
                <input onChange={(e)=>{
                    setData({...data,FacultyID:e.target.value})
                }} type="text" class="form-control" />
                </div>
            </div>
            <div class="form-group row">
                <label for="text1" class="col-4 col-form-label">Faculty Name</label> 
                <div class="col-8">
                <input onChange={(e)=>{
                    setData({...data,FacultyName:e.target.value})
                }}  type="text" class="form-control" />
                </div>
            </div>
            <div class="form-group row">
                <label for="text4" class="col-4 col-form-label">Image Path</label> 
                <div class="col-8">
                <input onChange={(e)=>{
                    setData({...data,FacultyImage:e.target.value})
                }}  type="text" class="form-control" />
                </div>
            </div>
            <div class="form-group row">
                <label for="text3" class="col-4 col-form-label">Enter Salary</label> 
                <div class="col-8">
                <input onChange={(e)=>{
                    setData({...data,FacultySalary:e.target.value})
                }}  type="text" class="form-control" />
                </div>
            </div> 
            <div class="form-group row">
                <label for="text3" class="col-4 col-form-label">Enter Department</label> 
                <div class="col-8">
                <input onChange={(e)=>{
                    setData({...data,FacultyDepartment:e.target.value})
                }}  type="text" class="form-control" />
                </div>
            </div> 
            <div class="form-group row">
                <div class="offset-4 col-8">
                <button onClick={()=>{
                    const apiUrl = "https://62d6c51451e6e8f06f12bd5d.mockapi.io/faculties";

                    fetch(apiUrl,{
                        method:"POST",
                        body:JSON.stringify(data),
                        headers:{
                            "Content-Type":"application/json"
                        }
                    })
                    .then(res=>res.json())
                    .then(res=>{
                        navigate('/faculty');
                    });
                }} name="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
        </>
    );
}

export default AddFaculty;