// This file is only for viewing;

const subtractFive = require("./subtractFive");
const { expect } = require("chai");

describe("the subtractFive(num) function", function() {

  it("should return a finite value", function() {
    let submittedSolution = subtractFive(8);
    expect(submittedSolution, "the output is not a finite number").to.be.finite;
  })

  it("should return a value that is five less than the input value", function() {
    let submittedSolution = subtractFive(17);
    expect(submittedSolution, "the output is not five less than the input value").to.equal(12);
  })

  it("should pass auxillary test cases", function() {
    let auxillaryTestCases = [20,40,60,80,99,105,221];
    let submittedSolution = subtractFive;
    expect(submittedSolution(auxillaryTestCases[0])).to.equal(15);
    expect(submittedSolution(auxillaryTestCases[1])).to.equal(35);
    expect(submittedSolution(auxillaryTestCases[2])).to.equal(55);
    expect(submittedSolution(auxillaryTestCases[3])).to.equal(75);
    expect(submittedSolution(auxillaryTestCases[4])).to.equal(94);
    expect(submittedSolution(auxillaryTestCases[5])).to.equal(100);
    expect(submittedSolution(auxillaryTestCases[6])).to.equal(216);
  })

})