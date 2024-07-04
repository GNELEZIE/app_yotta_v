import StarImg from "../../../assets/images/v3/star.svg";
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import "../../context/constant";


function HeroContent() {
	const [word, setWord] = useState('ok');

	return (
		<div className="aximo-hero-content3">
			<h2> <span className="color-orange"> YOTTA </span> <span className="color-blue">CERTIFICATION</span></h2>
			<p>
				Plus 3000  documents certifiés pour un avenir sécurisé.
			</p>
			<div className="aximo-hero-subscription">
				<form action="/check" method="get">
					<input type="text" name="code" placeholder="Code du document" />
					<button id="aximo-hero-subscription-btn" type="submit">
						<span className="aximo-label-up">Vérifier</span>
						<span className="aximo-label-up">Vérifier</span>
					</button>
				</form>
			</div>
	
			<div className="aximo-hero-rating">
				<ul>
					<li>
						<img src={StarImg} alt="StarImg" />
						<img src={StarImg} alt="StarImg" />
						<img src={StarImg} alt="StarImg" />
						<img src={StarImg} alt="StarImg" />
						<img src={StarImg} alt="StarImg" />
					</li>
					<li>4.8/5 Avis utilisateur</li>
				</ul>
			</div>
		</div>
	);
}

export default HeroContent;
