import { useState } from "react";
import CareerForm from "../../Forms/CareerForm";
import "./career.module.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/storage/store";
import { addCareer } from "../../redux/slice/configSlice";

export default function CreateCareer(){
    const dispatch = useDispatch<AppDispatch>();
    const [payload, setPayload] = useState({
        jobTitle: "",
        jobDescription: "",
        jobType: "",
        experienceLevel: "",
      });
    
      const handleChange = (e: any) => {
        const { name, value } = e.target;
        setPayload((prev: any) => ({ ...prev, [name]: value }));
      };
    
      const handleSubmit = (e: any) => {
        debugger
        e.preventDefault();
        console.log("Submitted payload:", payload);
        dispatch(addCareer(payload)).then((item:any)=>{
            console.log(item);
            setPayload({
                jobTitle: "",
        jobDescription: "",
        jobType: "",
        experienceLevel: "",
            })
        }).catch(()=>{
            alert("Error occured while creating career");
        });
      };
    return (
        <>
         <div className="container">
         <h2 className="heading">Create Career Opportunity</h2>
         <CareerForm payload={payload} handleChange={handleChange} handleSubmit={handleSubmit}/>
         </div>
        </>
    )
}