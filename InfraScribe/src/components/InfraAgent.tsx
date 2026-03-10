import Editor from '@monaco-editor/react'
import logo from '../assets/infrascribe logo.png'
import { Link } from 'react-router-dom'
export const BotChat = () =>{
    return(
        <>
        <nav className="flex items-center justify-between bg-gray-900 px-4 pr-9 py-4 min-h-16 border-b border-gray-800">
            <div className="flex items-center">
                <img src={logo} alt="logo" className="w-30 h-20" />
                <span className = "text-white text-3xl font-semibold ml-2"> InfraScribe!</span>
            </div>
            <div className="flex gap-4 items-center text-white [&>button]:px-3 [&>button]:py-1 [&>button]:rounded text-xl">
                <Link to="/"><button className="hover:bg-sky-700 ">Home</button></Link>
                <button className="hover:bg-sky-700">Save</button>
                <button className="hover:bg-sky-700">Export</button>
            </div>
        </nav>
        <div>
            <div className='bg-white px-4 py-4 w-[1300px]'>
                <h2>AI Cloud Advisor</h2>
                <p>Describe your infrastructure needs</p>
            </div>
            <div>

            </div>
        </div>
        </>
    )
}
export default BotChat