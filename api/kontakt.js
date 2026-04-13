import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getAuth } from "firebase-admin/auth";
import { Resend } from "resend";

function getAdminFirestore() {
  if (!getApps().length) {
    initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      }),
    });
  }
  return getFirestore();
}

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { praktiker_uid, name, email, nachricht } = req.body || {};

  if (!praktiker_uid || !name || !email || !nachricht) {
    return res.status(400).json({ error: "Fehlende Felder" });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Ungültige E-Mail" });
  }

  if (nachricht.length > 2000 || name.length > 100) {
    return res.status(400).json({ error: "Eingabe zu lang" });
  }

  try {
    const db = getAdminFirestore();
    const profil = await db.collection("netzwerk_profile").doc(praktiker_uid).get();

    if (!profil.exists || !profil.data().sichtbar) {
      return res.status(404).json({ error: "Praktiker nicht gefunden" });
    }

    const authUser = await getAuth().getUser(praktiker_uid);
    const praktikerEmail = authUser.email;

    if (!praktikerEmail) {
      return res.status(500).json({ error: "Keine E-Mail hinterlegt" });
    }

    await resend.emails.send({
      from: "Human Resonanz Netzwerk <netzwerk@human-resonanz.de>",
      to: praktikerEmail,
      replyTo: email,
      subject: `Neue Kontaktanfrage über das HR Netzwerk — ${name}`,
      html: `
        <div style="font-family:Georgia,serif;background:#0F0F0F;color:#F5F0E8;padding:48px 32px;max-width:560px;margin:0 auto;">
          <p style="font-size:10px;letter-spacing:4px;text-transform:uppercase;color:#C9A84C;">Human Resonanz Netzwerk</p>
          <h1 style="font-size:26px;font-weight:400;margin:8px 0 32px;">Neue Kontaktanfrage</h1>
          <p><strong style="color:#C9A84C;">Von:</strong> ${escapeHtml(name)}</p>
          <p><strong style="color:#C9A84C;">E-Mail:</strong> ${escapeHtml(email)}</p>
          <div style="background:#080808;border:1px solid rgba(201,168,76,0.2);padding:20px;margin:24px 0;white-space:pre-wrap;">${escapeHtml(nachricht)}</div>
          <p style="font-size:12px;color:#9A9080;">Antworte direkt auf diese E-Mail — deine Antwort geht an ${escapeHtml(name)}.</p>
        </div>
      `,
    });

    return res.status(200).json({ ok: true });

  } catch (err) {
    console.error("[/api/kontakt] Fehler:", err);
    return res.status(500).json({ error: "Interner Fehler" });
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
