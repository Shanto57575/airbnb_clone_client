import Category from "./components/Category/Category";
import ShowAllCategory from "./components/Category/ShowAllCategory";
import Header from "./components/Header/Header";
import { Taxes } from "./components/Taxes/Taxes";

const App = () => {
	return (
		<div className="max-w-7xl mx-auto">
			<div className="border-b my-5">
				<Header></Header>
			</div>
			<Category></Category>
			<Taxes></Taxes>
			<ShowAllCategory></ShowAllCategory>
		</div>
	);
};

export default App;
