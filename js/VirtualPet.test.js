import VirtualPet from "./VirtualPet.js";

describe("Virtual Pet tests", () => {
    test("Does Pet have a Name", () => {
        //Assignment / Action
        const virtualPet = new VirtualPet("Steve", "White", "Woof");

        //Assert
        expect(virtualPet.name).toMatch("Steve");
    });

    test("Does feed work", () => {
        //Assignment
        const virtualPet = new VirtualPet("Steve", "White", "Woof");

        //Action
        virtualPet.feed();

        //Assert
        expect(virtualPet._hunger).toEqual(-5);

    })
})