// This file contains the interfaces for the data models

// Product interface
export interface IProduct {
     id: number,
     title: string,
     price: number,
     description: string,
     category: string,
     image: string,
     rating: {
          rate: number,
          count: number
     }
}