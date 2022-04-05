import { createContext } from "react";

type Optional<T> = T | undefined;

type WorkoutDay = Optional<"a" | "b">;

/**
 {
     '02-18-2020': [
            {
                exercise: 'squat',
                value: 100
            },
            {
                exercise: 'bench',
                value: 200
            }
        ],
    
 }
 */

interface WorkoutHistory {
  [key: string]: Array<{
    exercise: string;
    value: number;
  }>;
}

type OptionalNumber = Optional<number>;

class WorkoutStore {
  currenSquat: OptionalNumber;
  currentBenchPress: OptionalNumber;
  currentDeadlift: OptionalNumber;
  currentOverheadPress: OptionalNumber;
  currentBarbellRow: OptionalNumber;

  lastWorkoutType: WorkoutDay;

  history: Optional<WorkoutHistory>;
}

export const WorkoutStoreContext = createContext(new WorkoutStore());
  