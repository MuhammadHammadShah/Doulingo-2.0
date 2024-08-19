"use client";

import { challengeOptions, challenges } from "@/db/schema";
import { useState } from "react";
import { Header } from "./header";

// type Props = {
//   initialLessonId: number;
//   initialPercentage: number;
//   initialHearts: number;
//   initialLessonChallenge: Omit<
//     typeof challenges.$inferSelect & {
//       completed: boolean;
//       challengeOptions: (typeof challengeOptions.$inferSelect)[];
//     },
//     "challengeProgress"
//   >[];
//   userSubscription: undefined;
// };

// type Props = {
//   initialLessonId: number;
//   initialPercentage: number;
//   initialHearts: number;
//   initialLessonChallenge: (typeof challenges.$inferSelect & {
//     completed: boolean;
//     challengeOptions: (typeof challengeOptions.$inferSelect)[];
//     challengeProgress: any; // Replace any with the correct type
//   })[];
//   userSubscription: undefined;
// };

type Props = {
  initialLessonId: number;
  initialPercentage: number;
  initialHearts: number;
  initialLessonChallenge: (typeof challenges.$inferSelect & {
    completed: boolean;
    challengeOptions: (typeof challengeOptions.$inferSelect)[];
  })[];
  userSubscription: any;
};

export const Quiz = ({
  initialLessonId,
  initialPercentage,
  initialHearts,
  initialLessonChallenge,
  userSubscription,
}: Props) => {
  const [hearts, setHearts] = useState(initialHearts);
  const [percentage, setPercentage] = useState(initialPercentage);
  return (
    <>
      <Header
        hearts={hearts}
        percentage={percentage}
        hasActiveSubscription={!!userSubscription?.isActive}
      />
    </>
  );
};
