# Creative Project 3 Project Specification
## Overview
For your third Creative Project, you will explore different API's available as public web services
and use the Fetch API to asynchronously request and process response data on your own website. Learning how to find and use public APIs is
an extremely important skill in modern web development (and working with publically-available datasets is one of the most fun parts of being a web developer!).

There are a ton of APIs on the web today - you can find ones for dog breeds, government datasets, dictionary web services, weather data, etc. With that, even when the data they respond with may be very interesting, some APIs can be frustrating to work with due to poor documentation (what? documentation is actually useful?) or outdated response formats (XML, HTML, etc.). The APIs supported for CP3 all return data in JSON or plaintext format since we cover that more in this class and these formats tend to be easier to work with.

Specifically, you will choose from the following 6 public APIs to request and process interesting data with and integrate into your own webpage:

* Country Data API 
* Dog API
* jService Trivia Questions
* Webster-Merriam Dictionary/Thesaurus APIs (requires API key)
* News Headlines API (requires API key)
* Movie DB API (requires API key)

**The links for each of these API's can be found [here](https://courses.cs.washington.edu/courses/cse154/19sp/creative/cp3-apis.html)** along with any notes/resources about these APIs that we may add if needed.

Some students do have specific APIs they may be wanting to use in their websites - you are allowed to use another public API, however you must get permission from the instructors via email to use the API(s) to ensure they meet the requirements and note that **the TA staff will only be expected to support projects that use the above APIs**. The instructors and Head TA will be available to answer quick questions about other APIs. **The APOD API will not satisfy the requirements of this assignment**.

### Note about API Keys
* Some of these APIs require API keys - an API key is helpful to ensure the service isn't overloaded with requests from clients, and most public APIs you work with as a web developer will require some sort of key or authentication. Each API has sufficient documentation to get access to your key once you register for an developer account (required for a key). That said, feel free to visit WPL/OH if you have any questions about getting/using API keys! Remember that you should **not** be opting into any paid subscription plan.

## Ideas for CP3
As a Creative Project, we encourage you to explore the new material covered in class, as well as related (but optional) content we may link to along the way, as long as you follow the CSE 154 Code Quality Guidelines and adhere to Academic Integrity policies. In past quarters, some students have built upon their Creative Project each week. You may choose to do a new website for each CP, or build on the existing project from previous CP's.

