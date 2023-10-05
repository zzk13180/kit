import { HexBoard } from './HexBoard'

const canvas = document.querySelector('#canvas')

new HexBoard(canvas as HTMLCanvasElement).draw()
