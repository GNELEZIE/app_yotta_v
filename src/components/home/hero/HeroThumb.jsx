import { LazyLoadImage } from "react-lazy-load-image-component";
import ShapeAynaImg from "../../../assets/images/v3/shape-ayna.png";
import myFirtsImg from "../../../assets/images/v3/first.jpg";
function HeroThumb() {
	return (
		<div className="aximo-hero-thumb3-wrap">
			<div className="aximo-hero-thumb3">
				<LazyLoadImage src={myFirtsImg} alt="Firt Img" className="h-500" effect="blur" />
				 
				<div className="aximo-hero-thumb-shape3">
					<img src={ShapeAynaImg} alt="ShapeAynaImg" />
				</div>
			</div>
			
		</div>
	);
}

export default HeroThumb;
