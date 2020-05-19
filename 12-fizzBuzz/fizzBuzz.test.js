// This file is only for viewing;

const fizzBuzz = require("./fizzBuzz");
const { expect } = require("chai");

describe("the fizzBuzz(start, end) function", function() {

  it("should return an array", function() {
    let submittedSolution = fizzBuzz(1,2);
    expect(submittedSolution, "the output is not an array").to.be.an("array");
  })

  it("should return an array whose length is equivalent to the difference between the `end` and `start` values plus one", function() {
    let submittedSolution = fizzBuzz(1,3);
    expect(submittedSolution, "the output does not reflect an accurately sized array").to.have.lengthOf(3);
    submittedSolution = fizzBuzz(4,5);
    expect(submittedSolution, "the output does not reflect an accurately sized array").to.have.lengthOf(2);
  })

  it("should return an array whose contents adhere to the conditions of fizzBuzz", function() {
    let submittedSolution = fizzBuzz(1,15);
    expect(submittedSolution).to.eql([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]);
    submittedSolution = fizzBuzz(1,20);
    expect(submittedSolution).to.eql([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz"]);
  })

  it("should pass auxillary test cases", function() {
    let submittedSolution = fizzBuzz;
    expect(submittedSolution(1,2)).to.eql([1,2]);
    expect(submittedSolution(5,6)).to.eql(["Buzz", "Fizz"]);
    expect(submittedSolution(5,7)).to.eql(["Buzz", "Fizz", 7]);
    expect(submittedSolution(20,26)).to.eql(["Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26]);
  })

})