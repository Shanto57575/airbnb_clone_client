export const Taxes = () => {
	return (
		<div className="text-sm md:text-base w-full md:w-1/2 mx-2 md:mx-auto flex items-center border p-5 justify-between rounded-lg my-5">
			<div className="flex">
				<h2 className="mr-2 text-black font-semibold">Display total price</h2>
				<p className="hidden md:block text-slate-500 border-l border-slate-500">
					<span className="ml-2">Includes all fees, before taxes</span>
				</p>
			</div>
			<input
				className="bg-stone-400 border border-slate-400 toggle h-9 w-[60px]"
				type="checkbox"
			/>
		</div>
	);
};
