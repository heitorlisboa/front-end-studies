import React, { useState } from "react";
import PersonalData from "./steps/PersonalData";
import UserData from "./steps/UserData";
import ShipmentData from "./steps/ShipmentData";

function SignUpForm({ handleSubmitForm }) {
	const [allData, setAllData] = useState({});

	function handleSubmitStep(newData) {
		setAllData({ ...allData, ...newData });
	}

	function finishSignUp() {
		handleSubmitForm(allData)
	}

	return (
		<>
			<PersonalData handleSubmitStep={handleSubmitStep} />
			<UserData handleSubmitStep={handleSubmitStep} />
			<ShipmentData
				handleSubmitStep={handleSubmitStep}
				finishSignUp={finishSignUp}
			/>
		</>
	);
}

export default SignUpForm;
