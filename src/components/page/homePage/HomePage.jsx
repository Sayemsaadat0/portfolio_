import ContactSection from "./ContactSection";
import EdundExpSection from "./EdundExpSection";
import HeroSection from "./HeroSection";
import Skills from "./Skills";

const HomePage = () => {
    return (
        <div className="commonContainer  space-y-[30px] md:space-y-[40px] xl:space-y-[60px]">
            <HeroSection />
            <EdundExpSection />
            <Skills />
            <ContactSection />
        </div>
    );
};

export default HomePage;