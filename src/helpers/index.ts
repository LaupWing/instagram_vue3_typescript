import faker from 'faker'

export default async (total:number)=>{
   const suggestions = [...Array(total)].map((_, i)=>({
      ...faker.helpers.contextualCard(),
      id: i
   }))
   const fetchImages = await fetch('https://randomuser.me/api/?results=20')
   const images = await fetchImages.json() 

   return suggestions.map((suggestion, i)=>({
      ...suggestion,
      avatar: images.results[i].picture.thumbnail
   }))
}