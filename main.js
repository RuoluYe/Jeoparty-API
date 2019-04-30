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
  const API_URL = "http://jservice.io/api"; // it's good to factor out your url base as a constant
  const jeoparty;
  /**
   *  Add a function that will be called when the window is loaded.
   */
  window.addEventListener("load", guessing);

{"id":101163,
"answer":"the Rockefeller Center",
"question":"Named for a millionaire, this art deco area covers 11 acres in the middle of Manhattan",
"value":1000,
"airdate":"2009-09-25T12:00:00.000Z",
"created_at":"2014-02-14T02:07:44.579Z",
"updated_at":"2014-02-14T02:07:44.579Z",
"category_id":13569,
"game_id":null,
"invalid_count":null,
"category":
  {"id":13569,
  "title":"\"center\" field",
  "created_at":"2014-02-14T02:07:43.351Z",
  "updated_at":"2014-02-14T02:07:43.351Z",
  "clues_count":5}}

  /**
   * Step 1: Write a function to "fetch" data from a URL (possibly with query/value pairs)
   */
  function guessing() {
    let url = URL_BASE + "?query0=/clues";
    fetch(url)
      .then(checkStatus)
      .then(JSON.parse)
      .then(getQuestion);
      // .then(showResult)
      .catch(handleError);
  }

  /**
   * randomly get a jeoparty question for the guessing.
   * @param {object} jeoparty - JSON object of the jeoparty question
   */
  get a random jeoparty question for guessing
  function getQuestion(response){
    let quest = document.createElement("p");
    quest.innerText = response.question;
    id("question").appendChild("quest");
    jeoparty = response;
    id("guess-btn").addEventListener("click", showResult);
  }

  /**
   * evaluation if the answer guessed is correct and tell the user the result
   * @param {object} jeoparty - JSON object of the jeoparty question
   */
  function showResult(jeoparty) {
    let result = document.createElement("p");
    if (id("input") ===  response.answer) {
      result.innerText = "You get it right!";
    } else {
      result.innerText = "It is wrong :(";
    }
    id("answer").appendChild(result);
  }

  /**
   *  Handle any possible error during fetch API.
   *  @param {error} error - the erro type
   */
  function handleError(error){

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
   * Returns the first element that matches the given CSS selector.
   * @param {string} query - CSS query selector.
   * @returns {object} The first DOM object matching the query.
   */
  function qs(query) {
    return document.querySelector(query);
  }

  /**
   * Returns the array of elements that match the given CSS selector.
   * @param {string} query - CSS query selector
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qsa(query) {
    return document.querySelectorAll(query);
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
