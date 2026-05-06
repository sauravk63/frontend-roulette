import { Button } from "./Button";

export function Header(){
  return <header className="flex items-center justify-between">
    <div className="flex flex-col gap-1">
      <h1 className="text-3xl font-bold">Habit Tracker</h1>
      <span className="text-zinc-400 text-sm">Completed 1 / 1</span>
    </div>
    <div className="flex flex-col gap-3 items-end">
      <span className="text-zinc-400 text-sm">May 6 - May 14</span>
      <div className="flex items-center gap-3">
      <Button>Prev</Button>
      <Button>Next</Button>
      </div>
    </div>
  </header>
}