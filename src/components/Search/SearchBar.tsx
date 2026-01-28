const SearchBar = () => {
  return (
    <div className="space-y-4 rounded-2xl bg-white p-6 shadow-sm">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Route search</p>
        <h2 className="text-xl font-semibold text-slate-900">Set your commute</h2>
      </div>
      <div className="space-y-3">
        <label className="block text-sm font-semibold text-slate-700">
          Origin
          <input
            className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700"
            placeholder="Use current location"
            type="text"
          />
        </label>
        <label className="block text-sm font-semibold text-slate-700">
          Destination
          <input
            className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700"
            placeholder="Search for a place"
            type="text"
          />
        </label>
        <button className="w-full rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white">
          Find healthy routes
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
