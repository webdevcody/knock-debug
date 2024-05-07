"use server";

import { Knock } from "@knocklabs/node";

const knock = new Knock(process.env.KNOCK_SECRET_API_KEY);

export async function sendNotificationAction() {
  try {
    await knock.notify("user-posted", {
      actor: "user-1",
      recipients: ["user-2"],
      data: { variableKey: "Preview data value" },
    });
  } catch (err) {
    console.error(err);
  }
}
