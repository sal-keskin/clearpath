const MapContainer = () => {
  return (
    <div className="flex h-[520px] flex-col items-center justify-center gap-4 rounded-2xl bg-slate-100 p-6 text-center">
      <div className="rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
        Map Placeholder
      </div>
      <p className="text-lg font-semibold text-slate-800">Google Maps integration</p>
      <p className="text-sm text-slate-600">
        Wire up the Maps JavaScript API in Phase 2 to render routes and risk overlays.
      </p>
    </div>
  );
};

export default MapContainer;
