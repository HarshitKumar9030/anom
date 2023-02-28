import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"


export default function Navbar() {
    const router = useRouter()
    const [isOpen, setisOpen] = useState(false)
    const drawer = () => {
        setisOpen(!isOpen)
    }
    useEffect(() => {
        const closeDrawer = (e) => {
            if (e.key === "Escape") {
                setisOpen(false)
            }
        }
        window.addEventListener("keydown", closeDrawer)
        return () => {
            window.removeEventListener("keydown", closeDrawer)
        }
    }, [])
    useEffect(() => {
        const closeDrawer = (e) => {
            if (e.target.classList.contains("damn")) {
                setisOpen(false)
            }
        }
        window.addEventListener("click", closeDrawer)
        return () => {
            window.removeEventListener("click", closeDrawer)
        }
    }, [])
    

    return (
        <>
            <div className="h-20 fixed max-w-[1260px] w-full">
                <div className="wrapper flex p-4  justify-between items-center">
                    <div className="logo flex items-center p-4">
                        <div className="logoText font-bold text-gray-900 text-4xl">Anom</div>
                    </div>
                    <div className="links">
                        {/* LARGE SCREEN*/}
                        <ul className="space-x-8 duration-300 text-lg justify-center hidden lg:flex items-center ">
                            <li className="text-white hover:text-gray-900 font-semibold">
                                <Link href="/">
                                    What's Anom?
                                </Link>
                            </li>
                            <li className="text-white hover:text-gray-900 font-semibold">
                                <Link href="/">
                                    Contacts
                                </Link>
                            </li>
                            <li className="text-white hover:text-gray-900 font-semibold">
                                <Link href="/">
                                    Guidelines
                                </Link>
                            </li>
                            <li className="text-white hover:text-gray-900 font-semibold">
                                <Link href="/">
                                    Faq's
                                </Link>
                            </li>
                            <li className="list-none"><button className="px-8 hover:shadow-[] ml-[180px] py-4 text-white hover:bg-gray-800 duration-200 hover:bg-opacity-70 bg-gray-900 font-bold rounded-full">Get Anom</button></li>
                        </ul>
                        {/* SMALL SCREEN */}
                        <div onClick={drawer} className="p-4 flex lg:hidden">
                            <svg className={`${isOpen ? 'text-white' : 'text-gray-900'} z-50 h-10 w-10 `} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm7 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
               // sliding drawer
                <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-70 z-20">
                    <div className="flex flex-col damn justify-center items-center h-full">
                        <div className="elemets flex flex-col justify-center items-center h-full">
                            <div className="flex flex-col justify-center items-center">
                                <div className="logo flex justify-center items-center p-4">
                                    <div className="logoText font-bold mb-4 text-gray-100 text-6xl">Anom</div>
                                    </div>
                                <ul className="space-y-8 duration-300 text-lg justify-center flex flex-col items-center ">
                                    <li className="text-white hover:text-gray-200 font-semibold">
                                        <Link href="/">
                                            What's Anom?
                                        </Link>
                                    </li>
                                    <li className="text-white hover:text-gray-200 font-semibold">
                                        <Link href="/">
                                            Contacts
                                        </Link>
                                    </li>
                                    <li className="text-white hover:text-gray-200 font-semibold">
                                        <Link href="/">
                                            Guidelines
                                        </Link>
                                    </li>
                                    <li className="text-white hover:text-gray-200 font-semibold">
                                        <Link href="/">
                                            Faq's
                                        </Link>
                                    </li>
                                    <li className="list-none"><button className="px-8 mt-4 py-4 text-white hover:bg-gray-800 duration-200 hover:bg-opacity-70 bg-gray-900 font-bold rounded-full">Get Anom</button></li>
                                </ul>
                                    </div>
                                    </div>
                                    </div>
                        </div>
            )}
        </>
    )
}