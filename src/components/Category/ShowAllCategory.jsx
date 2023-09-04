import { AiFillStar } from "react-icons/ai";
import { LiaGreaterThanSolid } from "react-icons/lia";

const ShowAllCategory = ({ specificCategory }) => {
	return (
		<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-20 mx-2 lg:mx-0">
			{specificCategory.map((category, index) => (
				<div key={index} className="card group relative">
					<figure>
						<img
							className="h-64 scale-110  hover:scale-125 duration-500"
							src={category.img}
							alt="destination"
						/>
					</figure>
					<span className="absolute top-3 right-3 text-white">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
							/>
						</svg>
					</span>
					<div className="hidden group-hover:block absolute top-1/3 bg-white rounded-full text-black right-3 p-2 cursor-pointer">
						<LiaGreaterThanSolid size={13} />
					</div>
					<div className="card-body p-0 mt-2">
						<div className="flex items-center justify-between">
							<h2 className="card-title">{category.destination}</h2>
							<h4 className="flex items-center gap-1">
								<AiFillStar /> {category.rating}
							</h4>
						</div>
						<span className="text-slate-500">
							Stay With {category.hostName} <br /> {category.time} <br />
							<span className="font-semibold text-black">
								${category.price} night
							</span>
						</span>
					</div>
				</div>
			))}
		</div>
	);
};

export default ShowAllCategory;
