import React, { useState } from "react"
import { foaas, unsplash } from "../../axios/api"

import Swal from 'sweetalert2/dist/sweetalert2.js'

import * as Select from '@radix-ui/react-select';
import * as Dialog from '@radix-ui/react-dialog';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';

interface typeSwears {
  map: (data: string, index: number) => JSX.Element;
  name: string,
  url: string
}

export function Form() {
  const [swearList, setSwearList] = useState<typeSwears | null>()

  const [bgValue, setBgValue] = useState<string>('')

  const [imgOptions, setImgOptions] = useState<Array<String> | null>([])

  async function getSwearList() {
    try {
      let response = await foaas.get('/operations')

      setSwearList(response.data)

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro!',
        text: error,
      })
    } finally {
      console.log(swearList);

    }
  }

  const handleBgValueChange = (e: any) => {
    setBgValue(e.target.value)
  }

  async function searchBg() {

    let response = await unsplash(`/search/photos?query=${bgValue}`)

    console.log(response.data);
    setImgOptions(response.data.results);
  }

  const fields = 'flex flex-col gap-2'
  const labelClass = 'text-sm mb-1 font-myfont'
  const inputClass = 'rounded-md bg-slate-800 p-2 text-white h-9 font-myfont ease-in-out duration-300 placeholder:text-gray-500  hover:shadow-lg hover:shadow-slate-500/50'
  const radixClass = `cursor-pointer flex justify-between items-center ${inputClass}`
  const btnClass = `h-9 text-white rounded-md font-myfont ease-in-out duration-300 hover:shadow-lg hover:shadow-violet-500/50 hover:opacity-70 disabled:opacity-50 disabled:cursor-not-allowed`

  return (
    <section className="bg-sky-100 rounded-lg p-8 grid grid-cols-5 gap-4 items-end">
      <div className={fields}>
        <label htmlFor="swear" className={labelClass}>
          Xingamento:
        </label>

        <Select.Root>
          <Select.Trigger className={radixClass}>
            <Select.Value placeholder="Lista de Xingamentos" />
            <Select.Icon className="text-violet11">
              <ChevronDownIcon />
            </Select.Icon>
          </Select.Trigger>

          <Select.Portal>
            <Select.Content className="overflow-hidden bg-slate-500 rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
              <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-slate-500 text-white cursor-default">
                <ChevronUpIcon />
              </Select.ScrollUpButton>
              <Select.Viewport className="p-[5px]">
                <Select.Item value='1'>
                  <Select.ItemText className="px-[25px] text-xs font-myfont text-white leading-[25px] outline-0 ease-in-out duration-300 hover:opacity-60">
                    1
                  </Select.ItemText>
                </Select.Item>
              </Select.Viewport>

              <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-slate-500 text-white cursor-default">
                <ChevronDownIcon />
              </Select.ScrollDownButton>

            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div>

      <div className={fields}>
        <label htmlFor="swear" className={labelClass}>
          Emitente:
        </label>
        <input type="text" id="swear" className={inputClass} placeholder="Nome" />
      </div>

      <div className={fields}>
        <label htmlFor="swear" className={labelClass}>
          Background:
        </label>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className={radixClass}>
              Imagem de Fundo
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="bg-black/75 data-[state=open]:animate-overlayShow fixed inset-0 z-20" />
            <Dialog.Content className="z-20 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[100%] max-w-[80vw] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-sky-100 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
              <Dialog.Title className="m-0 text-[25px] font-myfont">
                Imagem de Fundo
              </Dialog.Title>

              <Dialog.Description className="mb-5 text-[18px] font-myfont">
                Escolha a imagem de fundo para a sua mensagem
              </Dialog.Description>

              <div className="flex items-end gap-6">
                <div className={fields + ' flex-auto'}>
                  <label htmlFor="swear" className={labelClass}>
                    Categoria/Nome:
                  </label>
                  <input
                    type="text" id="swear"
                    className={inputClass}
                    placeholder="Imagem de Fundo"
                    value={bgValue}
                    onChange={handleBgValueChange}
                  />
                </div>
                <button
                  className={btnClass + ' bg-violet-800 hover:shadow-violet-500/50 px-6'}
                  onClick={() => searchBg()}
                  disabled={!bgValue}
                >
                  Buscar imagem
                </button>
              </div>


              {imgOptions && (
                <div className="grid grid-cols-5 gap-5 my-10">
                  {imgOptions?.map((data) => (
                    <div>
                      <img src={data.urls.thumb} alt="" key={data.id} className="h-[110px] w-full object-contain"/>
                      <p className="text-sm capitalize text-black text-center font-myfont">
                        {data.user.name}
                      </p>
                    </div>
                  ))}
                </div>
              )}


              <div className="mt-[25px] flex justify-end">
                <Dialog.Close asChild>
                  <button className={btnClass + ' bg-emerald-800 hover:shadow-emerald-500/50 px-6'}>
                    Save changes
                  </button>
                </Dialog.Close>
              </div>

              <Dialog.Close asChild>
                <button
                  className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                  aria-label="Close"
                >
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>

      <div className={fields}>
        <label htmlFor="swear" className={labelClass}>
          Font:
        </label>
        <input type="text" id="swear" className={inputClass} placeholder="Tipo da fonte" />
      </div>

      <button
        onClick={() => getSwearList()}
        className={btnClass + ' bg-violet-800 hover:shadow-violet-500/50'}
      >
        Gerar imagem
      </button>
    </section>

  )
}