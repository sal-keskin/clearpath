import MapContainer from "./components/Map/MapContainer";
import RouteComparison from "./components/Comparison/RouteComparison";
import SearchBar from "./components/Search/SearchBar";
import RouteInfo from "./components/Routes/RouteInfo";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
              Clear Path Commute
            </p>
            <h1 className="text-2xl font-semibold">Breathe easier on every route.</h1>
          </div>
          <button className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
            Start demo
          </button>
        </div>
      </header>

      <main className="mx-auto grid max-w-6xl gap-6 px-6 py-8 lg:grid-cols-[360px_1fr]">
        <section className="space-y-6">
          <SearchBar />
          <RouteInfo />
          <RouteComparison />
        </section>
        <section className="rounded-3xl border border-dashed border-slate-300 bg-white p-6">
          <MapContainer />
        </section>
      </main>
    </div>
  );
};

export default App;
