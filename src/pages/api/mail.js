import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(import.meta.env.SECRET_SENDGRID_API_KEY);

export async function post({ request }) {
  const body = await JSON.parse(request.body);

  const message = `
        Name: ${body.name}\r\n
        Email: ${body.email}\r\n
        Message: ${body.message}
    `;

  const data = {
    to: "stephen@rutherford.dev",
    from: "hello@rutherford.dev",
    subject: "[Rutherford.dev] Contact Form - New Message",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  await sendgrid.send(data);

  return res.status(200).json({ status: "Ok" });
}
