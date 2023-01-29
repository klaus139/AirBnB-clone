/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image"

function Header() {
  return (
 <div className="sticky top-0 z-50 grid-3 grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">
    <div className="relative flex items-center h-10 cursor-pointer ">
        <Image 
                  src="https://links.papareact.com/qd3"
                  width={100}
                  height={100}
                  style={{ objectFit: "contain", objectPosition: "left" }} alt={""}
        
        />
    </div>

    {/* search section */}

    <div>
        <input type='text' placeholder='Start your search' />
    </div>
    </div>
 
  )
}

export default Header