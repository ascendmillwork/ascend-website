"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}) {
  try {
    const response = await resend.emails.send({
      from: "Ascend Website <hello@thoughtwave.live>",
      to: ["developervsandhu@gmail.com"],
      subject: `New Contact Form Submission: ${formData.service || "General Inquiry"}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.5; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #0070f3; border-bottom: 2px solid #0070f3; padding-bottom: 8px;">New Contact Inquiry</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tbody>
              <tr>
                <td style="padding: 8px; font-weight: bold; width: 110px; vertical-align: top;">Name:</td>
                <td style="padding: 8px;">${formData.name || "N/A"}</td>
              </tr>
              <tr style="background-color: #f9f9f9;">
                <td style="padding: 8px; font-weight: bold; vertical-align: top;">Email:</td>
                <td style="padding: 8px;">${formData.email || "N/A"}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; vertical-align: top;">Phone:</td>
                <td style="padding: 8px;">${formData.phone || "N/A"}</td>
              </tr>
              <tr style="background-color: #f9f9f9;">
                <td style="padding: 8px; font-weight: bold; vertical-align: top;">Service:</td>
                <td style="padding: 8px;">${formData.service || "General Inquiry"}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; vertical-align: top;">Message:</td>
                <td style="padding: 8px; white-space: pre-line;">${formData.message || "No message provided."}</td>
              </tr>
            </tbody>
          </table>
          <p style="font-size: 12px; color: #888; margin-top: 25px;">&copy; ${new Date().getFullYear()} Ascend Website. All rights reserved.</p>
        </div>
      `,
      text: `
New Contact Inquiry

Name: ${formData.name || "N/A"}
Email: ${formData.email || "N/A"}
Phone: ${formData.phone || "N/A"}
Service: ${formData.service || "General Inquiry"}
Message:
${formData.message || "No message provided."}
      `,
    });

    return { success: true, data: response };
  } catch (error) {
    console.error("Resend error:", error);
    return { success: false, error };
  }
}
