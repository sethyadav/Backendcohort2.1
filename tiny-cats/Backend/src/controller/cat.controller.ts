import type { Request, Response } from "express";
import { createCatService, getAllCatsService, getSingleCatService, } from "../services/cat.service.ts";

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
        message: "Cat created successfully",
        data: result
    });
};

export const getSingleCatController = async (req: Request, res: Response) => {
    let result = await getSingleCatService(req.body);
    return res.status(200).json({
        success: true,
        message: "Cat created successfully",
        data: result
    });
};