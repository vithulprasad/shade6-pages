

function About() {
  return (
<div className='flex flex-row w-full h-[30rem] '>
    <div className=' w-[60%] h-full border flex justify-end'>
        <div className="w-[90%] h-full">
            <img className="w-full h-full" src="https://i.pinimg.com/564x/5a/1c/22/5a1c2277034e778fcc5ff76d57fbc0c6.jpg" alt="" />
        </div>
    </div>
    <div className=' w-[40%] h-full  border p-10'>
        <h1 className="text-4xl font-semibold">ABOUT US</h1>
        <p className="text-2xl my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo nec mauris finibus sollicitudin. Suspendisse potenti. Vivamus eleifend nisi ac arcu lacinia, non ultrices metus pharetra. Sed ultricies, urna ut ullamcorper malesuada, lectus elit bibendum orci, ut scelerisque odio quam ac justo. Sed nec justo nec urna scelerisque cursus.
</p>
<p className="font-bold text-2xl">More</p>
    </div>
</div>

  )
}

export default About