As long as you meet the requirements outlined below, you have freedom in what kind of website you create. Here are some ideas for Spring 2019 (you can also check out Autumn 2018's CP3 Showcase to see other creative ways students used APIs in their websites!):
* Use the Country Data API to analyze or present facts about different countries, currencies, languages, etc.
* Use the Dictionary or Thesaurus API to help implement a text analysis tool or a type of word game
* Implement a personalized news tool based on user input and the News Headlines API
* Analyze data and present statistics found in an API dataset by exploring the different keys in the response data
* Take two APIs and use them together in the same page in a creative way!
* Ask us if you'd like help coming up with more ideas for your project!

## Development Strategy for Using Fetch with an API
1. Fill out [this form](https://forms.gle/zEvfEmUUuYtHfWsP9) before Monday's lecture. 
2. Design your page (either with a front-end or wireframe) to plan for your implementation, imagining if you had the data you wanted
from the API. **Do this before you write any Fetch call(s)**.
3. Find out how to build a URL to fetch from your chosen API (most APIs will have examples in their documentation). 
  * What is the base URL? For example, the base URL of the [NASA Astronomy Photo of the Day (APOD)](https://api.nasa.gov/api.html#apod) API used in Friday's lecture is https://api.nasa.gov/planetary/apod?. 
  * What are any required parameters (often called query parameters) you need to add to the URL? For example, the APOD API requires a query parameter of "api_key" which accepts a value of an API key you can register for on the API's home page. Without registering for an API key, the APOD API conveniently lets you provide a value "DEMO_KEY" for a limited number of daily requests. Using this required parameter, you can make a request to https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY to get JSON data for the photo of the current day (try it!).  
  * Are there any optional parameters you can choose from to request specific information from the API? In the APOD API, you can also use an optional parameter called "date" documented on their API page to specify the date. For example, you can make a request to https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2000-01-30 to get the Astrononomy photo of the day for January 30th, 2000. Some other APIs let you choose the date when filtering out response data, but they may use a different parameter name than date. All of the 6 APIs will specify what possible paths and parameters are available for you to use.
4. Get an example JSON representation from the API by visiting the URL with query parameters. Copy/paste the JSON into your browser console and expand the result to understand the hierarchy of an example JSON response for the API. Most APIs will have examples you can copy/paste in a new page and output the JSON, similar to what Lauren did in Friday's lecture with the Groupizer JSON. Make sure you use your API key as a query parameter if using an API that requires one. For testing, you may find it helpful to store the JSON as a temporary global variable so you can focus on working with the JSON data parsing and DOM manipulation before working with any Fetch calls. **Do not have any JSON stored in as global or module-global variables in your final submission**.
5. Go back to the API documentation for any clarifications on what any field names in the JSON mean. Some will be intuitive, some may need a bit of clarification in the documentation. 
6. **Note: You can get up to this step without using any Fetch calls in your assignment (i.e. everything you have learned up through Friday).** Once you know how to access the field names you want for a response ([this exercise](https://courses.cs.washington.edu/courses/cse154/19sp/lectures/lec12-json/index.html#json-example) will be helpful to review), finish your JS response function to parse the JSON and update your page with the data you want to use to meet the external requirements.
  * On Monday, we will go over the mechanism for actually how to use Fetch to fetch data from an API URL using JavaScript, but if you would to like to try fetching data before then, you can take a look at the APOD example code from Friday's lecture and review the [Fetch reading](https://davidwalsh.name/fetch) for Monday.
7. To test possible errors (you will need to display a descriptive error message on the page if an API returns an error caught in the `catch` statement of the Fetch template presented in class), you can temporarily replace your response function with the error-handling function in the fetch.
8. Can you think of any other ways to use the API (e.g. other query parameters or endpoints) or incorporate another API? You can go for the extra late day
challenge!

## External Requirements
Your website must somehow dynamically load information from the web API you've chosen and
present information from that response on the page. This requires that you must:
  * Respond to some event (whether it's the window `load` event or any UI event) to determine when to fetch the data, and
    * Dynamically integrate the data returned from the API into the page by manipulating the DOM elements in some non-trivial way using `document.createElement`, `element.appendChild`, `element.removeChild`, or `element.replaceChild`, and
    * Handle any errors caused in the fetch request/response process by displaying a helpful message to the user on the page (i.e. without using `alert` or `console.log`). To do so, you should define a function to implement the message displaying and pass that function as an argument in the `fetch` call chain's `catch` statement (see apod.js example from Friday, but your error-handling function should be your own).

## Internal Requirements
* Your project must include the following three files at a minimum:
  * `index.html` - main page of your website
  * `styles.css` - file to style your `.html` file
  * `main.js` - containing your JavaScript code - you may have other JS files, but this is the one that will be graded for CP3. 
* Your `main.js` file should be linked to your `index.html` or other `.html` files using  `<script src="...">` in the HTML `<head>`.
* Your `styles.css` file should be linked to your `index.html` or other `.html` files using `<link href="...">` in the HTML `<head>`.
* Links to your `.html`,  `.css` and `.js` files should be **relative links**, not absolute.
* All file names and links in your project must be lowercased (e.g. `img/puppy.jpg` but not `img/puppy.JPG` or `img/Puppy.jpg`).
* You should not have any JS code in your HTML.
* You should not have any HTML tags as strings in your JavaScript code (e.g. `el.innerHTML = "<p>Foo</p>";`).
* Minimize styling in JS - prefer adding/removing classes to DOM elements instead, and style the classes in your CSS.
* Any `.js` code you use must use the module-global pattern (recall the module-global template) and `"use strict";`.
* Your page should have a `window.addEventListener("load", functionName)` as shown in lecture/section (use an appropriate `functionName`).
* Any requests in your JS code must use the Fetch API template with the provided `checkStatus` function (which you should define in your program, but leave unchanged - you do not need to cite this required function). You can find a documented template for reference [here](https://courses.cs.washington.edu/courses/cse154/19sp/resources/assets/templates/js/ajax-template-documented.js) (replace all comments with your own, and add your own function names as appropriate). apod.js provides another example of how to use the fetch API, and you will see more examples on Tuesday's section.
* Do not make unnecessary requests to the API. That is, there should be no code in your JS that requests from an API and **never** does anything with the response. Furthermore, be mindful about how frequently you are making requests to a web service. Some APIs will have request limits (e.g. 1000/day), so you'll want to make sure you aren't making redundant requests in loops/timers (it is normal for many pages to make one or few more requests to get the data needed).
* Your page should include
[school appropriate content](https://courses.cs.washington.edu/courses/cse154/19sp/syllabus/syllabus.html#academic-conduct)
and [copyrights and citations](https://courses.cs.washington.edu/courses/cse154/19sp/syllabus/syllabus.html#copyright). If we find plagiarism in CPs or inappropriate content, **you will be ineligible for any points on the CP**. Ask the instructors if you're unsure if you're work is appropriate.
* **You must visibly cite the API you are using in your page** (e.g. in a page footer).

## Style and Documentation
* Your HTML, CSS, and JavaScript should demonstrate good code quality as demonstrated in class and
  detailed in the [CSE 154 Code Quality Guidelines](https://courses.cs.washington.edu/courses/cse154/codequalityguide/_site/). Part of your grade will come from using consistent indentation, proper naming conventions, curly brace locations, etc.
* Place a comment header in each file with your name, section, and a brief description of the file (examples have been given on previous assignments)
* Decompose your JS by writing smaller, more generic functions that complete one task rather than a few larger "do-everything" functions - no function should be more than 30 lines of code.
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
You can earn one extra late day if make multiple, non-trivial `fetch` calls that do different things to the page. 
This could be two `fetch` calls to the same API or to two different APIs.

## Academic Integrity
Creative Projects are unique in that students may look for outside resources for inspiration or assistance 
in accomplishing their goals. On occasion students may wish to use portions of sample code that has been 
obtained on our course website or others. In order to avoid academic misconduct for a Creative Project 
in CSE 154 you must:
1. Ensure that substantive original work is submitted that can be evaluated by the course staff.
2. Cite the ideas or materials of others that are used. The citation format is not that important - as 
long as the source material can be located and the citation verified (a url in a comment is generally 
fine), it's OK.
3. Clearly indicate (e.g. with comments) which portions of your code are completely original and 
which are used or modified from external sources, if any code is used that builds off of/is 
inspired by external sources (e.g. adaption of an example CSE 154 exercise, online tutorial 
you find on Bootstrap or a JS library, etc.). We will only grade your original work. Note
 that solely changing identifier names or rearranging other source material is not considered 
 your original work - see the examples of appropriate use below for details. 

A good analogy to this is if you were writing a history paper: You can use quotes in your paper as 
long as you give attribution to the sources of the quote, but you can not write a history paper 
out of the quotes of others (particularly with no citations). 

Some examples of appropriate use: 

* A student closely follows a tutorial to understand a new concept in web development (e.g. CSS3 animations). 
The student cites the tutorial they used in the file header then substantially modifies the tutorial code to 
include what is specified for the Creative Project assignment, documenting which portions of the code are 
their own so TAs know which portions to grade (and to determine whether the material cited as being learned 
from the tutorial is sufficiently adapted to be considered the student’s own work). 
* A student is having difficulty styling their website. They look for a solution and find one on a site 
such as Stack Overflow. The student uses the code they find in their solution, documents that small 
piece of code was not their own with a comment that includes where it was found. The TAs will not 
use that portion of the code in grading. 

Students with questions about any specific situation should ask the instructors for clarification. 

More information on the CSE 154 course policy is here, the Paul G Allen School also has an entire page on 
[Academic Misconduct](https://www.cs.washington.edu/academics/misconduct) within the context of 
Computer Science, and the University of Washington has an entire page on how 
[Academic Misconduct](https://www.washington.edu/cssc/for-students/academic-misconduct/)is 
handled on their [Community Standards and Student Conduct](https://www.washington.edu/cssc/). 
Please acquaint yourself with both of those pages, and in particular how academic misconduct will 
be reported to the University.

