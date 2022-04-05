import styles from './JoinUs.module.scss';
import { useState, useRef } from 'react';
import { useRouter } from 'next/router'

const options = [
	'um6p benguerir',
	'um6p rabat',
	'um6p bg',
	"1337 bg",
	"1337 kh",
];

function JoinUs() {

	const router = useRouter()

	const [location, setLocation] = useState("");
	const [matchedLocation, setMatchedLocation] = useState(options);
	const [showSuggestion, setShowSuggestion] = useState(false);
	const fullnameRef = useRef(null);
	const emailRef = useRef(null);
	const feedbackRef = useRef(null);

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

	const selectLocationHandler = (place) => {
		setLocation(place);
		setShowSuggestion(false);
	}

	const onSubmitHandler = (e) => {
		e.preventDefault();
		fetch("https://form.taxi/s/fcbcrpxq", {
			method: "POST",
			headers: {
				"Accept": "application/json",
			},
			body: JSON.stringify({
				"form-name": "join-us",
				"fullname": fullnameRef.current.value,
				"email": emailRef.current.value,
				"location": location,
				"feedback": feedbackRef.current.value

		})
	}).then(response => {
		console.log(response);
		if (response.status === 200) {
			router.push("/thankyou");
		}
	});
	};

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
				<form onSubmit={onSubmitHandler}>
					<div className="row">
						<div className='col-md-6'>
							<div className={styles["input-group"]}>
								<label htmlFor="fullname">Full name <span>*</span></label>
								<input ref={fullnameRef} required type="text" name='fullname' />
							</div>
						</div>
						<div className='col-md-6'>
							<div className={styles["input-group"]}>
								<label htmlFor="email">Email <span>*</span></label>
								<input ref={emailRef} required type="email" name='email' />
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
												<li key={index} onClick={selectLocationHandler.bind(null, option)}>{option}</li>
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
								<textarea ref={feedbackRef} rows={6} />
								<span>We'd like to know what you think</span>
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