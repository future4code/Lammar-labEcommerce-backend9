import { caracter, GENDER, movie } from "./types"

export const movies: movie[] = [
   {
      id: 1,
      title: "X-men",
      year: 2000
   },
   {
      id: 2,
      title: "Deadpool",
      year: 2016
   }
]

export let caracters:caracter[] = [
      {
         id: 1,
         name: "Storn",
         gender: GENDER.FEMALE
   },
   {
         id: 2,
         name: "Deadpoll",
         gender: GENDER.OTHER,
      description:"Sexy motherF***"      
   },
   {
         id: 3,
         name:"Colossus" ,
         gender: GENDER.MALE
   }
]