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
   *  When the webpage is loading, initialize jeoparty game
   */
  window.addEventListener("load", play);

  /**
   * fetch the response.json from the server //jservice.io/api
   * and handles error if there is one.
   */
  function play() {
    let questionNumbers = Math.floor(Math.random() * TOTAL_QUESTION_COUNT);
    let url = URL_BASE + "/random?value=" + questionNumbers;
    fetch(url)
      .then(checkStatus)
      .then(JSON.parse)
      .then(getQuestion)
      .catch(handleError);
  }

  /**
   * randomly get a jeoparty question for the guessing.
   * @param {response} response - the text version of the jeoparty question that comes back from
   * the server.
   */
  function getQuestion(response){
    let quest = document.createElement("p");
    quest.innerText = response[0].question;
    id("ask").appendChild(quest);
    let btn = id("guess-btn");
    JEOPARTY = response;
    id("guess-btn").addEventListener("click", showResult);
    console.log(JEOPARTY[0].answer);
  }

  /**
   * evaluation if the answer guessed is correct and tell the user the result.
   */
  function showResult() {
    let answer = JEOPARTY[0].answer.toLowerCase();
    let guessed = id("guess").value.toLowerCase();
    if (answer ===  guessed) {
      id("result").innerText = "You get it right!";
    } else {
      id("result").innerText = "It is wrong :( Try again";
    }
  }

  /**
   * When an error occurs in the fetch call chain, displays a user-friendly
   * error message on the page.
   * @param {Error} error - the error details of the request.
   */
  function handleError(error){
    let msg = "The question is running late, try again";
    id("result").innerText = msg;
  }

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
