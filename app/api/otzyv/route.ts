import nodemailer from "nodemailer";

const RECIPIENT = "nikitina.art-smail@yandex.ru";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return Response.json({ error: "Некорректный запрос" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const contact = typeof body.contact === "string" ? body.contact.trim() : "";
  const text = typeof body.text === "string" ? body.text.trim() : "";
  const consent = body.consent === true;
  const captchaA = Number(body.captchaA);
  const captchaB = Number(body.captchaB);
  const captchaAnswer = Number(body.captchaAnswer);

  if (!name || !text) {
    return Response.json({ error: "Заполните имя и текст отзыва" }, { status: 400 });
  }

  if (!consent) {
    return Response.json({ error: "Необходимо согласие на обработку персональных данных" }, { status: 400 });
  }

  if (
    !Number.isFinite(captchaA) ||
    !Number.isFinite(captchaB) ||
    !Number.isFinite(captchaAnswer) ||
    captchaAnswer !== captchaA + captchaB
  ) {
    return Response.json({ error: "Неверный ответ на проверочный вопрос" }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    console.error("SMTP is not configured: missing env vars");
    return Response.json({ error: "Отправка отзывов временно недоступна" }, { status: 500 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: SMTP_USER,
      to: RECIPIENT,
      replyTo: contact || undefined,
      subject: `Новый отзыв на сайте от ${name}`,
      text: [`Имя: ${name}`, contact ? `Контакт: ${contact}` : null, "", "Отзыв:", text]
        .filter(Boolean)
        .join("\n"),
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Failed to send review email", error);
    return Response.json({ error: "Не удалось отправить отзыв, попробуйте позже" }, { status: 502 });
  }
}
