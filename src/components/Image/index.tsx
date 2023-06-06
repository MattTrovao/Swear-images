import html2canvas from "html2canvas";

export function Image() {
  function saveAs(uri: string, filename: string) {
    var link = document.createElement("a");
    if (typeof link.download === "string") {
      link.href = uri;
      link.download = filename;

      //Firefox requires the link to be in the body
      document.body.appendChild(link);

      //simulate click
      link.click();

      //remove the link when done
      document.body.removeChild(link);
    } else {
      window.open(uri);
    }
  }

  async function saveImage() {
    const canvas = await html2canvas(document.getElementById("finalImage"), { useCORS: true })
    const image = canvas.toDataURL("image/png", 1.0);
    saveAs(image, 'Imagem_Mal-Educada.png');
  }

  return (
    <>
      <button onClick={() => saveImage()} className="m-auto h-9 bg-emerald-800 px-5 text-white rounded-md font-myfont ease-in-out duration-300 hover:shadow-lg hover:shadow-emerald-500/50 hover:opacity-70">
        Salvar imagem
      </button>
      <section id="finalImage" className="m-auto block w-[680px] h-[680px] relative">
        <img src="https://images.unsplash.com/photo-1682366748076-8773692a7594?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Imagem da mensagem" className="h-full object-cover object-center" />
        <div className="bg-zinc-900 absolute inset-0 opacity-70"></div>
        <div className="absolute z-10 inset-0 flex justify-center items-center">
          <img src="../../../src/assets/border.svg" alt="Borda da mensagem" className="w-[93%] h-[93%] absolute top-[2%] left-[4%] opacity-40" />

          <h1 id="message" className="text-white w-[85%] text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit assumenda rem adipisci quos expedita aut laborum ea blanditiis. Sequi ex aperiam quidem, impedit minus dignissimos nulla optio minima explicabo magnam?
          </h1>
        </div>

        <div className="absolute bottom-0 left-0 w-full bg-zinc-900/75 px-4 flex justify-end items-center">
          <p className="text-end text-white font-myfont text-xs py-2">
            Criado por: Imagens Mal-educadas
          </p>
        </div>
      </section>
    </>
  )
}