// This file is only for viewing;

const frequencyCounter = require("./frequencyCounter");
const { expect } = require("chai");

describe("the frequencyCounter(word) function", function() {

  it("should return an object", function() {
    let submittedSolution = frequencyCounter("building");
    expect(submittedSolution, "the output is not an object").to.be.an("object");
  })

  it("should output an `object` whose amount of keys is equivalent to the amount of unique letters in the word", function() {
    let submittedSolution = frequencyCounter("school");
    let amountOfKeys = Object.keys(submittedSolution).length;
    expect(amountOfKeys).to.equal(5);
  })

  it("should output an `object` that contains key:value pairs which indicate accurate frequencies of each letter in the input `word`", function() {
    let submittedSolution = frequencyCounter("college");
    expect(submittedSolution).to.eql({"c": 1, "o": 1, "l": 2, "e": 2, "g": 1 });
  })

  it("should pass auxillary test cases", function() {
    let submittedSolution = frequencyCounter;
    expect(submittedSolution("a")).to.eql({"a": 1});
    expect(submittedSolution("aa")).to.eql({"a": 2});
    expect(submittedSolution("hi")).to.eql({"h": 1, "i": 1});
    expect(submittedSolution("hello")).to.eql({"h": 1, "e": 1, "l": 2, "o": 1});
    expect(submittedSolution("train")).to.eql({"t": 1, "r": 1, "a": 1, "i": 1, "n": 1});
  })

})