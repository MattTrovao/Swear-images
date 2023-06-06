export function Image() {
  return (
    <>
      <button className="m-auto h-9 bg-emerald-800 px-5 text-white rounded-md font-myfont ease-in-out duration-300 hover:shadow-lg hover:shadow-emerald-500/50 hover:opacity-70">
        Salvar imagem
      </button>
      <section id="finalImage" className="m-auto block w-[680px] h-[680px] relative">
        <img src="https://shorturl.at/cgvGL" alt="Imagem da mensagem" className="h-full object-cover object-center" />
        <div className="bg-zinc-900 absolute inset-0 opacity-70"></div>
        <div className="absolute z-10 inset-0 flex justify-center items-center">
          <img src="../../../src/assets/border.svg" alt="Borda da mensagem" className="w-[93%] h-[93%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />

          <h1 id="message" className="text-white w-[85%] text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit assumenda rem adipisci quos expedita aut laborum ea blanditiis. Sequi ex aperiam quidem, impedit minus dignissimos nulla optio minima explicabo magnam?
          </h1>
        </div>

        <div className="absolute bottom-0 left-0 w-full bg-zinc-900/75 py-1 px-4">
          <p className="text-end text-white font-myfont text-xs">
            Criado por: Imagens Mal-educadas
          </p>
        </div>
      </section>
    </>
  )
}