export const Taxes = () => {
	return (
		<div className="w-1/2 mx-auto flex items-center border p-5 justify-between rounded-lg my-5">
			<div className="flex">
				<h2 className="mr-2 text-black font-semibold">Display total price |</h2>
				<p className="text-slate-500">Includes all fees, before taxes</p>
			</div>
			<input
				className="bg-stone-400 border border-slate-400 toggle h-9 w-[60px]"
				type="checkbox"
				checked
			/>
		</div>
	);
};
