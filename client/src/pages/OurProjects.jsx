
import axios from 'axios'
import { useEffect, useState } from 'react'
function OurProjects() {
    const [project,setProject] = useState([])
    useEffect(()=>{
        const value = async()=>{
           await axios.get('http://localhost:4000/getProjects')
           .then((res)=>{
          if(res.data.success==true){
              setProject(res.data.data)
          }else{
            alert("something went wrong")
          }
           })
           .catch((err)=>{
            alert(err.message)
           })
        }
        value()
    })
  return (

                <div className='flex flex-col w-full h-[50rem]'>
                    <div className=' w-full h-[20%] flex justify-center items-center'>
                        <div className=' h-36 w-[30%] flex justify-center items-center'>
                            <span className='font-bold text-4xl'>OUR PROJECTS</span>
                        </div>
                        <div className='bg-white flex  justify-around  w-[70%] ' >
                            <a href="">ALL</a>
                            <a href="">FURNITURE</a>
                            <a href="">DESIGN</a>
                            <a href="">HOUSE</a>
                        </div>
                    </div >
                    <div className='flex flex-col pl-24 w-full  h-[80%] '>
                        <div className='w-full  grid grid-cols-3 overflow-y-scroll gap-4'>
                            {project.map((val,index)=>(
                                     <div key={index} className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                     <a href="#">
                                         <img className="rounded-t-lg" src="https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129804.jpg?w=996&t=st=1703190169~exp=1703190769~hmac=8c161d243c22ae69dac6db3142dc7e2fd3bf7080cc5e95dbf5242c5f375facb2 " alt="" />
                                     </a>
                                     <div className="p-5">
         
                                         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
         
                                     </div>
                                 </div>
                            ))}
                       
                          
                        </div>
                    </div>
    
                </div >
    
  )
}

export default OurProjects
