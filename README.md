# Creative Project 3 Project Specification
## Overview
For your third creative project, you will explore different API's available on the web
and use AJAX with them to fetch and process data on your website. Specifically, you will choose from the following 7 public APIs to request and process interesting data with and integrate into your own webpage:

* [Dog API](https://dog.ceo/dog-api/)
* [jService Trivia Questions](http://jservice.io/)
* [Webster-Merriam Dictionary/Thesaurus APIs](https://www.dictionaryapi.com/products/) (requires API key)
* [Country Data API](https://restcountries.eu)
* [News API](https://newsapi.org/docs/get-started) (requires API key)
* [Movie DB API](https://www.themoviedb.org/documentation/api) (requires API key)
* [Subreddit JSON API](See document)

Some students do have specific APIs they may be wanting to
use in their websites - you are allowed to use another public API, however the staff will only be expected to support projects that use the above APIs. The instructors
and Head TA will be available to answer quick questions about other APIs.

As a creative project, we encourage you to explore the new material covered in class, as well as related (but optional) content we may link to along the way, as
long as you follow the CSE 154 Code Quality Guidelines. This is your chance to:

1. Continue to build a a websites that you can link to on your resume or code
   portfolio (CPs can be public, most HWs cannot be).
2. Ask instructors and/or TAs about features you want to learn how to implement (we can
   provide more support for CPs than HWs) and ask for feedback/ideas on Piazza.
3. Apply what you're learning in CSE 154 to projects you are personally interested in and
   may use outside of just a CSE 154 assignment.
4. Optionally showcase your CP work on the CSE 154 CP showcase.
5. Get feedback on code quality when learning new technologies in CSE 154 to implement for
   the following HW, which will be worth more points.

In past quarters, some students have built upon their creative project each week. You may
choose to do a new website for each CP, or build on a single project, as long as you meet
each CP's requirements.

## Ideas for CP3
As long as you meet the requirements outlined below, you have freedom in what kind of
website you create. Here are some ideas for Spring 2019 (Your instructors are more than
happy to help discuss more ideas in their office hours!):
* There are a ton of API's on the web today - you can find ones for dog breeds,
Game of Thrones trivia, government data sets, Pokemon, etc.
* With that, even when the data they respond with may be very interesting, some
APIs can be frustrating to work with due to poor documentation (what?
documentation is actually useful?) or outdated response formats (XML, HTML, etc.).
The supported APIs all return data in JSON or plaintext format since we
cover that more in this class and these formats tend to be easier to work with.

### Note about API Keys
* Some of these APIs require API keys - an API key is helpful to ensure the service isn't overloaded with requests from clients, and most public APIs you work with as a web developer will require some sort of key or authentication. Each API has sufficient documentation to get access to your key once you register for an developer account (required for a key). That said, feel free to visit WPL/OH if you have any questions about getting/using API keys! Remember that you should **not** be opting into any paid subscription plan.

## External Requirements
* Your website must somehow dynamically load information from a web API and
present information from that source on the page. This requires that you must:
  * Respond to some event (whether it's the window `load` event or any UI event) to determine when to fetch the data, and
    * Dynamically integrate the data returned from the API into the page by manipulating the DOM elements of the page in some non-trivial way using `document.createElement`, `element.appendChild`, `element.removeChild`, or `element.replaceChild`, and
    * Handle any errors caused in the fetch request/response process by displaying a helpful message to the user on the page (i.e. without using `alert` or `console.log`);

## Internal Requirements
* Your project must include the following three files at a minimum:
  * `index.html` - main page of your website
  * `styles.css` - file to style your `.html` file
  * `main.js` - containing your JavaScript code
* Your `main.js` file should be linked to your `index.html` or other `.html` files using  `<script src="...">` in the HTML `<head>`.
* Your `styles.css` file should be linked to your `index.html` or other `.html` files using `<link href="...">` in the HTML `<head>`.
* Links to your `.html`,  `.css` and `.js` files should be **relative links**, not absolute.
* All file names and links in your project must be lowercased (e.g. `img/puppy.jpg` but not `img/puppy.JPG` or `img/Puppy.jpg`).
* You should not have any JS code in your HTML.
* You should not have any HTML tags as strings in your JavaScript code (e.g. `el.innerHTML = "<p>Foo</p>";`).
* Minimize styling in JS - prefer adding/removing classes to DOM elements instead, and style the classes in your CSS.
* Any `.js` code you use must use the module-global pattern (recall the module-global template) and `"use strict";`.
* Your page should have a `window.addEventListener("load", functionName)` as shown in lecture/section (use an appropriate `functionName`).
* Any requests in your JS code should use the Fetch API template that was shown in lecture/section.
* Do not make unnecessary requests to the API. That is, there should be no code in your JS that requests from an API and never does anything with the response. Furthermore, be mindful about how frequently you are making requests to a web service. Some APIs will have request limits (e.g. 1000/day), so you'll want to make sure you aren't making redundant requests in loops/timers.
* Your page should include
[school appropriate content](https://courses.cs.washington.edu/courses/cse154/19sp/syllabus/syllabus.html#academic-conduct)
and [copyrights and citations](https://courses.cs.washington.edu/courses/cse154/19sp/syllabus/syllabus.html#copyright). If we find plagiarism in CPs or inappropriate content, **you will be ineligible for any points on the CP**. Ask the instructors if you're unsure if you're work is appropriate.
* **You must visibly cite the API you are using in your page** (e.g. in a page footer).

## Style and Documentation
* Your HTML, CSS, and JavaScript should demonstrate good code quality as demonstrated in class and
  detailed in the [CSE 154 Code Quality Guidelines](https://courses.cs.washington.edu/courses/cse154/codequalityguide/_site/). Part of your grade will come from using consistent indentation, proper naming conventions, curly brace locations, etc.
* Place a comment header in each file with your name, section, and a brief description of the file (examples have been given on previous assignments)
* Decompose your JS by writing smaller, more generic functions that complete one task rather than a few larger "do-everything" functions - no function should be more than 40 lines of code.
* Localize your variables as much as possible. Do not use any global variables, and minimize the use of module-global variables. Do not store DOM element objects, such as those returned by the `document.getElementById` function, as module-global variables.
* Limit your use of anonymous functions - meaningful behavior should be factored out with a named function
* Use `const` with `UPPER_CASED` naming conventions (instead of `let`) for program constants (e.g. a file path to your images if you are working with many images in your JS or an API base url as demonstrated in class).
* Use [JSDoc](http://usejsdoc.org/) to document your JS functions with `@param`, `@returns` as discussed in the Code Quality Guide.
* HTML and CSS files must be well-formed and pass W3C validation.
* Your JS code must pass [JSLint](https://oxford.cs.washington.edu/cse154/jslint/) with no errors.
* To keep line lengths manageable, do not place more than one block element on the same line or begin a block element past the 100th character on a line.

## Grading
This CP will be out of 8 points and will likely be distributed as:
* External Correctness (3 pts) - The external requirements listed in this document are met.
* Internal Correctness (3 pts) - The internal requirements listed in this document are met.
* Style and Documentation (2 pts) - The style and documentation requirements in this document are met.  

## Late Day Challenge
You can earn one extra late day if make multiple, non-trivial `fetch` calls that do different things to the page. This could be two `fetch` calls to the same API or to two different APIs.
