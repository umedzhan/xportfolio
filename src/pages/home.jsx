import { Layout } from "../components/Layout";
import { Hero } from "../components/Hero";
import { QuoteSection } from "../components/QuoteSection";
import ProjectSection from "../components/ProjectSection";
import { Skills } from "../components/skills";
import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";

export const Home = () => {
  return (
    <Layout>
      <div className="h-[40px] md:h-[62px]" />
      <Hero />
      <div className="h-[112px]" />
      <QuoteSection />
      <div className="h-[74px]" />
      <ProjectSection />
      <div className="h-[106px]" />
      <Skills />
      <div className="h-[112px]" />
      <AboutSection />
      <div className="h-[112px]" />
      <ContactSection />
    </Layout>
  );
};

export default Home;
