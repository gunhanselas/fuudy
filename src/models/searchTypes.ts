export interface Result {
  id: number,
  calories: number,
  carbs: number,
  fat: string,
  image: string,
  protein: string,
  title: string
}
export type Results = Array<Result>


export interface Query {
  query: string,
  cuisine?: 'african' | 'american' | 'british' | 'cajun' | 'caribbean' | 'chinese' | 'eastern european' | 'european' | 'french' | 'german' | 'greek' | 'indian' | 'irish' | 'italian' | 'japanese' | 'jewish' | 'korean' | 'latin american' | 'mediterranean' | 'mexican' | 'middle eastern' | 'nordic' | 'southern' | 'spanish' | 'thai' | 'vietnamese',
  excludeCuisine?: 'african' | 'american' | 'british' | 'cajun' | 'caribbean' | 'chinese' | 'eastern european' | 'european' | 'french' | 'german' | 'greek' | 'indian' | 'irish' | 'italian' | 'japanese' | 'jewish' | 'korean' | 'latin american' | 'mediterranean' | 'mexican' | 'middle eastern' | 'nordic' | 'southern' | 'spanish' | 'thai' | 'vietnamese' ,
  diet?:  'gluten free' | 'ketogenic' | 'vegetarian' | 'lacto-vegetarian' | 'ovo-vegetarian' | 'vegan' | 'pescetarian' | 'paleo' | 'primal' | 'whole30',
  intolerances?:  'dairy' | 'egg' | 'gluten' | 'grain' | 'peanut' | 'seafood' | 'sesame' | 'shellfish' | 'soy' | 'sulfite' | 'tree nut' | 'wheat',
  equipment?: string,
  includeIngredients?: string,
  excludeIngredients?: string,
  type?: 'main course' | 'side dish' | 'dessert' | 'appetizer' | 'salad' | 'bread' | 'breakfast' | 'soup' | 'beverage' | 'sauce' | 'marinade' | 'fingerfood' | 'snack' | 'drink'

}