export function Form() {
  const fields = 'flex flex-col gap-2'
  const labelClass = 'text-sm mb-1 font-myfont'
  const inputClass = 'rounded-md bg-slate-800 p-2 text-white h-9 font-myfont ease-in-out duration-300 placeholder:text-gray-500  hover:shadow-lg hover:shadow-slate-500/50'

  return (
    <section className="bg-sky-100 rounded-lg p-8 grid grid-cols-4 gap-4 items-end">
      <div className={fields}>
        <label htmlFor="swear" className={labelClass}>
          Xingamento:
        </label>
        <input type="text" id="swear" className={inputClass} placeholder="Lista de Xingamentos"/>
      </div>

      <div className={fields}>
        <label htmlFor="swear" className={labelClass}>
          Background:
        </label>
        <input type="text" id="swear" className={inputClass} placeholder="Imagem de Fundo"/>
      </div>

      <div className={fields}>
        <label htmlFor="swear" className={labelClass}>
          Font:
        </label>
        <input type="text" id="swear" className={inputClass} placeholder="Tipo da fonte"/>
      </div>

      <button className="h-9 bg-violet-800 text-white rounded-md font-myfont ease-in-out duration-300 hover:shadow-lg hover:shadow-violet-500/50 hover:opacity-70">
        Gerar imagem
      </button>
    </section>
  )
}