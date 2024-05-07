"use client";

import { NotificationToaster } from "@/app/notification-toaster";
import {
  KnockFeedProvider,
  KnockProvider,
  NotificationFeedPopover,
  NotificationIconButton,
} from "@knocklabs/react";

import { useRef, useState } from "react";

export function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isVisible, setIsVisible] = useState(false);
  const notifButtonRef = useRef(null);

  return (
    <KnockProvider
      apiKey={process.env.NEXT_PUBLIC_KNOCK_PUBLIC_API_KEY as string}
      userId={"user-2"}
      // userToken={currentUser.knockUserToken}
    >
      <KnockFeedProvider
        feedId={process.env.NEXT_PUBLIC_KNOCK_FEED_CHANNEL_ID as string}
      >
        <NotificationIconButton
          ref={notifButtonRef}
          onClick={(e) => setIsVisible(!isVisible)}
        />
        <NotificationFeedPopover
          buttonRef={notifButtonRef}
          isVisible={isVisible}
          onClose={() => setIsVisible(false)}
        />
        <NotificationToaster />
        {children}
      </KnockFeedProvider>
    </KnockProvider>
  );
}
