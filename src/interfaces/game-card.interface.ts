import type { GameCategory } from "../types/category-type";

export interface GameCard {
    slug: string,
    name: string,
    category: GameCategory,
    price: string,
    shortDescription: string,
    rating: number,
    likesCount: number,
    cardImage: string,
    featured: boolean,
}