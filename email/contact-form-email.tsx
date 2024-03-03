import { sendEmail } from "@/actions/sendEmail";
import {
	Html,
	Body,
	Head,
	Heading,
	Hr,
	Container,
	Preview,
	Section,
	Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/components";

type ContactFormEmailProps = {
	message: string;
	senderEmail: string;
};

export default function ContactFormEmail({
	message,
	senderEmail,
}: ContactFormEmailProps) {
	return (
		<Html>
			<Head />
			<Preview>New message from your portfolio site</Preview>
			<Tailwind>
				<Body>
					<Container>
						<Section>
							<Heading>
								Your received the following message from the contact from
							</Heading>
							<Text>{message}</Text>
							<Hr />
							<Text>The sender&apos;s email is : {senderEmail}</Text>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
}
