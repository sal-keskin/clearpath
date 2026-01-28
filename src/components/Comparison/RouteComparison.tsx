const RouteComparison = () => {
  return (
    <div className="space-y-4 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500">Recommendation</p>
        <h3 className="text-lg font-semibold text-emerald-900">Take the garden loop today</h3>
      </div>
      <ul className="space-y-3 text-sm text-emerald-900">
        <li className="flex items-center justify-between">
          <span>Air pollution reduction</span>
          <span className="font-semibold">-27%</span>
        </li>
        <li className="flex items-center justify-between">
          <span>Pollen reduction</span>
          <span className="font-semibold">-50%</span>
        </li>
        <li className="flex items-center justify-between">
          <span>Extra time</span>
          <span className="font-semibold">+2 min</span>
        </li>
      </ul>
      <p className="text-sm text-emerald-800">
        We will surface live comparisons after air quality and pollen data are wired up.
      </p>
    </div>
  );
};

export default RouteComparison;
