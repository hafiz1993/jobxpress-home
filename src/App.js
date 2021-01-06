import logo from './logo.svg';
import './App.css';
import TopHeader from './Components/TopHeader/TopHeader';
import Header from './Components/Header/Header';
import MobileApp from './Components/MobileApp/MobileApp';
import ExploreJob from './Components/ExploreJob/ExploreJob';
import RecentJobs from './Components/RecentJobs/RecentJobs';
import FeaturedJobs from './Components/FeaturedJobs/FeaturedJobs';
import VitalState from './Components/VitalState/VitalState';
import Footer from './Components/Footer/Footer';
import CareerAdvised from './Components/CareerAdvised/CareerAdvised';

function App() {
  return (
    <div className="App">
      <TopHeader />
      <Header />
      <ExploreJob />
      <RecentJobs />
      <FeaturedJobs></FeaturedJobs>
      <VitalState></VitalState>
      <CareerAdvised></CareerAdvised>
      <MobileApp />
      <Footer></Footer>

    </div>
  );
}

export default App;
