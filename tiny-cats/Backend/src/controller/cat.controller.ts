import type { Request, Response } from "express";
import { createCatService, getAllCatsService, getSingleCatService, recommendService, searchCatService  } from "../services/cat.service.ts";

// interface CatParams {
//   id: string;
// }


export const createCatController = async (req: Request, res: Response) => {
    let result = await createCatService(req.body);
    return res.status(201).json({
        success: true,
        message: "Cat created successfully",
        data: result
    });
};

export const getAllCatsController = async (req: Request, res: Response) => {
    let result = await getAllCatsService();
    
    return res.status(200).json({
        success: true,
        message: "Cat fetched",
        data: result
    });
};

export const getSingleCatController = async (req: Request, res: Response) => {

    let id = req.params.id as string;

    let result = await getSingleCatService(id);

    return res.status(200).json({
        success: true,
        message: "Cat fetched",
        data: result
    });
};


export const searchCatController = async (req: Request, res: Response) => {

    let q = req.query.q as string;

    let result = await searchCatService(q);

    return res.status(200).json({
        success: true,
        message: "Cat fetched",
        data: result
    });
};

export const recommendedCatsController = async (req: Request, res: Response) => {

    const { kidsFriendly, apartmentFriendly } = req.body;
    const result = await recommendService(
         kidsFriendly,
         apartmentFriendly,
    );
    return res.status(200).json({
        success: true,
        message: "cat fetched",
        data: result
    });
};