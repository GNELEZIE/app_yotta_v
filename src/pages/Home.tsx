import About from "../components/home/about";
import Hero from "../components/home/hero"
import AutoSlider from "../components/home/auto-slider";
import Contact from "../components/home/contact";
import Counter from "../components/home/counter";
import Faq from "../components/home/faq";
import Teams from "../components/home/teams";
function Home(){
    return(
        <div className="aximo-all-section bg-light3">

			<Hero />
			<Counter />
			<About />
			<AutoSlider />
			<Teams />
			<Faq />
			<Contact />
		</div>

    )
}
export default Home;