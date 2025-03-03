import CountUp from "react-countup";
function Counter() {
	return (
		<div className="aximo-counter-section dark-bc">
			<div id="aximo-counter"></div>
			<div className="container">
				<div className="aximo-counter-title">
					<p>Nos chifres parlent de notre impact sur la société</p>
				</div>
				<div className="aximo-counter-wrap3">
					<div className="aximo-counter-data3">
						<h2>
							<em>.</em>
							<span className="aximo-counter">
								<CountUp end={13} duration={3} redraw={true} enableScrollSpy />
							</span>
							+
						</h2>
						<p>Etablissements</p>
					</div>
					<div className="aximo-counter-data3">
						<h2>
							<em>.</em>
							<span className="aximo-counter">
								<CountUp end={85} duration={3} redraw={true} enableScrollSpy />
							</span>
						</h2>
						<p>Entreprises</p>
					</div>
					<div className="aximo-counter-data3">
						<h2>
							<em>.</em>
							<span className="aximo-counter">
								<CountUp end={60} duration={3} redraw={true} enableScrollSpy />
							</span>
							m
						</h2>
						<p>Documents</p>
					</div>
					<div className="aximo-counter-data3">
						<h2>
							<em>.</em>
							<span className="aximo-counter">
								<CountUp end={90} duration={3} redraw={true} enableScrollSpy />
							</span>
							%
						</h2>
						<p>Utilisateurs satisfaits</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Counter;
