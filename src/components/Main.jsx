import React from "react";
import styles from "./Main.css";
import { Card } from "../index";

function Main({ searchResults, loading, error }) {
  return (
    <main>
      {(() => {
        if (loading) {
          return "loading...";
        } else if (error) {
          return "error";
        }
        else if (!loading && !error)
        return searchResults.map((result) => (
          <Card
            key={result.id}
            searchResult={result.id}
            id={result.id}
            logo={result.thumbnail}
            company={result.title}
            description={result.description}
          />
        ));
      })()}
    </main>
  );
}

export default Main;
