"use client";

import { challengeOptions, challenges } from "@/db/schema";

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
  userSubscription: undefined;
};

export const Quiz = ({
  initialLessonId,
  initialPercentage,
  initialHearts,
  initialLessonChallenge,
  userSubscription,
}: Props) => {
  return <div>Quiz</div>;
};
