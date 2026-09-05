export interface IVol{
    id: number,
    company: string,
    logo_company: string,
    vol_type: string,
    depart: IDestination
    destinations: IDestination
    vol_time: string
    scale: IScale,
    prices: IPrice
}

export interface IDestination {
    type: string,
    town: string,
    time: string,
    airport: string
}

export interface IScale {
    isScale: boolean
    towns: string[]
}

export interface IPrice {
    class: IClass
    currency: string
}

export interface IClass{
    first_class: number,
    business_class: number,
    economic_class: number
}