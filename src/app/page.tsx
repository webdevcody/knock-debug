import { sendNotificationAction } from "@/app/actions";
import { Other } from "@/app/other";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form action={sendNotificationAction}>
        <button>send</button>
      </form>

      <Other />
    </main>
  );
}
