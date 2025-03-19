import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
export default function CreateStudent(){
    const[id, setId] = useState("");
    const[name, setName] = useState("");
    const[place, setPlace] = useState("");
    const[phone, setPhone] = useState("");
    const[validation, setValidation]=useState(false);
    const navigate = useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const studentData=({id, name, place, phone});
        console.log(studentData)
        fetch("http://localhost:8000/students",
            {method:'POST',
             headers:{
                "content-type":"application/json"
             },
             body:JSON.stringify(studentData)
              
    })
        .then((res)=>{
        alert("Student data has been saved successfully");
        navigate("/")
    })
        .catch((err)=>console.log(err.message)
    )
    }
    return(
        <div className="container flex flex-col items-center justify-center w-[80%] bg-amber-200 rounded-lg p-4 mx-auto">
            <h2 className="text-black font-bold">Add New Students</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="id">ID</label>
                <input type="text" id="id" name="id" required value= {id} onChange={e=>setId(e.target.value)}  onMouseDown={()=>setValidation(true)} className="border-2 border-white flex p-2"/>
                {id.length===0 && validation && <span className="error-message">Please enter your ID <br /></span>}

                <label htmlFor="name">NAME</label>
                <input type="text" id="name" name="name" required value={name} onChange={e=>setName(e.target.value)} className="border-2 border-white flex p-2"/>
                {name.length===0 && validation && <span className="error-message">Please enter your name <br /></span>}

                <label htmlFor="place">PLACE</label>
                <input type="text" id="place" name="place" required value={place} onChange={e=>setPlace(e.target.value)} className="border-2 border-white flex p-2"/>
                {place.length===0 && validation && <span className="error-message">Please enter your Location <br /></span>}

                <label htmlFor="phone">PHONE</label>
                <input type="text" id="phone" name="phone" required value={phone} onChange={e=>setPhone(e.target.value)} className="border-2 border-white flex p-2"/>
                {phone.length===0 && validation && <span className="error-message">Please enter your phone number <br /></span>}

                <div className="flex items-start">
                <button className="btn-save p-4 rounded-lg bg-green-600 text-white mt-[10px] w-1/2">Save</button>
                <Link to="/" className="btn-back p-4 rounded-lg bg-red-600 text-white m-[10px] w-1/2 flex justify-center">Back</Link>
                </div>

                
            </form>
        </div>
    )
}