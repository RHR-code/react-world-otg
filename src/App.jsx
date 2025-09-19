import { Suspense } from "react";
import "./App.css";
import Countries from "./components/Countries/Countries";

function App() {
  const fetchAllCountries = fetch(
    "https://openapi.programming-hero.com/api/all"
  ).then((res) => res.json());
  return (
    <>
      <Suspense fallback={<p>The Countries are Loading...</p>}>
        <Countries fetchAllCountries={fetchAllCountries} />
      </Suspense>
    </>
  );
}

export default App;
