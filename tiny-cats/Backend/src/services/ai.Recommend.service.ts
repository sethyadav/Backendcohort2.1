import { recommendService } from "./cat.service.ts";
import { generateAiResponse } from "./gemini.service.ts";


export const aiRecommendService = async (kidsFriendly: boolean, apartmentFriendly: boolean) => {
    const matchCatsFromDb = await recommendService(kidsFriendly, apartmentFriendly);

    // const prompt = `
    // You are a Professional CAT declare, who knows everything about cats.

    // you have a Data:
    // ${kidsFriendly} and ${apartmentFriendly}

    // please give your best comparison result to user

    // `;

    const prompt = `
    You are a professional Cat Expert and Pet Advisor.

    Your task is to compare cat breeds based on the user's preferences and recommend the most suitable cats.

    User Preferences:
    - Kids Friendly: ${kidsFriendly}
    - Apartment Friendly: ${apartmentFriendly}

    Instructions:
    1. Analyze the user's preferences carefully.
    2. Compare suitable cat breeds based on:
     - Temperament
     - Friendliness with children
     - Apartment suitability
     - Energy level
     - Maintenance requirements
     - Lifespan
    3. Recommend the top 3 most suitable cat breeds.
    4. For each recommendation provide:
     - Breed Name
     - Why it matches the user's preferences
     - Pros
     - Cons
     - Suitability Score (1-10)
    5. Clearly explain which breed is the best overall choice and why.
    6. Keep the response concise, beginner-friendly, and easy to understand.

   Return the response in clean markdown format.
  `;
    
  const aiResponse = await generateAiResponse(prompt);

  return aiResponse;
};