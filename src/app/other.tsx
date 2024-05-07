"use client";

import { useKnockFeed } from "@knocklabs/react";

export function Other() {
  const { useFeedStore } = useKnockFeed();
  const badgeCountValue = useFeedStore((state) => state.metadata.total_count);
  return <div>{badgeCountValue}</div>;
}
