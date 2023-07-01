export type travel = {
    id: number,
    origin: string,
    destiny: string,
    shipping_cost: number
}

export type updateTravel = {
    origin?: string,
    destiny?: string,
    shipping_cost?: number
}

export type newTravel = Omit<travel, "id">;