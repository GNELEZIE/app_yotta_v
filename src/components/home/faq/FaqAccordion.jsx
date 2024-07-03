function FaqAccordion() {
	return (
		<div className="accordion aximo-accordion-wrap4 col-12" id="aximo-accordion">
			<div className="accordion-item">
				<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#one">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit ?
				</button>

				<div id="one" className="accordion-collapse collapse show" data-bs-parent="#aximo-accordion">
					<div className="accordion-body">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</div>
				</div>
			</div>
		
			<div className="accordion-item">
				<button
					className="accordion-button collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#five"
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing ?
				</button>

				<div id="five" className="accordion-collapse collapse" data-bs-parent="#aximo-accordion">
					<div className="accordion-body">
					Lorem ipsum dolor sit amet, consectetur adipiscingLorem ipsum dolor sit amet, consectetur adipiscingLorem ipsum dolor sit amet, consectetur adipiscingLorem ipsum dolor sit amet, consectetur adipiscingLorem ipsum dolor sit amet, consectetur adipiscingLorem ipsum dolor sit amet, consectetur adipiscing
					</div>
				</div>
			</div>
		</div>
	);
}

export default FaqAccordion;
