'use strict'
const recipe = {
  name: 'mac and cheese',
  author: 'Mom',
  steps: ['step', 'step2'],
  listOfIngredients: [
    {
      ingredient:
      {
        name: 'pasta',
        inStock: true
      },
      unit: 'cup',
      quantity: 1,
      notes: 'Very Tasty'
    },
    {
      ingredient:
      {
        name: 'cheese',
        inStock: true
      },
      unit: 'cup',
      quantity: 1,
      notes: 'Very Tasty'
    }
  ],
  servings: 2
}
for (const item of recipe.listOfIngredients) {
  console.log(item.quantity)
  console.log(item.unit)
  console.log(item.ingredient.name)
}
