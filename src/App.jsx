import TopHeader from "./components/TopHeader";
import FacultyMembers from "./components/TopMenu/FacultyMembers/FacultyMembers";
import MapsAndDirection from "./components/TopMenu/MapDirection/MapsAndDirection";
import Navigator from "./components/Navigator";
import Home from "./components/HomePage/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import {Routes, Route} from "react-router-dom";
import Media from "./components/Media";
import CampusLife from "./components/Campouslife";
import AdmissionPage from "./components/AdmissionPage/AdmissionPage";
import CampusesPage from "./components/CampusesPage/CampusesPage";
import ZiaratCampus from "./components/CampusesPage/ZiaratCampus";
import DeraGhaziKhanCampus from "./components/CampusesPage/DeraGhaziKhanCampus";
import AchievementsPage from "./components/AchievementsPage/AchievementsPage";
import CollaborationsPage from "./components/CollaborationsPage/CollaborationsPage";
import Alumni from "./components/AlumniPage/AlumniPage";
import StoriesPage from "./components/StoriesPage/StoriesPage";

import GalleryPage from "./components/GalleryPage/GalleryPage";
import AlumniCabinet from "./components/TopMenu/Cabinet/AlumniCabinet";
import News from "./components/FooterMedia/News";
import Announcements from "./components/FooterMedia/Announcements";
import KeyDates from "./components/FooterStudentLinks/KeyDates";
import ClassTimetable from "./components/FooterStudentLinks/ClassTimetable";
import CoreValues from "./components/FooterAbout/CoreValues";
import Labortries from "./components/FooterAbout/Labortries";
import FindEvent from "./components/FooterConnect/FindEvent";
import ContactUs from "./components/FooterConnect/ContactUs";
import Articles from "./components/FooterStudentLinks/Articles";
import ITTeam from "./components/FooterLower/ITTeam";
import Developer from "./components/FooterLower/Developer";
import WhyAlhijrah from "./components/FooterAbout/WhyAlhijrah";
import ImpactCommunity from "./components/FooterAbout/ImpactCommunity";





function App() {
  return (
    <>
      <TopHeader />
      <Navigator />
      <Routes >

        <Route path="/" element={<Home />}> </Route>
        <Route path="/faculty&staff" element={<FacultyMembers />} />
        <Route path="/maps&direction" element={<MapsAndDirection />}></Route>
        <Route path="/cabinet" element={<AlumniCabinet />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/media" element={<Media />}></Route>
        <Route path="/campus-life" element={<CampusLife />}></Route>
        <Route path="/admission" element={<AdmissionPage />}></Route>
        <Route path="/campuses" element={<CampusesPage />}></Route>
        <Route path="/ziarat-campus" element={<ZiaratCampus />} />
        <Route path="/dera-ghazi-khan-campus" element={<DeraGhaziKhanCampus />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/collaboration" element={<CollaborationsPage />}></Route>
        <Route path="/alumni" element={<Alumni />}></Route>
        <Route path="/story" element={<StoriesPage />}></Route>
        <Route path="/gallery" element={<GalleryPage />}> </Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/announcements" element={<Announcements />}></Route>
        <Route path="/key-dates" element={<KeyDates />}></Route>
        <Route path="/class-timetable" element={<ClassTimetable />}></Route>
       <Route path="/core-values" element={<CoreValues />}></Route>
       <Route path="/labortries" element={<Labortries />}></Route>
       <Route path="/find-event" element={<FindEvent />}></Route>
       <Route path="/contact-us" element={<ContactUs />}></Route>
       <Route path="/articles" element={<Articles />}></Route>
       <Route path="/ITTeam" element={<ITTeam />}> </Route>
    <Route path="/developer" element={<Developer />} ></Route>
    <Route path="/why-alhijrah" element={<WhyAlhijrah />}></Route>
    <Route path="/impact-community" element={<ImpactCommunity />}></Route>
      </Routes>
      
      
      <Footer />
    </>
  );
}
export default App;
