import faker from 'faker'

type FakerObject  = {
   avatar: string;
   username: string;
   name: string;
}

export default async (total:number):Promise<Promise<FakerObject>[]>=>{
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