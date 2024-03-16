import { Tool } from "@/components/ui/icon"

enum Alignment {
    Left = "Left",
    Right = "Right",
    Center = "Center",
    Justify = "Justify"
}

export interface Cell {
    type: HTMLElement,
    align?: Alignment,
    indent?: number
}

export interface Para extends Cell {
    type: HTMLParagraphElement
}

export interface Image extends Cell {
    type: HTMLImageElement,
    height?: number,
    width?: number
}

interface Point {
    x: number,
    y: number
}

export interface Chart extends Image {
    // func?:   ------> Implement this
    dataPoints?: Point
}

export interface Table extends Cell {
    type: HTMLTableElement,
    rows?: number,
    col?: number,
    headCol?: boolean
}

export interface ShadedCell extends Cell {
    type: HTMLDivElement
    bgColor?: string
}

export interface CodeBlock extends ShadedCell {
    lang?: string
}

export interface Callout extends ShadedCell {
    style?: string,
    title?: string
}

export interface Link {
    internal?: boolean,
    hover?: boolean
}

export interface EmbedBlock extends Cell {
    type: HTMLDivElement,
    favicon: Image,
    title: string
}