import catModel from "../models/cat.model.ts";

// create service
export const createCatService = async (payload: object) => {
    return await catModel.create(payload)
};

//getAll service

export const getAllCatsService = async () => {
    return await catModel.find({});
}

//getSingleCat service 

export const getSingleCatService = async (id: string) => {
    return await catModel.findById(id);
};
