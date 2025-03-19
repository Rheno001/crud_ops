import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function StudentTable(){
    const [students, setStudents]=useState("");
    const navigate = useNavigate();
    const DisplayDetails=(id)=>{
        navigate("/student/view/" +id);
    }
    
    useEffect(()=>{
        fetch('http://localhost:8000/students')
        .then((res)=>res.json())
        .then((data)=>
            setStudents(data)).catch((error)=>
            console.log(error.message))
    },[])
    return(
        <div className="container flex justify-between flex-col m-auto bg-gray-400 rounded-lg p-4">
            <h2 className="text-white my-[10px] p-4 text-2xl text-center">Student Records</h2>
            <div className="table-container">
                <Link to="/student/create" className="btn-add p-2 bg-green-600 text-white rounded-lg">Add New Student</Link>
                <table className="my-4 p-[50px] h-[200px] bg-white/30 rounded-lg overflow-hidden">
                    <thead className="my-[200px]">
                        <tr className=" bg-green-400 rounded-4xl my-[200px]">
                            <th className="px-[20px]">ID</th>
                            <th className="px-[20px]">Name</th>
                            <th className="px-[20px]">Place</th>
                            <th className="px-[20px]">Phone</th>
                            <th className="px-[20px]">Actions</th>
                        </tr>
                    </thead>
                    <tbody>{
                        students && students.map((item)=>(
                            <tr key={item.id}>
                            <td className="px-[20px]">{item.id}</td>
                            <td className="px-[20px]">{item.name}</td>
                            <td className="px-[20px]">{item.place}</td>
                            <td className="px-[20px]">{item.phone}</td>
                            <td className="px-[20px]">
                                <button onClick={()=>DisplayDetails(item.id)} className="btn">View</button>
                                <a href="" className="btn">Edit</a>
                                <a href="" className="btn btn-del bg-red-600">Delete</a>
                            </td>
                        </tr>
                        )
                        )
                       }
                    </tbody>
                </table>
            </div>
        </div>
    )
}