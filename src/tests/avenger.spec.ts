import { bringMeThanos } from '../avengers';
import { expect } from 'chai';
import 'mocha';

describe("Infinity war", () => {
    it("should not kill thanos", () => {
        const conclusion = bringMeThanos();
        expect(conclusion).to.equal("you should have gone for the head.")
    });
});