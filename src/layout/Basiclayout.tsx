import {Link} from "react-router-dom";

function Basiclayout() {


    return (
        <>
            {/* Header */}
            <header className="bg-lime-300 text-white py-4 shadow-lg">
                <div className="container mx-auto flex justify-between items-center">
                    {/*- Logo */}
                    <div className="text-2xl font-bold">
                        <Link to="/" className="hover:text-lime-200 transition">Seven</Link>
                    </div>

                    {/* Navigation */}
                    <nav className="hidden md:flex space-x-6 text-lg">
                        <Link to="/" className="hover:text-lime-200 transition">Home</Link>
                        <Link to="/todo" className="hover:text-lime-200 transition">Todo</Link>
                        <Link to="/product" className="hover:text-lime-200 transition">Product</Link>
                        <Link to="/contact" className="hover:text-lime-200 transition">Contact</Link>
                    </nav>

                    {/* User Action Button (Login/Profile) */}
                    <div className="flex items-center space-x-4">
                        <button className="bg-white text-lime-500 px-4 py-2 rounded-full font-semibold hover:bg-lime-100 transition">
                            Login
                        </button>
                        {/* For Profile */}
                        {/* <img src="https://via.placeholder.com/40" alt="User Profile" class="w-10 h-10 rounded-full"> */}
                    </div>



                </div>
            </header>
        </>
    );
}

export default Basiclayout;