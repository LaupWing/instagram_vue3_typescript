import faker from 'faker'

interface FakerObject {
   avatar: string;
   username: string;
   name: string;
}

export default async (total:number):Promise<FakerObject[]>=>{
   const suggestions = [...Array(total)].map((_, i)=>({
      ...faker.helpers.contextualCard(),
      id: i
   }))
   const fetchImages = await fetch('https://randomuser.me/api/?results=20')
   const images = await fetchImages.json() 

   return suggestions.map((suggestion, i)=>({
      username:suggestion.username,
      name:suggestion.name,
      avatar: images.results[i].picture.thumbnail
   }))
}