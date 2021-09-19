import React from "react";
import ProfileCard from "../components/JournalistPage/ProfileCard";
import RAACard from '../components/JournalistPage/RAACard';
import { getJournalist } from '../service.js';

class JournalistPage extends React.Component {
  journalist = null;

  async componentDidMount() {
    const id = window.location.pathname.split('/')[2];
    console.log(id);
    this.journalist = await getJournalist(id);
    console.log(this.journalist);
  }

  render() {
    return (
      <div style={{ display: "flex", flexDirection: 'row' }}>
        <ProfileCard value={this.jjournalist} />
        <RAACard value={this.journalist} />
      </div>
    );
  }
}

export default JournalistPage;
