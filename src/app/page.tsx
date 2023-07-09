import {
  ImportantNotUrgent,
  ImportantUrgent,
  NotImportantNotUrgent,
  NotImportantUrgent
} from "./components";

export default function Home() {

  return (
    <div className="flex flex-row bg-slate-600 h-[90%]">
      <div className="w-[2%] bg-red-500 flex flex-row items-center">
        <div className="flex flex-col justify-around bg-green-500 w-full h-full">
        <h1 className="text-3xl [writing-mode:vertical-lr] rotate-180">Importante</h1>
        <h1 className="text-3xl [writing-mode:vertical-lr] rotate-180">Não Importante</h1>
        </div>
      </div>
      <div className="w-[98%] bg-blue-500">
        <div className="flex flex-row justify-around bg-red-500 w-full h-[5%]">
          <h1 className="text-3xl">Urgente</h1>
          <h1 className="text-3xl">Não Urgente</h1>
        </div>
        <div className="grid grid-cols-2 gap-4 justify-between bg-purple-500 w-full h-[95%]">
          <div className="flex justify-center border-r-2 border-b-2">
            <ImportantUrgent />
          </div>
          <div className="flex justify-center border-l-2 border-b-2">
            <ImportantNotUrgent />
          </div>
          <div className="flex justify-center border-r-2 border-t-2">
            <NotImportantUrgent />
          </div>
          <div className="flex justify-center border-l-2 border-t-2">
            <NotImportantNotUrgent />
          </div>
        </div>
      </div>
    </div>
  )
}
