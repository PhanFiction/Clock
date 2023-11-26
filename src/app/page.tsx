
export default function Home() {
  const turqoise = '#63e2c6';
  return (
    <main className="flex min-h-screen flex-col items-center justify-center align-center bg-mediumseagreen text-white">
      <h1 className="font-itim text-6xl text-center mb-8">Work Session</h1>
      <section className="flex flex-col w-2/4 items-center">
          <div className="flex w-full">
            <div id="session-length" className="flex flex-col w-2/4 p-4 items-center">
              <h3 className="font-itim text-3xl text-center">Session Length</h3>
              <div className="flex flex-row w-2/4 align-center justify-around p-4">
                <button className={`outline outline-[${turqoise}] rounded-md w-3/4`}><span className="text-3xl">-</span></button>
                <span className="text-4xl mx-4 leading-0">25</span>
                <button className={`outline outline-[${turqoise}] rounded-md w-3/4`}><span className="text-3xl">+</span></button>
              </div>
            </div>
            <div id="break-length" className="flex flex-col w-2/4 p-4 items-center">
              <h3 className="font-itim text-3xl text-center">Break Length</h3>
              <div className="flex flex-row w-2/4 align-center justify-around p-4">
                <button className={`outline outline-[${turqoise}] rounded-md w-3/4`}><span className="text-3xl">-</span></button>
                <span className="text-4xl mx-4 leading-0">25</span>
                <button className={`outline outline-[${turqoise}] rounded-md w-3/4`}><span className="text-3xl">+</span></button>
              </div>
            </div>
          </div>

          <article className="outline outline-[#63e2c6] outline-5 w-3/4 p-8 mt-8 rounded-md">
            <h4 className="text-5xl text-center">Session</h4>
            <div className="flex flex-col items-center">
              <span className="text-4xl text-center my-4">25:00</span>
              <div className="flex w-3/4 justify-center">
                <button>Play</button>
                <button>Reset</button>
              </div>
            </div>
          </article>

      </section>
    </main>
  )
}
