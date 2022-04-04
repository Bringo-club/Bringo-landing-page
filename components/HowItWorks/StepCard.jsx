import styles from './StepCard.module.scss';
import Image from 'next/image';

function StepCard(props) {
	return (
		<div className={`row ${styles.stepContainer} ${props.reverse && "reverse-card"}`}>
			<div className={`col-md-6 ${styles.step}`}>
				<h3>{props.number}</h3>
				<h5>{props.title}</h5>
				<p>{props.desc}</p>
			</div>
			<div className={`col-md-6 ${styles.stepImg}`}>
				<Image className='img-fluid' src={props.img} alt="step image" width={425.55} height={552} />
			</div>
		</div>
	);
}

export default StepCard;