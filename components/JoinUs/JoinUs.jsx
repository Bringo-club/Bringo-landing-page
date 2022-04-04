import styles from './JoinUs.module.scss';
import CreatableSelect from 'react-select/creatable';

const options = [
	{ value: 'UM6P Benguerir', label: 'UM6P Benguerir' },
];

function JoinUs() {

	const handleChange = (newValue, actionMeta) => {
		console.group('Value Changed');
		console.log(newValue);
		console.log(`action: ${actionMeta.action}`);
		console.groupEnd();
	};
	const handleInputChange = (inputValue, actionMeta) => {
		console.group('Input Changed');
		console.log(inputValue);
		console.log(`action: ${actionMeta.action}`);
		console.groupEnd();
	};

	return (
		<div className={styles.joinContainer}>
			<div className="container">
				<h4 className="header">Join Bringo</h4>
				<form>
					<div className="row">
						<div className='col-md-6'>
							<div className={styles["input-group"]}>
								<label htmlFor="fullname">Full name <span>*</span></label>
								<input type="text" name='fullname' placeholder='Full name' />
							</div>
						</div>
						<div className='col-md-6'>
							<div className={styles["input-group"]}>
								<label htmlFor="email">Email <span>*</span></label>
								<input type="text" name='email' placeholder='Email' />
								<span>Ideally school email</span>
							</div>
						</div>
						<div className='col-12'>
							<div className={styles["input-group"]}>
								<label htmlFor="location">location <span className={styles.greyText}>(your university or city)</span> <span>*</span></label>
								{/* <input type="text" name='email' placeholder='Email' /> */}
								<CreatableSelect
									className='select'
									isClearable
									onChange={handleChange}
									onInputChange={handleInputChange}
									options={options}
									// defaultValue={options[0]}
									placeholder='Location'
								/>
								<span>Bringo will lunch at um6p bg first, if you want it in your local university/community let us know.</span>
							</div>
						</div>

						<div className='col-12'>
							<div className={`${styles["input-group"]} ${styles["textarea"]}`}>
								<label htmlFor="email">Feedback <span className={styles.greyText}>(optional)</span></label>
								<textarea rows={10} placeholder="your feedback..." />
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