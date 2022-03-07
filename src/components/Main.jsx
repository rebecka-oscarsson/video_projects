import React from "react";
import styles from "./Main.module.css";
import { Card } from "../index";

function Main({ searchResults, loading, error }) {
  const renderContent = () => {
    if (loading) {
      return <p>loading...</p>;
    } else if (error) {
      return <p>An error occured, please try again.</p>;
    } else if (searchResults !== undefined && searchResults !== null)
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
  };
  return <main className={styles.main}>{renderContent()}</main>;
}

export default Main;
