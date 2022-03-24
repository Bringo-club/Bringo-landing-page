import WorkCard from "./WorkCard";

function HowItWorks() {
	return (
		<div className="container how-it-works" id="how-it-works">
				
				<div className="row mt-5">
					<div className="col-12 text-center muli-bold short-desc">
						<hr />
						<h3>How it Works</h3>
						<hr />
					</div>
				</div>
				<WorkCard
					img="/images/howItWorks/login.svg"
					stepNumber="Step 1:"
					stepTitle="you sing-in with your university/school email."
					stepdesc="Bringo is a place where students from the same campus can develop close connections with each other, that's why we need your school email to confirm that you are part of it."
					/>
				<WorkCard
					img="/images/howItWorks/event.svg"
					stepNumber="Step 2:"
					stepTitle="discover what's going on on your campus."
					stepdesc="Missing on events and activities around you shouldn't be a problem anymore, on bringo you can find what people around you are up to."
					isReverse={true}
					/>
				<WorkCard
					img="/images/howItWorks/post.svg"
					stepNumber="Step 3:"
					stepTitle="create or join an event."
					stepdesc="You can join other students in activities or you can take the lead and create an event and have others join you, it's also a chance to discover new interests and to make new friends."
					/>
				<WorkCard
					img="/images/howItWorks/have-fun.svg"
					stepNumber="Step 4:"
					stepTitle="attend the event"
					stepdesc="build and grow your social circle. Have Fun!"
					isReverse={true}
					/>
			</div>
	);
}

export default HowItWorks;