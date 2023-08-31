/* eslint-disable react-hooks/exhaustive-deps */
import { BiSolidBed } from "react-icons/bi";
import { FaUmbrellaBeach, FaSnowflake } from "react-icons/fa";
import { GiCampingTent, GiMountainCave, GiIsland } from "react-icons/gi";

import { useEffect, useState } from "react";
import { Taxes } from "../Taxes/Taxes";
import ShowAllCategory from "./ShowAllCategory";

const Category = () => {
	const [activeCategory, setActiveCategory] = useState("room");

	const [allCategory, setAllCategory] = useState([]);
	const [specificCategory, setSpecificCategory] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/categories")
			.then((res) => res.json())
			.then((data) => {
				setAllCategory(data);
				setSpecificCategory(data);
			});
	}, []);

	const filterByCategory = (category) => {
		console.log(category);
		if (category === undefined) {
			setActiveCategory("room");
			setSpecificCategory(allCategory);
		} else {
			setActiveCategory(category);
			fetch(`http://localhost:5000/categories/${category}`)
				.then((res) => res.json())
				.then((data) => setSpecificCategory(data));
		}
	};

	useEffect(() => {
		filterByCategory();
	}, []);

	return (
		<>
			<div className="pt-4 flex flex-row flex-wrap items-center gap-3 md:gap-0 justify-evenly font-thin">
				<div
					className={`cursor-pointer hover:border-b-2 hover:border-slate-300  ${
						activeCategory === "room"
							? "border-b-2 border-black font-semibold"
							: ""
					}`}
					onClick={() => filterByCategory("room")}
				>
					<BiSolidBed className="ml-4" />
					<h2>Rooms</h2>
				</div>
				<div
					className={`cursor-pointer hover:border-b-2 hover:border-slate-300 ${
						activeCategory === "beach"
							? "border-b-2 border-black font-semibold"
							: ""
					}`}
					onClick={() => filterByCategory("beach")}
				>
					<FaUmbrellaBeach className="ml-4" />
					<h2>Beach</h2>
				</div>
				<div
					className={`cursor-pointer hover:border-b-2 hover:border-slate-300 ${
						activeCategory === "camping"
							? "border-b-2 border-black font-semibold"
							: ""
					}`}
					onClick={() => filterByCategory("camping")}
				>
					<GiCampingTent className="ml-5" />
					<h2>Camping</h2>
				</div>
				<div
					className={`cursor-pointer hover:border-b-2 hover:border-slate-300 ${
						activeCategory === "caves"
							? "border-b-2 border-black font-semibold"
							: ""
					}`}
					onClick={() => filterByCategory("caves")}
				>
					<GiMountainCave className="ml-3" />
					<h2>Caves</h2>
				</div>
				<div
					className={`cursor-pointer hover:border-b-2 hover:border-slate-300 ${
						activeCategory === "island"
							? "border-b-2 border-black font-semibold"
							: ""
					}`}
					onClick={() => filterByCategory("island")}
				>
					<GiIsland className="ml-4" />
					<h2>Islands</h2>
				</div>
				<div
					className={`cursor-pointer hover:border-b-2 hover:border-slate-300 ${
						activeCategory === "arctic"
							? "border-b-2 border-black font-semibold"
							: ""
					}`}
					onClick={() => filterByCategory("arctic")}
				>
					<FaSnowflake className="ml-3" />
					<h2>Arctic</h2>
				</div>
				<div
					className="flex items-center justify-between border border-slate-300 rounded-xl p-3 cursor-pointer"
					onClick={() => window.my_modal_3.showModal()}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-5 mr-2"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
						/>
					</svg>
					<h2>Filters</h2>
					<dialog id="my_modal_3" className="modal">
						<form method="dialog" className="modal-box space-y-3">
							<button className="mb-2 btn btn-sm btn-circle btn-ghost left-2 top-2">
								✕
							</button>
							<hr />
							<div>
								<h3 className="font-bold text-lg">Type of place</h3>
								<p>Search rooms, entire homes, or any type of place.</p>
							</div>
							<hr />
							<div>
								<h3 className="font-bold text-lg">Price range</h3>
								<p>Nightly prices before fees and taxes</p>
							</div>
						</form>
					</dialog>
				</div>
			</div>
			<Taxes></Taxes>
			<ShowAllCategory specificCategory={specificCategory}></ShowAllCategory>
		</>
	);
};

export default Category;
