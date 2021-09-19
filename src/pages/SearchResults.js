import styles from "./SearchResults.module.css";
import List from "../components/SearchResults/List";
import React from "react";
import { searchJournalists } from "../service.js";

class SearchResults extends React.Component {
  constructor(){
    super();
    this.state = {
      results: []
    }
  }

  async componentDidMount() {
    const query = new URLSearchParams(window.location.search).get("q");
    console.log(query);
    const results = await searchJournalists(query);
    console.log(results);
    this.setState({results: results});
  }

  render() {
    return (
        <div className={styles.listStyles}>
          <List value={this.state.results} />
        </div>
    );
  }
}

export default SearchResults;
