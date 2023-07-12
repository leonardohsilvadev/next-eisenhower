type QuadrantHeaderProps = {
  tasksCount: number
  onDelete: () => void
}

export default function QuadrantHeader({ tasksCount, onDelete }: QuadrantHeaderProps) {
  return (
    <div className="flex flex-row justify-between items-center w-full my-2">
      <h3 className="text-xl text-zinc-100 font-semibold text-opacity-80">{tasksCount}/5 tarefas</h3>
      <div>
        {/* <button
          className="bg-gradient-to-tr from-violet-500 to-purple-700 text-white font-bold rounded-lg p-3 mr-2"
        >
          Desmarcar Todas
        </button> */}
        {tasksCount > 1 && (
          <button
            className="bg-gradient-to-tl from-red-500 to-red-800 text-white font-bold rounded-lg p-2 ml-2"
            onClick={onDelete}
          >
            Limpar todas
          </button>
        )}
      </div>
    </div>
  )
}