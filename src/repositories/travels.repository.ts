import { QueryResult } from "pg";
import db from "../database/database.connection";
import { newTravel, travel, updateTravel } from "../protocols/travel.protocol";
import { travels } from "@prisma/client";

async function postNewTravel(travel: newTravel) {

    await db.$connect();

    try {
        await db.travels.create({
            data: {
                origin: travel.origin,
                destiny: travel.destiny,
                shipping_cost: travel.shipping_cost
            }
        })
    } finally {
        await db.$disconnect();;
    }
}

async function retrieveAllTravels() {

    await db.$connect();
    let travels: travels[];

    try {
        travels = await db.travels.findMany();
    } finally {
        await db.$disconnect();;
        return travels;
    }
}

async function ChangeTravel(travelId: number, updatedTravel: updateTravel) {

    await db.$connect();

    try {
        await db.travels.update({
            where: {
                id: travelId
            },
            data: updatedTravel
        });
    } finally {
        await db.$disconnect();;
    }
}

async function findTravelById(travelId: number) {

    await db.$connect();
    let travels: travels[];

    try {
        travels = await db.travels.findMany({
            where: {
                id: travelId
            }
        });
    } finally {
        await db.$disconnect();;
        return travels;
    }
}

async function removeTravels(travelId: number) {

    await db.$connect();

    try {
        await db.travels.deleteMany({
            where: {
                id: travelId
            }
        });
    } finally {
        await db.$disconnect();;
    }
}

const travelsRepositories = {
    retrieveAllTravels,
    postNewTravel,
    ChangeTravel,
    removeTravels,
    findTravelById
};

export default travelsRepositories;