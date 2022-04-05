import styles from './JoinUs.module.scss';
import { useState } from 'react';

const options = [
	'um6p benguerir'
];

function JoinUs() {

	const [location, setLocation] = useState("");
	const [matchedLocation, setMatchedLocation] = useState(options);
	const [showSuggestion, setShowSuggestion] = useState(false);
	const [fullname, setFullname] = useState("");
	const [email, setEmail] = useState("");
	const [feedback, setFeedback] = useState("");

	const changeLocationHandler = (event) => {
		setLocation(event.target.value);
		setShowSuggestion(true);
		const matchedLocation = options.filter(option => {
			if (option.includes(event.target.value.toLowerCase()))
				return true;
			return false;
		});
		// console.log(matchedLocation);
		setMatchedLocation(matchedLocation);
	};

	const selectLocationHandler = (event, place) => {
		event.stopPropagation();
		setLocation(place);
		setShowSuggestion(false);
	}

	const showSuggestionHandler = (event) => {
		event.stopPropagation();
		setShowSuggestion(true);
	}

	const hideSuggestionHandler = () => {
		setShowSuggestion(false);
	}

	return (
		<div className={styles.joinContainer} onClick={hideSuggestionHandler} id="join-us">
			<div className="container">
				<h4 className="header">Join Bringo</h4>
				{/* <form onSubmit={onSubmitHandler}> */}
				<form action="https://form.taxi/s/fcbcrpxq" method="POST">
					<div className="row">
						<div className='col-md-6'>
							<div className={styles["input-group"]}>
								<label htmlFor="fullname">Full name <span>*</span></label>
								<input
									value={fullname}
									onChange={(event) => setFullname(event.target.value)}
									required
									type="text"
									name='fullname' />
							</div>
						</div>
						<div className='col-md-6'>
							<div className={styles["input-group"]}>
								<label htmlFor="email">Email <span>*</span></label>
								<input
									value={email}
									onChange={(event) => setEmail(event.target.value)}
									required
									type="email"
									name='email' />
								<span>Ideally school email</span>
							</div>
						</div>
						<div className='col-12'>
							<div className={`${styles["input-group"]} ${styles.locationGroup}`} onClick={showSuggestionHandler}>
								<label htmlFor="location">location <span className={styles.greyText}>(your university or city)</span> <span>*</span></label>
								<input value={location} onChange={changeLocationHandler} required type="text" name='location' />
								{
									showSuggestion && <ul className={styles.suggestList}>
										{matchedLocation.map((option, index) => {
											return (
												<li key={index} onClick={event => selectLocationHandler(event, option)}>{option}</li>
											)
										})}
									</ul>
								}
								<span>Bringo will lunch at um6p bg first, if you want it in your local university/community let us know.</span>
							</div>
						</div>

						<div className='col-12'>
							<div className={`${styles["input-group"]} ${styles["textarea"]}`}>
								<label htmlFor="email">Feedback <span className={styles.greyText}>(optional)</span></label>
								<textarea
									name='feedback'
									value={feedback}
									onChange={(event) => setFeedback(event.target.value)}
									rows={6} />
								<span>We&apos;d like to know what you think</span>
							</div>
						</div>
						<div className={`col-12 ${styles.btnContainer}`}>
							<button className='main-btn'>Submit</button>
							<span>We are still building Bringo at the moment, your email will only be used to contact you once we launch</span>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default JoinUs;
