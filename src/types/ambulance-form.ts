export type AmbulanceFormData = {
    doctorPhone: string
    stationNumber: string
    crewNumber: string
    dateOfCall: Date
    arriavalTime: Date | null
    endOfCallTime: Date | null
}