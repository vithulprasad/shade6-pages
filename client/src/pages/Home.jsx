
function Home() {
  return (
    <div
    className="w-screen h-screen linear-gradient flex "
    style={{
      backgroundImage:
        "linear-gradient(to right, rgb(220, 252, 231), rgb(255, 255, 255), rgb(255, 255, 255))",
    }}
  >
    <div className="w-1/3 h-full  flex justify-center items-center">
      <div className="flex flex-col h-1/2  items-start justify-center">
        <h1 className="text-5xl font-bold ">architecture</h1>
        <h3 className="text-3xl font-semibold">single page website</h3>
        <div className="h-20 flex justify-center items-center">
          <h3 className="bg-gray-600 text-white text-2xl px-3 py-1">
            www.ekosalvinus
          </h3>
        </div>
      </div>
    </div>
    <div className="w-1/2 h-full  flex justify-start items-center ">
      <div className="w-full h-[80%] shadow-lg">
        <div className="w-full h-[15%]  flex">
          <div className="w-[40%] h-full flex justify-center items-center">
            <h2 className="text-2xl">ArchiWeb</h2>
          </div>
          <div className="w-[60%] h-full">
            <ul className="flex justify-around items-center h-full">
              <li>Home</li>
              <li>Projects</li>
              <li>About</li>
              <li>Contact</li>
              <li className="w-[30px] h-[30px] flex justify-center items-center">
                <svg
                  fill="#000000"
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon line-color"
                >
                  <line
                    x1="21"
                    y1="21"
                    x2="15"
                    y2="15"
                    className="stroke-current text-teal-500 stroke-2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></line>
                  <circle
                    cx="10"
                    cy="10"
                    r="7"
                    className="stroke-current text-black stroke-2 fill-none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></circle>
                </svg>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full h-[60%]  relative">
          <div className="w-[35%] h-full absolute flex items-center">
            <div className="w-[500px] h-[200px]  p-6 bg-white bg-opacity-85">
              <h1 className="text-2xl font-semibold">
                Best solution for your home
              </h1>
              <p className="font-thin">
                You’re in luck! I’ve recently been playing around with
                gradients in Tailwind CSS and{" "}
              </p>
            </div>
          </div>
          <div className="w-[100%] h-full flex justify-end ">
            <div className="h-full w-[85%] ">
              <img
                className="w-full h-full"
                src="https://i.pinimg.com/564x/58/ca/0f/58ca0f27cc66c17ba8fd720e501b50a6.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-full h-[25%] bg-gray-300">
          <div className="w-full h-[20%] flex justify-center items-center">
            <h1 className="font-bold">Our Services</h1>
          </div>
          <div className="w-full h-[80%] flex justify-around">
            <div className="h-full w-1/3 px-14  flex flex-col justify-center items-center">
              <div className="w-[40px] h-[40px] rounded-full ">
                <img
                  className="w-full h-full rounded-full"
                  src="https://i.pinimg.com/564x/24/22/a6/2422a6e53c2a01f5bf795f3892e28656.jpg"
                  alt=""
                />
              </div>
              <h1 className="text-xl font-semibold">Planning</h1>
              <p className="font-thin text-xs text-center">
                Our Services Line One Servive line two
              </p>
            </div>
            <div className="h-full w-1/3 px-14  flex flex-col justify-center items-center">
              <div className="w-[40px] h-[40px] rounded-full ">
                <img
                  className="w-full h-full rounded-full"
                  src="https://i.pinimg.com/564x/24/22/a6/2422a6e53c2a01f5bf795f3892e28656.jpg"
                  alt=""
                />
              </div>
              <h1 className="text-xl font-semibold">Planning</h1>
              <p className="font-thin text-xs text-center">
                Our Services Line One Servive line two
              </p>
            </div>
            <div className="h-full w-1/3 px-14  flex flex-col justify-center items-center">
              <div className="w-[40px] h-[40px] rounded-full ">
                <img
                  className="w-full h-full rounded-full"
                  src="https://i.pinimg.com/564x/24/22/a6/2422a6e53c2a01f5bf795f3892e28656.jpg"
                  alt=""
                />
              </div>
              <h1 className="text-xl font-semibold">Planning</h1>
              <p className="font-thin text-xs text-center">
                Our Services Line One Servive line two
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home
