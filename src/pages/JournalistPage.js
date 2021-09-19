import ProfileCard from "../components/JournalistPage/ProfileCard";
import RAACard from '../components/JournalistPage/RAACard';

function JournalistPage() {
  return (
    <div style={{ display: "flex", flexDirection: 'row' }}>
      <ProfileCard />
      <RAACard />
    </div>
  );
}

export default JournalistPage;
