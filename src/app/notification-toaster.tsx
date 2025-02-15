"use client";

import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { useKnockFeed } from "@knocklabs/react";

export function NotificationToaster() {
  const { feedClient } = useKnockFeed();

  const onNotificationsReceived = ({ items }) => {
    // Whenever we receive a new notification from our real-time stream, show a toast
    // (note here that we can receive > 1 items in a batch)
    items.forEach((notification) => {
      toast(notification.blocks[0].rendered, { id: notification.id });
    });

    // Optionally, you may want to mark them as "seen" as well
    feedClient.markAsSeen(items);
  };

  useEffect(() => {
    // Receive all real-time notifications on our feed
    feedClient.on("items.received.realtime", onNotificationsReceived);

    // Cleanup
    return () =>
      feedClient.off("items.received.realtime", onNotificationsReceived);
  }, [feedClient]);

  return <Toaster />;
}
