

function WorkCard(props) {
	return (
		<div className={`row mt-5 ${props.isReverse && "flex-row-reverse"}`}>
			<div className="col-md-6 images-card">
				<img className="img-fluid image-background-left" src="/images/howItWorks/CardBackground.svg" alt=""/>
				<img className="img-fluid image-rotate-left" src={props.img} alt="" />
			</div>
			<div className="col-md-6">
				<div className="step-content">
					<h4 className="step-head muli-bold">{props.stepNumber}</h4>
					<p className="short-desc muli-bold">{props.stepTitle}</p>
					<p className="long-desc">{props.stepdesc}</p>
				</div>
			</div>
		</div>
	);
}

export default WorkCard;