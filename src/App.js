import { useState, useEffect } from "react";
import "./normalize.css";
import "./App.css";
import {useFetch,
  Header,
  Hero,
  Main,
  ProjectListHeadline,
  SearchBox 
} from "./index";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, loading, error] = useFetch(searchTerm);
  console.log(searchResults, "loading: ", loading, "error: ", error);

  useEffect(() => {setSearchTerm("video")}, [])

  return (
    <>
      <Header />
      <Hero />
      <SearchBox setSearchTerm={setSearchTerm} />
      <ProjectListHeadline />
      <Main searchResults={searchResults} loading={loading} error={error} />      
    </>
  );
}

export default App;
