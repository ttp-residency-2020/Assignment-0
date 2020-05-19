// This file is only for viewing;

const countOfAllBooleans = require("./countOfAllBooleans");
const { expect } = require("chai");

describe("the countOfAllBooleans(arr) function", function() {

  it("should return a finite value", function() {
    let submittedSolution = countOfAllBooleans([true, false, true]);
    expect(submittedSolution, "the output is not a finite number").to.be.finite;
  })

  it("should return a value that indicates the total amount of boolean values in the input array", function() {
    let submittedSolution = countOfAllBooleans([1,2,3,4,true,true]);
    expect(submittedSolution, "the output does not reflect an accurate amount of boolean values").to.equal(2);
  })

  it("should pass auxillary test cases", function() {
    let auxillaryTestCases = [[true, true], [1,2,false,false], [true, true, false, false], [8, "hello", undefined, null, false, false, false, false, false], ["yes", "no", "true", "false"]];
    let submittedSolution = countOfAllBooleans;
    expect(submittedSolution(auxillaryTestCases[0])).to.equal(2);
    expect(submittedSolution(auxillaryTestCases[1])).to.equal(2);
    expect(submittedSolution(auxillaryTestCases[2])).to.equal(4);
    expect(submittedSolution(auxillaryTestCases[3])).to.equal(5);
    expect(submittedSolution(auxillaryTestCases[4])).to.equal(0);
  })

  it("should not conduct mutative operations on the input array", function() {
    let sampleInputArr = [10,20,30,40];
    countOfAllBooleans(sampleInputArr);
    expect(sampleInputArr).to.eql([10,20,30,40]);
  })

})