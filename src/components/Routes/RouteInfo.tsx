const RouteInfo = () => {
  return (
    <div className="space-y-4 rounded-2xl bg-white p-6 shadow-sm">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Current route</p>
        <h3 className="text-lg font-semibold text-slate-900">Downtown → Campus</h3>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl bg-slate-50 p-4">
          <p className="text-xs text-slate-500">ETA</p>
          <p className="text-lg font-semibold text-slate-900">22 min</p>
        </div>
        <div className="rounded-xl bg-slate-50 p-4">
          <p className="text-xs text-slate-500">Distance</p>
          <p className="text-lg font-semibold text-slate-900">7.4 km</p>
        </div>
        <div className="rounded-xl bg-emerald-50 p-4">
          <p className="text-xs text-emerald-700">Risk score</p>
          <p className="text-lg font-semibold text-emerald-700">Low (28)</p>
        </div>
      </div>
      <p className="text-sm text-slate-600">
        Route details will update once the Google Routes API is connected.
      </p>
    </div>
  );
};

export default RouteInfo;
