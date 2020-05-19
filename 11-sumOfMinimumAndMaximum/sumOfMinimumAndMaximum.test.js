// This file is only for viewing;

const sumOfMinimumAndMaximum = require("./sumOfMinimumAndMaximum");
const { expect } = require("chai");

describe("the sumOfMinimumAndMaximum(nums) function", function() {

  it("should return a finite value", function() {
    let submittedSolution = sumOfMinimumAndMaximum([1,2,3]);
    expect(submittedSolution, "the output is not a finite number").to.be.finite;
  })

  it("should return a value that indicates the sum of the lowest and highest value in the input array", function() {
    let submittedSolution = sumOfMinimumAndMaximum([7,8,9,10,11]);
    expect(submittedSolution, "the output does not reflect an accurate sum of the minimum and the maximum").to.equal(18);
  })

  it("should pass auxillary test cases", function() {
    let auxillaryNums = [[0,1], [0,1,2], [0,1,2,3], [0,1,2,3,4], [5,5,5,5,5,5,5]];
    let submittedSolution = sumOfMinimumAndMaximum;
    expect(submittedSolution(auxillaryNums[0])).to.equal(1);
    expect(submittedSolution(auxillaryNums[1])).to.equal(2);
    expect(submittedSolution(auxillaryNums[2])).to.equal(3);
    expect(submittedSolution(auxillaryNums[3])).to.equal(4);
    expect(submittedSolution(auxillaryNums[4])).to.equal(10);
  })

  it("should not conduct mutative operations on the input array", function() {
    let sampleNums = [10,20,30,40,50,60,70,80,90,100,95];
    sumOfMinimumAndMaximum(sampleNums);
    expect(sampleNums).to.eql([10,20,30,40,50,60,70,80,90,100,95]);
  })

})