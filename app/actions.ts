'use server';

export async function submitInquiry(prevState: any, formData: FormData) {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const rawData = {
        name: formData.get('name'),
        email: formData.get('email'),
        purpose: formData.get('purpose'),
        message: formData.get('message'),
    };

    // Here you would typically send an email using Resend, Nodemailer, etc.
    // Example: await resend.emails.send({ ... })

    console.log('--------------------------------');
    console.log('NEW INQUIRY RECEIVED');
    console.log('--------------------------------');
    console.log(`Name:    ${rawData.name}`);
    console.log(`Email:   ${rawData.email}`);
    console.log(`Purpose: ${rawData.purpose}`);
    console.log(`Message: ${rawData.message}`);
    console.log('--------------------------------');

    return {
        success: true,
        message: 'Thank you for your inquiry. Chef Cuisine will respond shortly.',
    };
}
