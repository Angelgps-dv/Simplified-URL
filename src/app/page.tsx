import { Footer } from "./components/footer/footer";
export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        SIMPLIFIED URL
        <div className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <div className="mb-2 tracking-[-.01em]">
            URL too long? Simplify it.
          </div>
          <input placeholder="Paste your URL Here" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
