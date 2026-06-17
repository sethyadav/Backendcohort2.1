import type { Request, Response } from "express";
import { aiRecommendService } from "../services/ai.Recommend.service.ts";


export const aiRecommendController = async (req: Request, res: Response) => {
    const { kidsFriendly, apartmentFriendly } = req.body;

    const result = await aiRecommendService(kidsFriendly, apartmentFriendly );

    return res.status(200).json({
        sucsess: true,
        count: result!.length || 0,
        data: result,
    });

};