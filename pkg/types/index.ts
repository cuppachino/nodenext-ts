import { helloWorld } from '@/libs/hello-world.js'

export type HelloWorld = ReturnType<typeof helloWorld>

export const yy = () => helloWorld()

yy()
