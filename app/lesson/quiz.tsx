"use client";

import { challengeOptions, challenges } from "@/db/schema";
import { useState } from "react";
import { Header } from "./header";
import { QuestionBubble } from "./question-bubble";
import { Challenge } from "./challenge";

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

  const [challenges] = useState(initialLessonChallenge);
  const [activeIndex, setActiveIndex] = useState(() => {
    const unCompletedIndex = challenges.findIndex(
      (challenge) => !challenge.completed
    );
    return unCompletedIndex === -1 ? 0 : unCompletedIndex;
  });
  const challenge = challenges[activeIndex];
  const options = challenge?.challengeOptions ?? [];
  const title =
    challenge.type === "ASSIST"
      ? "Select The Correct Meaning"
      : challenge.question;
  return (
    <>
      <Header
        hearts={hearts}
        percentage={percentage}
        hasActiveSubscription={!!userSubscription?.isActive}
      />
      <div className="flex-1">
        <div className="h-full flex items-center justify-center">
          <div className="lg:min-h-[350px] lg:w-[600px] flex flex-col gap-y-12 w-full px-6 lg:px-0">
            <h1 className="text-lg lg:text-3xl text-center lg:text-start font-bold text-neutral-700">
              {title}
            </h1>
            <div>
              {challenge.type === "ASSIST" && (
                <QuestionBubble question={challenge.question} />
              )}

              <Challenge
                options={options}
                onSelect={() => {}}
                status="none"
                selectedOption={undefined}
                disabled={false}
                type={challenge.type}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
