import StarShapeHalfImg from "../../../assets/images/v3/star-shape-half2.png";
import ContactForm from "./ContactForm";
function Contact() {
	return (
		<div className="section bg-bc aximo-section-padding2 position-relative overflow-hidden">
			<div className="container">
				<div className="row">
					<div className="col-lg-7">
						<div className="aximo-default-content familjen-grotesk light m-right-gap">
							<h2>Contactez nous</h2>
							 
							<div className="aximo-contact-info">
								<h3>Contact us directly:</h3>
								<ul>
									<li>
										<a href="tel:088-234-6849">
											<i className="icon-phone"></i>
											+000000000
										</a>
									</li>
									<li>
										<a href="mailto:example@gmail.com">
											<i className="icon-message"></i>
											example@gmail.com
										</a>
									</li>
									<li>
										<a>
											<i className="icon-map"></i>
											Enim ad minim veniam
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-lg-5">
						<div className="aximo-form-wrap2">
							<ContactForm />
						</div>
					</div>
				</div>
			</div>
			<div className="aximo-star-shape-half2">
				<img src={StarShapeHalfImg} alt="StarShapeHalfImg" />
			</div>
		</div>
	);
}

export default Contact;
