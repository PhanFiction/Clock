'use client'
import { useState, useEffect } from "react";
import Button from "./components/Button/Button";

type Data = {
  length: number,
}

export default function Home() {
  const [sessionLength, setSessionLength] = useState<Data>({ length: 25 });
  const [breakLength, setBreak] = useState<Data>({ length: 5 });
  const [session, setSession] = useState<Data>({ length: 25});
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const startCountdown = () => {
    setIsPlaying(true);
  };

  const stopCountdown = () => {
    setIsPlaying(false);
  };

  const resetSession = () => {
    setIsPlaying(false);
    setSessionLength(prevSession => ({ length: 25}));
    setSession(prevSession => ({ length: 25}));
    setBreak(prevSession => ({ length: 5}));
  }

  const updateBreakLength = (name: string) => {
    if (name === '-') {
      setSessionLength(prevSession => ({ length: prevSession.length - 5 }));
      setSession(prevSession => ({ length: prevSession.length - 5}));
    } else if (name === '+') {
      setSessionLength(prevSession => ({ length: prevSession.length + 5}));
      setSession(prevSession => ({ length: prevSession.length + 5}));
    }
  }

  const updateSessionLength = (name: string) => {
    if (name === '-') {
      setBreak(prevSession => ({ length: prevSession.length - 1 }));
    } else if (name === '+') {
      setBreak(prevSession => ({ length: prevSession.length + 1}));
    }
  }

  const handleSession = () => {
    setSession((prevSession) => ({ length: prevSession.length - 1 }));
  }

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isPlaying) {
      intervalId = setInterval(() => {
        handleSession();
      }, 1000); // Adjust the interval as needed (e.g., 1000 milliseconds = 1 second)
    }

    // Cleanup function to clear the interval when the component unmounts or when the user stops it
    return () => clearInterval(intervalId);

  }, [isPlaying]); // The effect depends on the isPlaying state
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center align-center bg-mediumseagreen text-white">
      <h1 className="font-itim text-6xl text-center mb-8">Work Session</h1>
      <section className="flex flex-col w-2/4 items-center">
          <div className="flex w-full">
            <div id="session-length" className="flex flex-col w-2/4 p-4 items-center">
              <h3 className="font-itim text-3xl text-center">Session Length</h3>
              <div className="flex flex-row w-2/4 align-center justify-around p-4">
                <Button name={"-"} handleClick={updateBreakLength}/>
                <span className="text-4xl mx-4 leading-0">{sessionLength.length}</span>
                <Button name={"+"} handleClick={updateBreakLength}/>
              </div>
            </div>
            <div id="break-length" className="flex flex-col w-2/4 p-4 items-center">
              <h3 className="font-itim text-3xl text-center">Break Length</h3>
              <div className="flex flex-row w-2/4 align-center justify-around p-4">
                <Button name={"-"} handleClick={updateSessionLength}/>
                <span className="text-4xl mx-4 leading-0">{breakLength.length}</span>
                <Button name={"+"} handleClick={updateSessionLength}/>
              </div>
            </div>
          </div>

          <article className="outline outline-[#63e2c6] outline-5 w-3/4 p-8 mt-8 rounded-md">
            <h4 className="text-5xl text-center">Session</h4>
            <div className="flex flex-col items-center">
              <span className="text-4xl text-center my-4">{session.length}</span>
              <div className="flex w-2/4 justify-center justify-between gap-4">
                <Button name={"Play"} handleClick={startCountdown}/>
                <Button name="Stop" handleClick={stopCountdown} />
                <Button name={"Reset"} handleClick={resetSession}/>
              </div>
            </div>
          </article>

      </section>
    </main>
  )
}
