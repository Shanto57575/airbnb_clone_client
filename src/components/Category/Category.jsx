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
	});

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
					<FaSnowflake className="mr-3" />
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
