import { BiSolidBed } from "react-icons/bi";
import { FaUmbrellaBeach, FaSnowflake } from "react-icons/fa";
import { GiCampingTent, GiMountainCave, GiIsland } from "react-icons/gi";
import { useEffect, useState } from "react";
import { Taxes } from "../Taxes/Taxes";
import ShowAllCategory from "./ShowAllCategory";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const Category = () => {
	const [activeCategory, setActiveCategory] = useState("room");

	const [allCategory, setAllCategory] = useState([]);
	const [specificCategory, setSpecificCategory] = useState([]);
	const [showButton, setShowButton] = useState("All");

	const [loader, setLoader] = useState(true);

	const [type, setType] = useState("any");
	const [range, setRange] = useState([100, 1000]);
	const [bedrooms, setBedrooms] = useState("any");
	const [beds, setBeds] = useState("any");
	const [bathrooms, setBathrooms] = useState("any");
	const [propertyType, setPropertyType] = useState("any");

	console.log(type, range, bedrooms, beds, bathrooms, propertyType);

	//SLider code

	const handleSliderChange = (newRange) => {
		setRange(newRange);
	};

	useEffect(() => {
		fetch("https://airbnb-clone-server-tawny.vercel.app/categories")
			.then((res) => res.json())
			.then((data) => {
				setAllCategory(data);
				setSpecificCategory(data);
				setLoader(false);
			});
	}, []);

	const filterByCategory = (category) => {
		console.log(category);
		if (category === undefined) {
			setActiveCategory("room");
			setSpecificCategory(allCategory);
		} else {
			setActiveCategory(category);
			fetch(
				`https://airbnb-clone-server-tawny.vercel.app/categories/${category}`
			)
				.then((res) => res.json())
				.then((data) => setSpecificCategory(data));
		}
	};

	const filterData = () => {
		fetch(
			`https://airbnb-clone-server-tawny.vercel.app/filter?type=${type}&priceRange=${range.join(
				"-"
			)}&bedrooms=${bedrooms}&beds=${beds}&bathrooms=${bathrooms}&propertyType=${propertyType}`
		)
			.then((res) => {
				if (res.status === 404) {
					return { count: 0, matchingData: [] };
				}
				return res.json();
			})
			.then((data) => {
				const { count, matchingData } = data;
				console.log(matchingData);
				setSpecificCategory(matchingData);
				setShowButton(count);
				console.log(matchingData.length);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		filterByCategory();
	}, []);

	useEffect(() => {
		filterData();
	}, [type, range, bedrooms, beds, bathrooms, propertyType]);

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
						className="font-bold w-6 h-5 mr-2"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
						/>
					</svg>
					<h2 className="text-black font-semibold">Filters</h2>
					<dialog id="my_modal_3" className="modal">
						<form
							method="dialog"
							className="modal-box w-full md:w-1/2 lg:w-7/12 max-w-5xl"
						>
							<div className="flex items-center justify-between">
								<button className="mb-2 btn btn-sm btn-circle btn-ghost left-2 top-2">
									✕
								</button>
								<span className="font-bold">Filters</span>
							</div>
							<hr />
							<div className="space-y-3 my-5">
								<h3 className="font-bold text-lg">Type of place</h3>
								<p className="font-medium">
									Search rooms, entire homes, or any type of place.
								</p>
								<select
									className="select select-bordered w-full"
									value={type}
									onChange={(e) => setType(e.target.value)}
								>
									<option disabled>Choose Your type</option>
									<option>Any type</option>
									<option>Room</option>
									<option>Entire home</option>
								</select>
							</div>
							<hr />
							<div className="space-y-3 my-4">
								<h3 className="font-bold text-lg">Price range</h3>
								<p className="font-medium">
									Nightly prices with fees and taxes
								</p>
								<div className="container mx-auto">
									<div>
										<Slider
											className="bg-blue-200 py-8"
											range
											min={100}
											max={1000}
											step={1}
											value={range}
											onChange={handleSliderChange}
										/>
									</div>
									<div className="mt-4 flex justify-between">
										<div className="w-full md:w-1/2 border p-2 rounded-lg">
											<span className="font-semibold">Minimum</span>
											<p>$ {range[0]}</p>
										</div>
										<p className="mx-3 mt-3">____</p>
										<div className="w-full md:w-1/2 border p-2 rounded-lg">
											<span className="font-semibold">Maximum</span>
											<p>$ {range[1]}</p>
										</div>
									</div>
								</div>
							</div>
							<hr />
							<div className="space-y-3 my-5">
								<h3 className="font-bold text-lg">Rooms and beds</h3>
								<p className="font-semibold">Bedrooms</p>
								<select
									className="select select-bordered w-full"
									value={beds}
									onChange={(e) => setBeds(e.target.value)}
								>
									<option disabled>Select How many Bedroom You want?</option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
									<option>6</option>
									<option>7</option>
									<option>8</option>
								</select>
								<p className="font-semibold">Beds</p>
								<select
									className="select select-bordered w-full"
									value={bedrooms}
									onChange={(e) => setBedrooms(e.target.value)}
								>
									<option disabled>Select How many Beds You want?</option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
									<option>6</option>
									<option>7</option>
									<option>8</option>
								</select>
								<p className="font-semibold">Bathrooms</p>
								<select
									className="select select-bordered w-full"
									value={bathrooms}
									onChange={(e) => setBathrooms(e.target.value)}
								>
									<option disabled>Select How many Bathrooms You want?</option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
									<option>6</option>
									<option>7</option>
									<option>8</option>
								</select>
							</div>
							<hr />
							<div className="space-y-3 mt-2">
								<h3 className="font-bold text-lg">Property type</h3>
								<div className="w-full">
									<select
										className="select select-bordered w-full"
										value={propertyType}
										onChange={(e) => setPropertyType(e.target.value)}
									>
										<option disabled>Select Property</option>
										<option>House</option>
										<option>Apartment</option>
										<option>Guesthouse</option>
										<option>Hotel</option>
									</select>
								</div>
							</div>
							<div className="text-end my-2">
								<button className="btn" onClick={() => filterData()}>
									Show {showButton} Places
								</button>
							</div>
						</form>
					</dialog>
				</div>
			</div>
			<Taxes></Taxes>
			{loader ? (
				<div className="w-full mx-auto text-center text-blue-500 md:text-7xl">
					L
					<span className="inline-block md:w-12 md:h-12 border-4 md:border-8 border-blue-500 border-dashed rounded-full animate-spin"></span>
					<span>ading....</span>
				</div>
			) : (
				<ShowAllCategory
					key={0}
					specificCategory={specificCategory}
				></ShowAllCategory>
			)}
		</>
	);
};

export default Category;
