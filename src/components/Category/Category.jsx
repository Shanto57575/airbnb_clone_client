import { BiSolidBed } from "react-icons/bi";
import { FaUmbrellaBeach } from "react-icons/fa";
import { GiCampingTent } from "react-icons/gi";
import { GiMountainCave } from "react-icons/gi";
import { GiIsland } from "react-icons/gi";
import { FaSnowflake } from "react-icons/fa";

const Category = () => {
	return (
		<div className="pt-4 flex flex-row flex-wrap items-center gap-3 md:gap-0 justify-evenly font-medium">
			<div className="text-center">
				<BiSolidBed className="ml-4" />
				<h2>Rooms</h2>
			</div>
			<div>
				<FaUmbrellaBeach className="ml-4" />
				<h2>Beach</h2>
			</div>
			<div>
				<GiCampingTent className="ml-5" />
				<h2>Camping</h2>
			</div>
			<div>
				<GiMountainCave className="ml-3" />
				<h2>Caves</h2>
			</div>
			<div>
				<GiIsland className="ml-4" />
				<h2>Islands</h2>
			</div>
			<div>
				<FaSnowflake className="ml-3" />
				<h2>Arctic</h2>
			</div>
		</div>
	);
};

export default Category;
