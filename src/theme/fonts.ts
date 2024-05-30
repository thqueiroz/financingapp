import { Keania_One, Fauna_One } from 'next/font/google'

const keaniaOne = Keania_One({ weight: '400', preload: false })
const faunaOne = Fauna_One({ weight: '400' , variable: '--font-fauna', preload: false })

export const fonts = {
    keaniaOne,
    faunaOne,
}