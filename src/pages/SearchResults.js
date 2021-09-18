import { searchJournalists } from "../service.js";
import styles from "./SearchResults.module.css";
import React from "react";

import List from "../components/SearchResults/List";

class SearchReults extends React.Component {
  constructor(){
    super();
    this.state = {
      results: []
    }
  }

  async componentDidMount() {
    const results = await getSearchResults();
    this.setState({results: results});
  }

  render() {
    return (
      <div className={styles.listStyles}>
        <List />
      </div>
    );
  }
}

async function getSearchResults() {
  const query = (new URLSearchParams(window.location.search)).get('q');
  console.log(query);
  let results = await searchJournalists(query);
  console.log(results);
  return results;
}

export default SearchReults;
