/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  Bars4Icon,
  UserCircleIcon,
  UsersIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid-3 grid-cols-3 bg-white shadow-md p-5 md:px-10 flex flex-row">
      <div className="relative flex items-center h-10 cursor-pointer my-auto w-1/3">
        <Image
          src="https://links.papareact.com/qd3"
          width={100}
          height={100}
          style={{ objectFit: "contain", objectPosition: "left" }}
          alt={""}
        />
      </div>
      <div className="flex flex-row items-center md:border-2  p-2 rounded-full w-2/3  md:shadow-sm">
        <input
          type="text"
          className="pl-5 text-gray-600 placeholder-gray-400 flex-grow bg-transparent outline-none "
          placeholder="Start your search"
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 text-white bg-red-500 cursor-pointer rounded-full p-2 md:mx-2" />
      </div>
      <div
        className="flex space-x-4 items-center text-gray-500 justify-end text-gray"
        style={{ width: "100%" }}
      >
        <p>Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex space-x-2 items-center border-2 p-2 cursor-pointer rounded-full">
            <Bars4Icon className="h-6"/>
            <UserCircleIcon className="h-6"/>
        </div>
      </div>
    </header>
  );
}

export default Header;
