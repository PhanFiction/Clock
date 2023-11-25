
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center align-center bg-mediumseagreen text-white">
      <h1 className="font-itim text-6xl text-center">Work Session</h1>
      <section className="flex flex-col w-2/4 items-center bg-black">
          <div className="flex w-full bg-black">
            <div id="session-length" className="flex flex-col w-2/4 p-4 items-center">
              <h3 className="font-itim text-3xl text-center">Session Length</h3>
              <div className="flex flex-row w-2/4 align-center justify-around p-4">
                <button className="outline outline-[#63e2c6] rounded-md w-3/4"><span className="text-3xl">-</span></button>
                <span className="text-4xl mx-4 leading-0">25</span>
                <button className="outline outline-[#63e2c6] rounded-md w-3/4"><span className="text-3xl">+</span></button>
              </div>
            </div>
            <div id="break-length" className="flex flex-col w-2/4 p-4 items-center">
              <h3 className="font-itim text-3xl text-center">Break Length</h3>
              <div className="flex flex-row w-2/4 align-center justify-around p-4">
                <button className="outline outline-[#63e2c6] rounded-md w-3/4"><span className="text-3xl">-</span></button>
                <span className="text-4xl mx-4 leading-0">25</span>
                <button className="outline outline-[#63e2c6] rounded-md w-3/4"><span className="text-3xl">+</span></button>
              </div>
            </div>
          </div>

          <article>
            <h4>Session</h4>
            <span>25:00</span>
            <button>Play</button>
            <button>Reset</button>
          </article>

      </section>
    </main>
  )
}
