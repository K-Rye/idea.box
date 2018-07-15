//Ideas: keyup event listener for search bar
// How to change files on hover.


var titleInput = $(".title-input");
var bodyInput = $(".body-input");
var saveBtn = $(".save-btn");
var searchInput = $(".search-input");
var ideasSection = $(".ideas-section");
var ideaList = $(".idea-list");

saveBtn.on("click", createIdea);

ideasSection.on("click", ".delete-btn", deleteArticle);
ideasSection.on("click", ".up-btn", upQuality);
ideasSection.on("click", ".down-btn", downQuality);



function createIdea(e) {
  e.preventDefault();
  var title = titleInput.val();
  var body = bodyInput.val();
  ideasSection.prepend(
  `<article class="idea-list">
    <h3>${title}<img class="btn delete-btn" src="delete.svg"></h3>
    <p class="idea-body-txt">${body}</p>
    <div class="vote-form">
      <img class="btn up-btn" src="upvote.svg"><img class="btn down-btn" src="downvote.svg"><p class="quality">quality: swill</p>
    </div>
  </article>`
  )
  // titleInput.val('');
  // bodyInput.val('');
};

function deleteArticle() {
  var thisArticle = $("article");
  $(this).closest('article').remove():
};

function upQuality() {
  var quality = $(".quality");
  console.log(quality.text());
  if (quality.text() === 'quality: swill') {
    quality.text('quality: plausible');
  } else if (quality.text() === 'quality: plausible') {
    quality.text('quality: genius');
  } else {
    quality.text('quality: genius');
  }
};

function downQuality() {
  var quality = $(".quality");
  console.log(quality.text());
  if (quality.text() === 'quality: swill') {
    quality.text('quality: swill');
  } else if (quality.text() === 'quality: plausible') {
    quality.text('quality: swill');
  } else {
    quality.text('quality: plausible');
  }
};






// Architecture

// JSON and localStorage to persist data between sessions.
// Your entire application will consist of one HTML page or template.

// Data Model
// An Idea has an id, title, a body, and a quality.
// The id should be a unique identifier.
// title and body are free-form strings.

// When visiting the application, the user should:

// The text fields should be cleared and ready to accept a new idea.
// The idea should be persisted. It should still be present upon reloading the page.
// Deleting an existing idea

// When viewing the idea list:
// Each idea in the list should have a link or button to “Delete” (or 𝗫).
// Upon clicking “Delete”, the appropriate idea should be removed from the list.
// The page should not reload when an idea is deleted.
// The idea should be removed from localStorage. It should not re-appear on next page load.
// Changing the quality of an idea
// As we said above, ideas should start out as “swill.” In order to change the recorded quality of an idea, the user will interact with it from the idea list.

// Editing an existing idea
// When a user clicks the title or body of an idea in the list, that text should become an editable text field, pre-populated with the existing idea title or body.
// The user should be able to “commit” their changes by pressing “Enter/Return” or by clicking outside of the text field.
// If the user reloads the page, their edits will be reflected.

// Idea Filtering and Searching
// We’d like our users to be able to easily find specific ideas they already created, so let’s provide them with a filtering interface on the idea list.

// At the top of the idea list, include a text field labeled “Search”.
// As a user types in the search box, the list of ideas should filter in real time to only display ideas whose title or body include the user’s text. The page should not reload.
// Clearing the search box should restore all the ideas to the list.










