import styles from './StepCard.module.scss';

function StepCard(props) {
	return (
		<div className={`row ${styles.stepContainer} ${props.reverse && "reverse-card"}`}>
			<div className={`col-md-6 ${styles.step}`}>
				<h3>{props.number}</h3>
				<h5>{props.title}</h5>
				<p>{props.desc}</p>
			</div>
			<div className="col-md-6">
				{props.img}
			</div>
		</div>
	);
}

export default StepCard;