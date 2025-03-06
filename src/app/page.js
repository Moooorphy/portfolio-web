import Image from "next/image";
import MainText from "./components/mainText";
import Header from "./components/header"
import MainPage from "./components/mainPage";
import ProjectGrid from "./components/projectGrid";
import Footer from "./components/footer";
export default function Home() {

  return (
    <>
    <Header />
    <div className="container">
      <MainPage />
      <MainText content = {"Projekty"} />
      <ProjectGrid />
      
    </div>
    <Footer />
    </>
  );
}
