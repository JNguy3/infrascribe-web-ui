import { HeroSection } from"../components/HeroSection.tsx"
import { FeatureSection } from "../components/FeatureSection.tsx"
import { InfraNav } from "../components/Navbar.tsx"

export const HomePage = () =>{
    return(
        <>
        <InfraNav/>
        <HeroSection />
        <FeatureSection />
        </>
    )
}
export default HomePage