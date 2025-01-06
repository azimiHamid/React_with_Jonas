/* eslint-disable react/prop-types */
import { memo, useEffect, useState } from "react";
import clickSound from "./ClickSound.m4a";

function Calculator({ workouts, allowSound }) {
  const [number, setNumber] = useState(workouts.at(0).numExercises);
  const [sets, setSets] = useState(3);
  const [speed, setSpeed] = useState(90);
  const [durationBreak, setDurationBreak] = useState(5);

  const [duration, setDuration] = useState(0);

  /**
   * If playing the sound is strictly tied to changes in duration,
   * your useEffect approach is fine. However, if playSound is 
   * conceptually an independent action that might be triggered on
   * demand (e.g., button clicks, external events), then the
   * useCallback approach is better.
  */
  // const playSound = useCallback(
  //   function () {
  //     if (!allowSound) return;
  //     const sound = new Audio(clickSound);
  //     sound.play();
  //   },
  //   [allowSound]
  // );

  useEffect(
    function () {
      setDuration((number * sets * speed) / 60 + (sets - 1) * durationBreak);
    },
    [number, sets, speed, durationBreak]
  );

  function playSound(allowSound) {
    if (!allowSound) return;
    const sound = new Audio(clickSound);
    sound.volume = 0.001;
    sound.play();
  }

  useEffect(
    function () {
      playSound(allowSound);
    },
    [duration, allowSound]
  );

  useEffect(
    function () {
      console.log(duration, sets);
      document.title = `Your ${number}-exercise workout`;
    },
    /** If dependencies are not added here, the effect will
     * capture outdated values from its closure due to React's
     * default behavior of using the closure created during the
     * render when the effect was defined. */
    [number, duration, sets]
  );

  const mins = Math.floor(duration);
  const seconds = (duration - mins) * 60;

  function handleInc() {
    setDuration((prev) => Math.floor(prev) + 1);
  }

  function handleDec() {
    setDuration((prev) => (prev > 1 ? Math.ceil(prev) - 1 : 0));
  }

  return (
    <>
      <form>
        <div>
          <label>Type of workout</label>
          <select value={number} onChange={(e) => setNumber(+e.target.value)}>
            {workouts.map((workout) => (
              <option value={workout.numExercises} key={workout.name}>
                {workout.name} ({workout.numExercises} exercises)
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>How many sets?</label>
          <input
            type="range"
            min="1"
            max="5"
            value={sets}
            onChange={(e) => setSets(e.target.value)}
          />
          <span>{sets}</span>
        </div>
        <div>
          <label>How fast are you?</label>
          <input
            type="range"
            min="30"
            max="180"
            step="30"
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
          />
          <span>{speed} sec/exercise</span>
        </div>
        <div>
          <label>Break length</label>
          <input
            type="range"
            min="1"
            max="10"
            value={durationBreak}
            onChange={(e) => setDurationBreak(e.target.value)}
          />
          <span>{durationBreak} minutes/break</span>
        </div>
      </form>
      <section>
        <button onClick={handleDec}>–</button>
        <p>
          {mins < 10 && "0"}
          {mins}:{seconds < 10 && "0"}
          {seconds}
        </p>
        <button onClick={handleInc}>+</button>
      </section>
    </>
  );
}

export default memo(Calculator);
