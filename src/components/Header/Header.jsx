import logo from "../../assets/Airbnb_Logo.png";
import { BiSearch } from "react-icons/bi";
import { IoReorderThree } from "react-icons/io5";
import { BsGlobe, BsPersonCircle } from "react-icons/bs";
import { useState } from "react";

const Header = () => {
	const [selectedContinent, setSelectedContinent] = useState("");

	return (
		<>
			<div className="flex flex-row items-center justify-between gap-3 md:gap-0 h-16">
				<a href="/">
					<img className="hidden md:block w-24" src={logo} alt="" />
				</a>
				<div className="border-[1px] w-full md:w-96 lg:ml-32 py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
					<div className="flex flex-row items-center justify-between">
						<div className="dropdown">
							<label tabIndex={0} className="m-4 font-semibold cursor-pointer">
								{/* {placeName == "Anywhere" ? "Anywhere" : placeName} */}
								Anywhere
							</label>
							<ul
								tabIndex={0}
								className="mt-5 dropdown-content z-[1] menu shadow bg-base-100 rounded-full w-64 md:w-96"
							>
								<input
									type="text"
									placeholder="Search by continent : asia, europe etc"
									value={selectedContinent}
									className="input input-bordered w-full rounded-full"
									onChange={(e) => setSelectedContinent(e.target.value)}
								/>
							</ul>
						</div>
						<div className="text-sm font-semibold px-6 border-x-[1px] flex-1 text-center">
							Any Week
						</div>
						<div
							className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3"
							// onClick={() => filterByContinent(selectedContinent)}
						>
							<div className="hidden sm:block">Search</div>
							<div className="p-2 bg-rose-500 rounded-full text-white">
								<BiSearch size={18} />
							</div>
						</div>
					</div>
				</div>
				<div className="hidden sm:block md:flex items-center justify-between">
					<h1 className="hidden md:block font-medium hover:bg-slate-100 px-3 py-2 rounded-full cursor-pointer">
						Airbnb your home
					</h1>
					<span className="hidden md:block hover:bg-slate-100 p-3 rounded-full cursor-pointer">
						<BsGlobe />
					</span>
					<div className="flex items-center gap-2 border border-slate-300 px-3 py-2 rounded-full hover:shadow-md cursor-pointer">
						<IoReorderThree size={24} />
						<BsPersonCircle
							className="bg-white text-slate-500 rounded-full"
							size={24}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
