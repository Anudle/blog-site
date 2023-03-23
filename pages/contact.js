import ContactForm from "../components/contact/contact-form";
import Head from "next/head";

function ContactPage() {
	return (
		<>
			<Head><title>Contact Me</title>
			<meta name='Contact me!' description='Contact me'/></Head>
			<ContactForm></ContactForm>;
		</>
	);
}

export default ContactPage;
