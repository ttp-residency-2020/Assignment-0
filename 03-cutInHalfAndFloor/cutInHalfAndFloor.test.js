// This file is only for viewing;

const cutInHalfAndFloor = require("./cutInHalfAndFloor");
const { expect } = require("chai");

describe("the cutInHalfAndFloor(num) function", function() {

  it("should return a finite value", function() {
    let submittedSolution = cutInHalfAndFloor(34);
    expect(submittedSolution, "the output is not a finite number").to.be.finite;
  })

  it("should return a value that is half of the input value, rounded down", function() {
    let submittedSolution = cutInHalfAndFloor(89);
    expect(submittedSolution, "the output is not half of the input value, rounded down").to.equal(44);
  })

  it("should pass auxillary test cases", function() {
    let auxillaryTestCases = [20,40,60,80,99,105,221];
    let submittedSolution = cutInHalfAndFloor;
    expect(submittedSolution(auxillaryTestCases[0])).to.equal(10);
    expect(submittedSolution(auxillaryTestCases[1])).to.equal(20);
    expect(submittedSolution(auxillaryTestCases[2])).to.equal(30);
    expect(submittedSolution(auxillaryTestCases[3])).to.equal(40);
    expect(submittedSolution(auxillaryTestCases[4])).to.equal(49);
    expect(submittedSolution(auxillaryTestCases[5])).to.equal(52);
    expect(submittedSolution(auxillaryTestCases[6])).to.equal(110);
  })

})