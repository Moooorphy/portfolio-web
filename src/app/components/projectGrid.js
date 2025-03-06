import ProjectCard from "./projectCard";
export default function projectGrid() {
    return(

        <div className="project-grid">
        <ProjectCard link="https://storbeed.com/" topic="Voyage" content="Najbardziej zaawansowany projekt studia storbeed wykorzystujący silnik Unity3D do stworzenia immersyjnej gry horrorowej."/>
        <ProjectCard link="https://mw-service.pl/" topic="mw-service.pl" content="Projekt witryny internetowej dla polskiego przedsiębiorstwa MW Service."/>
        <ProjectCard link="https://storbeed.itch.io/gucio-simulation" topic="Gucio: Simulation" content="Drugi projekt grupy storbeed, liniowa gra o tematyce horrorowej."/>
    
        <ProjectCard link="https://github.com/Moooorphy/BarrelsInvestment" topic="BarrelInvestment" content="Strona służąca do śledzenia postępu w inwestycji, wykorzystująca technikę scrapowania stron internetowych."/>
        <ProjectCard link="https://youtu.be/2ipXjsPVHmI?si=_9kRaanwxtt0Bclg&t=1110" topic="Birthday Project" content="Fanowski projekt gry VR stworzony przez grupę storbeed."/>
        
        </div>
    
    );
}