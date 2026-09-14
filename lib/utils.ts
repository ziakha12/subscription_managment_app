import dayjs from "dayjs"

export const formatSubscriptionDateTime = (value? : string): string  =>{
    if(!value) return "Not Provided"

    const parsedDate = dayjs(value)
    return parsedDate.isValid()? parsedDate.format('MM/DD/YYYY') : "Not Provided"
}

export const formateStatusLabel =  (value? : string): string  =>{
    if(!value) return "Unknown"
    return value.charAt(0).toUpperCase() + value.slice(1)
}