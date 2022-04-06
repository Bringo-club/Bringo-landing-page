import styles from './HowItWorks.module.scss';
import StepCard from "./StepCard";
import Step1 from "../../assets/steps/step1.svg";
import Step2 from "../../assets/steps/step2.svg";
import Step3 from "../../assets/steps/step3.svg";

function HowItWorks() {
	return (
		<div className={styles["how-it-works-container"]}>
			<div className="container">
				<h4 className='header'>how it works</h4>
				<StepCard
					img="/imgs/steps/step1.svg"
					number="Step 1:"
					title="Discover what's going on around you"
					desc="Missing on events and activities around you wouldn't be a problem anymore, on bringo you can find what people around you are up to."
					/>
				<StepCard
					reverse
					img="/imgs/steps/step2.svg"
					number="Step 2:"
					title="Create or join an event"
					desc="You can join an existing event or you can take the lead and create one, it's also a chance to discover new interests and to make new friends."
					/>
				<StepCard
					img="/imgs/steps/step3.svg"
					number="Step 3:"
					title="Go out there and meet"
					desc="Attend the event,  Get to know other people, and have fun together."
					/>
			</div>
		</div>
	);
};

export default HowItWorks;
