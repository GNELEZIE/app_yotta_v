import FaqAccordion from "./FaqAccordion";

function Faq() {
	return (
		<div className="section aximo-section-padding6">
			<div className="container">
				<div className="aximo-section-title center familjen-grotesk">
					<h2>FAQ</h2>
				</div>
				<div className="row">
					<FaqAccordion />
				</div>
			</div>
		</div>
	);
}

export default Faq;
