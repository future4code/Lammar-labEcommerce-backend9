export type movie = {
   id: number,
   title: string,
   year: number
}
export enum GENDER {
   MALE = "MALE",
   FEMALE = "FEMALE",
   OTHER = "OTHER"
}

export type caracter = {
   id: number,
   name: string,
   gender: GENDER,
   description?: string

}