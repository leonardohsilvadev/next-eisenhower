import {
  ImportantNotUrgent,
  ImportantUrgent,
  NotImportantNotUrgent,
  NotImportantUrgent
} from "./components";

export default function Home() {

  return (
    <div className="flex flex-row bg-gradient-to-br from-amber-300 to-amber-900 h-[90%]">
      <div className="w-[2%] flex flex-row items-center">
        <div className="flex flex-col justify-around w-full h-full">
        <h1 className="text-3xl font-semibold [writing-mode:vertical-lr] rotate-180">Importante</h1>
        <h1 className="text-3xl font-semibold [writing-mode:vertical-lr] rotate-180">Não Importante</h1>
        </div>
      </div>
      <div className="w-[98%]">
        <div className="flex flex-row justify-around w-full h-[5%]">
          <h1 className="text-3xl font-semibold">Urgente</h1>
          <h1 className="text-3xl font-semibold">Não Urgente</h1>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 justify-between w-full h-[95%]">
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
