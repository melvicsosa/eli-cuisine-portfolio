'use server';

import { Resend } from 'resend';

export async function submitInquiry(prevState: any, formData: FormData) {
	const rawData = {
		name: formData.get('name') as string,
		email: formData.get('email') as string,
		purpose: formData.get('purpose') as string,
		message: formData.get('message') as string,
	};

	// 1. Validate Required Fields
	if (!rawData.name || !rawData.email || !rawData.message || !rawData.purpose) {
		return { success: false, message: 'Please fill in all required fields.' };
	}

	// 2. Validate Lengths
	if (rawData.name.length > 50) {
		return { success: false, message: 'Name must be 50 characters or less.' };
	}

	if (rawData.email.length > 50) {
		return { success: false, message: 'Email must be 50 characters or less.' };
	}

	// 3. Validate Word Count (rough check)
	const wordCount = rawData.message.trim().split(/\s+/).length;
	if (wordCount > 600) {
		return { success: false, message: `Message is too long (${wordCount} words). Please keep it under 600 words.` };
	}

	try {
		const resend = new Resend(process.env.RESEND_API_KEY);
		const { data, error } = await resend.emails.send({
			from: process.env.EMAIL_FROM as string,
			to: [process.env.OWNER_EMAIL as string],
			replyTo: rawData.email,
			subject: `New Inquiry: ${rawData.purpose} from ${rawData.name}`,
			text: `
							Name: ${rawData.name}
							Email: ${rawData.email}
							Purpose: ${rawData.purpose}

							Message:
							${rawData.message}
            `,
		});

		if (error) {
			console.error('Resend Error:', error);
			return { success: false, message: 'Failed to send inquiry. Please try again.' };
		}

		return {
			success: true,
			message: 'Thank you for your inquiry. Chef Cuisine will respond shortly.',
		};
	} catch (e) {
		console.error('Server Error:', e);
		return { success: false, message: 'An unexpected error occurred.' };
	}
}
