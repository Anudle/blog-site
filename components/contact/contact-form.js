import classes from "./contact-form.module.css";
import Notification from "../ui/notification";
import { useState, useEffect } from "react";

async function sendContactData(contactDetails) {
	const response = await fetch("/api/contact", {
		method: "POST",
		body: JSON.stringify(contactDetails),
		headers: {
			"Content-Type": "application/json",
		},
	});
	const data = await response.json();
	if (!response.ok) {
		throw new Error(data.message || "something went wrong");
	}
}

function ContactForm() {
	const [enteredEmail, setEnteredEmail] = useState("");
	const [enteredName, setEnteredName] = useState("");
	const [enteredMessage, setEnteredMessage] = useState("");
	const [requestStatus, setRequestStatus] = useState(); //pending, success, error
	const [error, setError] = useState();

	useEffect(() => {
		if (requestStatus === "success" || requestStatus === "error") {
			const timer = setTimeout(() => {
				setRequestStatus(null);
				setError(null);
			}, 3000);
			return () => clearTimeout(timer);
		}
	}, [requestStatus]);

	async function sendMessageHandler(event) {
		event.preventDefault();
		setRequestStatus("pending");
		try {
			await sendContactData({
				email: enteredEmail,
				message: enteredMessage,
				name: enteredName,
			});
			setRequestStatus("success");
            setEnteredEmail('')
            setEnteredName('')
            setEnteredMessage('')
		} catch (error) {
			setError(error);
			setRequestStatus("error");
		}
	}

	let notification;
	if (requestStatus === "pending") {
		notification = {
			status: "pending",
			title: "Sending message...",
			message: "Your message is on its way",
		};
	}
	if (requestStatus === "success") {
		notification = {
			status: "success",
			title: "Success",
			message: "Message sent successfully!",
		};
	}
	if (requestStatus === "error") {
		notification = {
			status: "error",
			title: "Error",
			message: `Message cound not be sent ${error}!`,
		};
	}

	return (
		<section className={classes.contact}>
			<h1>How can I help you?</h1>
			<form className={classes.form} onSubmit={sendMessageHandler}>
				<div className={classes.controls}>
					<div className={classes.control}>
						<label htmlFor="email">Your Email</label>
						<input
							type="email"
							id="email"
							required
							value={enteredEmail}
							onChange={(e) => setEnteredEmail(e.target.value)}></input>
					</div>
					<div className={classes.control}>
						<label htmlFor="name">Your Name</label>
						<input
							type="text"
							onChange={(e) => setEnteredName(e.target.value)}
							id="name"
							value={enteredName}
							required></input>
					</div>
				</div>
				<div className={classes.control}>
					<label htmlFor="message">Your Message</label>
					<textarea
						type="text"
						id="message"
						rows="5"
						value={enteredMessage}
						onChange={(e) => setEnteredMessage(e.target.value)}></textarea>
				</div>
				<div className={classes.actions}>
					<button>Send Message</button>
				</div>
			</form>
			{notification && (
				<Notification
					status={notification.status}
					message={notification.message}
					title={notification.title}></Notification>
			)}
		</section>
	);
}
export default ContactForm;
