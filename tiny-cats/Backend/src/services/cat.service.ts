import CatModel from "../models/cat.model.ts";
import catModel from "../models/cat.model.ts";
//import catModel from "../models/cat.model.ts";

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

//search cat service

export const searchCatService = async (query: string) => {
    return await CatModel.find({
        $or: [
            {
                name: {
                    $regex: query,
                    $options: "i",
                },         
            },
            {
                breed: {
                    $regex: query,
                    $options: "i",
                },
            },
        ],
    });
};


//cat recommend service
export const recommendService = async (  
    kidsFriendly: boolean,
    apartmentFriendly: boolean,
) => {
    return await CatModel.find({
        kidsFriendly,
        apartmentFriendly,
    })
}
