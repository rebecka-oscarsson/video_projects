import { useState, useEffect } from "react";
import "./App.css";
import {
  Header,
  Hero,
  Main,
  ProjectListHeadline,
  SearchBox,
  useFetch,
} from "./index";

function App() {
  const [searchTerm, setSearchTerm] = useState("video");
  const [searchResults, loading, error] = useFetch(searchTerm);
  console.log(searchResults.length, "loading", loading, "error", error);

  // useEffect(() => {
  //   if (searchTerm.length !== 0)
  //   {const [searchResults, loading, error] = useFetch(searchTerm)}
  // }, [searchTerm])

  // let mainSection;
  // if (loading)
  // {mainSection = <div>Loading...</div>}
  // if (error)
  // {mainSection = <div>An error occured, please try again</div>}
  // else if (!loading && searchResults.length > 0)
  // {mainSection = searchResults.map((result) => <Card key={result.id} id={result.id} logo={result.thumbnail} company={result.title} description={result.description} />)}

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
