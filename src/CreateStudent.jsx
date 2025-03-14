import { useState } from "react"
import { Link } from "react-router-dom"
export default function CreateStudent(){
    useState("")
    return(
        <div className="container flex flex-col items-center justify-center w-[80%] bg-amber-200 rounded-lg p-4 mx-auto">
            <h2 className="text-black font-bold">Add New Students</h2>
            <form>
                <label htmlFor="id">ID</label>
                <input type="text" id="id" name="id" className="border-2 border-white flex p-2"/>

                <label htmlFor="name">NAME</label>
                <input type="text" id="name" name="name" className="border-2 border-white flex p-2"/>

                <label htmlFor="place">PLACE</label>
                <input type="text" id="place" name="place" className="border-2 border-white flex p-2"/>

                <label htmlFor="phone">PHONE</label>
                <input type="text" id="phone" name="phone" className="border-2 border-white flex p-2"/>

                <div className="flex items-start">
                <button className="btn-save p-4 rounded-lg bg-green-600 text-white mt-[10px] w-1/2">Save</button>
                <Link to="/" className="btn-back p-4 rounded-lg bg-red-600 text-white m-[10px] w-1/2 flex justify-center">Back</Link>
                </div>

                
            </form>
        </div>
    )
}