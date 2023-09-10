import {
  formattedDate,
  Streak,
  buildStreak,
  updateStreak,
  KEY,
} from "../src/utils";

function differenceInDays(dateLeft: Date, dateRight: Date): number {
  const diffTime = Math.abs(dateLeft.getTime() - dateRight.getTime());
  const differenceInDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return differenceInDays;
}

function shouldIncrementOrResetStreakCount(
  currentDate: Date,
  lastLoginDate: string
): "increment" | "reset" | "none" {
  // we get 11/5/2021
  // so to get 5, we split on / and get the second item
  const difference =
    currentDate.getDate() - parseInt(lastLoginDate.split("/")[1]);

  // Same-day login, do nothing
  if (difference === 0) {
    return "none";
  }

  // This means they logged in the day after the currentDate
  if (difference === 1) {
    return "increment";
  }

  // otherwise they logged in after a day, which would break the streak
  return "reset";
}

export function streakCounter(storage: Storage, date: Date): Streak {
  // get current streak from localstorage
  const streakInLocalStorage = storage.getItem(KEY);

  if (streakInLocalStorage) {
    try {
      const streak = JSON.parse(streakInLocalStorage) as Streak;
      const state = shouldIncrementOrResetStreakCount(
        date,
        streak.lastLoginDate
      );
      const SHOULD_INCREMENT = state === "increment";
      const SHOULD_RESET = state === "reset";

      if (SHOULD_INCREMENT) {
        const updatedStreak = buildStreak(date, {
          startDate: streak.startDate,
          currentCount: streak.currentCount + 1,
          lastLoginDate: formattedDate(date),
        });

        // store in localStorage
        updateStreak(storage, updatedStreak);

        return updatedStreak;
      }

      if (SHOULD_RESET) {
        const updatedStreak = buildStreak(date);

        // store in localStorage
        updateStreak(storage, updatedStreak);

        return updatedStreak;
      }
      return streak;
    } catch (error) {
      console.error("Failed to parse streak from localStorage");
    }
  }
  const streak = buildStreak(date);
  // store in localStorage
  updateStreak(storage, streak);

  return streak;
}
