import Category from "./components/Category/Category";
import Header from "./components/Header/Header";

const App = () => {
	return (
		<div className="max-w-7xl mx-auto">
			<div className="border-b my-5">
				<Header></Header>
			</div>
			<Category></Category>
		</div>
	);
};

export default App;
