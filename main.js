// Name: Ruolu Ye
// Date: 4/29/1019
// Section: CSE 154 AL
//
// This is the main.js to allow the jeparty game webstie to have interaction
// with players using JService API.
(function() {
  "use strict";

  // MODULE GLOBAL VARIABLES, CONSTANTS, AND HELPER FUNCTIONS CAN BE PLACED
  // HERE
  const URL_BASE = "http://jservice.io/api"; // it's good to factor out your url base as a constant
  let JEOPARTY; // the JSON object of the trivia question
  const TOTAL_QUESTION_COUNT = 156800;

  /**
   *  Add a function that will be called when the window is loaded.
   */
  window.addEventListener("load", play);

  /**
   * Step 1: Write a function to "fetch" data from a URL (possibly with query/value pairs)
   */
  function play() {

    let questionNumbers = Math.floor(Math.random() * TOTAL_QUESTION_COUNT);
    let url = URL_BASE + "/random?value=" + questionNumbers;
    console.log(url);
    fetch(url)
      .then(checkStatus)
      .then(JSON.parse)
      .then(getQuestion)
      // .then(showResult)
      .catch(console.log);
  }

  /**
   * randomly get a jeoparty question for the guessing.
   */
  function getQuestion(response){
    let quest = document.createElement("p");
    quest.innerText = response[0].question;
    id("ask").appendChild(quest);
    let btn = id("guess-btn");
    // JEOPARTY = response;
    // id("guess-btn").addEventListener("click", showResult);
    // console.log(JEOPARTY);
    // console.log(JEOPARTY[0].answer);
  }

  /**
   * evaluation if the answer guessed is correct and tell the user the result
   */
  // function showResult() {
  //   let answer = JEOPARTY[0].answer.toLowerCase();
  //   let guessed = id("guess").value.toLowerCase();
  //   if (answer ===  guessed) {
  //     id("result").innerText = "You get it right!";
  //   } else {
  //     id("result").innerText = "It is wrong :( Try again";
  //   }
  // }

  /**
   *  Handle any possible error during fetch API.
   *  @param {error} error - the error type
   */
  // function handleError(error){
  //
  // }

  /* ------------------------------ Helper Functions  ------------------------------ */
  // Note: You may use these in your code, but do remember that your code should not have
  // any functions defined that are unused.

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} idName - element ID
   * @returns {object} DOM object associated with id.
   */
  function id(idName) {
    return document.getElementById(idName);
  }

  /**
   * Helper function to return the response's result text if successful, otherwise
   * returns the rejected Promise result with an error status and corresponding text
   * @param {object} response - response to check for success/error
   * @returns {object} - valid result text if response was successful, otherwise rejected
   *                     Promise result
   */
  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response.text();
    } else {
      return Promise.reject(new Error(response.status + ": " + response.statusText));
    }
  }

})();
