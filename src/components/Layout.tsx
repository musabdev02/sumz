import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom"
// components
import Header from "./Header"
// context
import { useResult } from "../contextAPI/ResultContext";
import { useInput } from "../contextAPI/InputContext";
import { useError } from "../contextAPI/ErrorContext";

const Layout = () => {
    const { setResult } = useResult();
    const { setInput } = useInput();
    const { setUError } = useError();
    const location = useLocation();


    useEffect(() => {
        setResult("");
        setInput("");
        setUError("");
    }, [location.pathname, setResult, setInput, setUError])

    return (
        <div className="relative">
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full grid-bg"></div>
                <div className="absolute w-[150px] sm:w-[350px] h-[150px] sm:h-[350px] top-0 left-0 blur-[100px] sm:blur-[300px] saturate-[150%] bg-[#fd3a4e]"></div>
                <div className="absolute w-[150px] sm:w-[350px] h-[150px] sm:h-[350px] bottom-0 right-0 blur-[100px] sm:blur-[300px] saturate-[150%] bg-[#855afc]"></div>
            </div>

            <div className="relative z-10 ">
                <Header />
                <div className="max-w-[80rem] mx-auto p-4 mt-8">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout