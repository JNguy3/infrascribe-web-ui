import { Link } from "react-router-dom"
import logo from "../assets/laptopguy.jpg"
export const HeroSection = () =>{
    return(
        <div className="flex items-center px-100 pt-40" id="hero-container">
            <div className="flex flex-col w-1/2"id="hero-left">
                <h1 className="text-[50px] font-semibold text-[#2563eb]">Build Cloud Infrastructure <br />in Minutes!</h1>
                <p className="text-slate-500 text-[20px] mt-4">
                    Describe your application, and our AI Cloud Advisor will generate production-<br />ready Terraform
                    Code. No cloud expertise required.
                </p>
                <div className="flex justify-start gap-4 pt-5">
                    <button className="bg-black text-white hover:bg-gray-700 rounded-xl px-5 py-2"> <Link to = "/chat"> Start building <span className="text-xl">→</span> </Link></button>
                    <button className="border border-gray-300 rounded-xl px-5 py-2 hover:bg-gray-100"> Watch Demo </button>
                </div>
                <div className="flex gap-[60px] pt-7">
                    <span>✓ No credit card</span>
                    <span>✓ Free trial </span>
                </div>
            </div>
            <div className="w-1/2 "id="hero-right">
                <img src = {logo} alt ="laptop guy" className="rounded-xl w-full h-auto shadow-xl/30"></img>
            </div>
        </div>
    )
}
export default HeroSection