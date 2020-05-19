// This file is only for viewing;

const sumOfNumsWithinARange = require("./sumOfNumsWithinARange");
const { expect } = require("chai");

describe("the sumOfNumsWithinARange(nums, start, end) function", function() {

  it("should return a finite value", function() {
    let submittedSolution = sumOfNumsWithinARange([1,2,3], 2, 10);
    expect(submittedSolution, "the output is not a finite number").to.be.finite;
  })

  it("should return a value that indicates the total amount of numbers that fall between start and end, inclusive", function() {
    let submittedSolution = sumOfNumsWithinARange([7,8,9,10,11], 1, 6);
    expect(submittedSolution, "the output does not reflect an accurate amount of numbers that fall between start and end, inclusive").to.equal(0);
  })

  it("should pass auxillary test cases", function() {
    let auxillaryNums = [[0], [0,1], [0,1,2], [0,1,2,3], [5,5,5,5,5,5]];
    let submittedSolution = sumOfNumsWithinARange;
    expect(submittedSolution(auxillaryNums[0], 0, 3)).to.equal(1);
    expect(submittedSolution(auxillaryNums[1], 0, 3)).to.equal(2);
    expect(submittedSolution(auxillaryNums[2], 0, 3)).to.equal(3);
    expect(submittedSolution(auxillaryNums[3], 0, 3)).to.equal(4);
    expect(submittedSolution(auxillaryNums[4], 0, 3)).to.equal(0);
  })

  it("should not conduct mutative operations on the input array", function() {
    let sampleNums = [10,20,30,40,50,60,70,80,90,100,95];
    sumOfNumsWithinARange(sampleNums, 20, 60);
    expect(sampleNums).to.eql([10,20,30,40,50,60,70,80,90,100,95]);
  })

})