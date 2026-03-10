import { Link } from "react-router-dom";
import logo from "../assets/infrascribe logo.png"

export const InfraNav = () => {
    return(
        // <Navbar expand ="lg" bg="dark" data-bs-theme="dark">
        //     <Container fluid>
        //         <Navbar.Brand>
        //             <img src={logo} alt="logo" width={100} height={0} className="inline-block align-top"/>
        //             <text>InfraScribe</text>
        //         </Navbar.Brand>
        //     </Container>
            
        // </Navbar>

        <nav className="flex items-center justify-between bg-gray-900 px-4 pr-9 py-4 min-h-16 border-b border-gray-800">
            <div className="flex items-center">
                <img src={logo} alt="logo" className="w-30 h-20" />
                <span className = "text-white text-3xl font-semibold ml-2"> InfraScribe!</span>
            </div>

            <div className="flex gap-4 items-center text-white [&>button]:px-3 [&>button]:py-1 [&>button]:rounded text-xl">
                <button className="hover:bg-sky-700 ">Home</button>
                <button className="hover:bg-sky-700">Features</button>
                <button className="hover:bg-sky-700">How It Works</button>
                <button className="hover:bg-sky-700">Pricing</button>
                <Link to="/chat"><button className="hover:bg-sky-700">Try it For Free</button></Link>
            </div>
        </nav>
    );
}

export default InfraNav;