import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));

function Home(){
  let facultyImagePath = [
    "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/6---28-04-2023-02-06-07.jpg",
    "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/5---29-04-2023-11-00-29.jpg",
    "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/3---28-04-2023-02-02-42.jpg"
  ];

  let faculty = [
    {
      name:"Dr. Pradhuman jadeja",
      path:"https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/6---28-04-2023-02-06-07.jpg"
    },
    {
      name:"Dr. Gopi Sanghani",
      path:"https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/5---29-04-2023-11-00-29.jpg"
    },
    {
      name:"Dr. Nilesh Gambhava",
      path:"https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/3---28-04-2023-02-02-42.jpg"
    }
  ]
  const [facIndex,setFacIndex] = useState(0);
  
  return(
    <>
      <button onClick={()=>{
          setFacIndex((facIndex+1)%3);
      }}>
        Change Faculty
      </button>

      
      <br/>

      <div class="card" style={{width:'18rem'}}>
        <img src={faculty[facIndex].path} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{faculty[facIndex].name}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      {/* <img src={facultyImagePath[facIndex]} width={200} /> */}
    </>
  );
}

root.render(
  <>
    <Home/>
  </>
);