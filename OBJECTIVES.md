# Random Quote Generator

## OBJECTIVE

Build an app that is functionally similar to this [example](https://random-quote-machine.freecodecamp.rocks/).

Fulfill the below user stories and get all of the tests to pass. Use whichever libraries or APIs you need. Give it your own personal style.  

You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks.  
Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!

### USER STORIES

1. I can see a wrapper element with a corresponding id="quote-box".
2. Within #quote-box, I can see an element with a corresponding id="text".
3. Within #quote-box, I can see an element with a corresponding id="author".
4. Within #quote-box, I can see a clickable element with a corresponding id="new-quote".
5. Within #quote-box, I can see a clickable `a` element with a corresponding id="tweet-quote".
6. On first load, my quote machine displays a random quote in the element with id="text".
7. On first load, my quote machine displays the random quote's author in the element with id="author".
8. When the #new-quote button is clicked, my quote machine should fetch a new quote and display it in the #text element.
9. My quote machine should fetch the new quote's author when the #new-quote button is clicked and display it in the #author element.
10. I can tweet the current quote by clicking on the #tweet-quote a element. This `a` element should include the "twitter.com/intent/tweet" path in its href attribute to tweet the current quote.
11. The #quote-box wrapper element should be horizontally centered. Please run tests with browser's zoom level at 100% and page maximized.

You can build your project by using this [CodePen template](https://codepen.io/pen?template=MJjpwO) and clicking Save to create your own pen. Or you can use this CDN [link](https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js) to run the tests in any environment you like.  

Once you're done, submit the URL to your working project with all its tests passing.  

Note: Twitter does not allow links to be loaded in an iframe. Try using the target="_blank" or target="_top" attribute on the #tweet-quote element if your tweet won't load. target="_top" will replace the current tab so make sure your work is saved.