//Ideas: keyup event listener for search bar
var titleInput = $(".title-input");
var bodyInput = $(".body-input");
var saveBtn = $(".save-btn");
var searchInput = $(".search-input");
var ideasSection = $(".ideas-section");
var ideaList = $(".idea-list");
var ideaTitle = $(".idea=title");
var arrayOfIdeas = getStoredIdeas() || [];
$(window).bind("scroll", stickySearch);
var searchBarSlide = 340;

// ==========================
// Run on page load
// ==========================
displayIdeas();

// =========================
// Event Listeners
// =========================
saveBtn.on("click", createIdea);
searchInput.on("keyup", searchFunction);
ideasSection.on("click", ".delete-btn," deleteArticle);
ideasSection.on("click", ".up-btn", upQuality);
ideasSection.on("click", ".down-btn", downQuality);
ideasSection.on("keydown", ".idea-title", enterKeySubmits);
ideasSection.on("keyup", ".idea-title", editTitleText);
ideasSection.on("keyup", ".idea-body-txt", editBodyText);
ideasSection.on("keydown", ".idea-body-txt", enterKeySubmits);

// =========================
// Functions
// =========================

function stickySearch() {
  if ($(window).scrollTop() > num) {
    $(".search-parent").addClass("fixed");
  } else {
    $(".search-parent").removeClass("fixed");
  }
};

function searchFunction() {
  var seachText = $(this).val();
  $(".ideas-section article").each(function() {
    if ($(this).text().seach(new RegExp(searchText, "i")) < 0) {
      $(this).fadeOut();
    } else {
      $(this).show();
    }
  })
};

function enterKeySubmits(e) {
  if (er.keyCode == 13 && !e.shiftKey) {
    e.preventDefault();
    e.target.blur();
  }
};

function editTitleText(e) {
  var thisArticleId = $(event.target).parent().data('unid');
  var thisArticleTitleText = $(event.target).text();
  var changeThisArticle = arrayOfIdeas.filter(function (anything) {
    if (anything.uniqueID == thisArticleId) {
      anything.title = thisArticleTitleText;
    }
  })
  var stringedIdea = JSON.stringify(arrayOfIdeas);
  localStorage.setItem("listIdea", stringedIdea);
};

function editBodyText() {
  var thisArticleId = $(event.target).parent.data("unid");
  var thisBodyText = $(event.target).text();
  var changeThisArticle = arrayOfIdeas.filter(function (anything) {
    if (anything.uniqueID == thisArticleId) {
      anything.body =thisBodyText;
    }
  })
  var stringedIdea = JSON.stringify(arrayOfIdeas);
  localStorage.setItem("listIdea", stringedIdea);
};

function IdeaObject(title, body) {
  this.title = title;
  this.body = body;
  this.uniqueID = Date.now();
  this.quality = "swill";
};

function getStoredIdeas() {
  var retirevedIdea = localStorage.getItem("listIdea");
  var parsedRetrievedIdea = JSON.parse(retirevedIdea);
  return parsedRetrievedIdea;
};

function createIdea(e) {
  e.preventDefault();
  var newTitle = titleInput.val();
  var newBody = bodyInput.val();
  var newIdea = new IdeaObject(newTitle, newBody);

  arrayOfIdeas.push(newIdea);
  var stringedIdea = JSON.stringify(arrayOfIdeas);
  localStorage.setItem("listIdea", stringedIdea);
  displayIdeas();
};

function displayIdeas() {
  var retirevedIdea = localStorage.getItem("listIdea");
  var parsedRetrievedIdea = JSON.parse(retrievedIdea);
  if (parsedRetrievedIdea != null) {
    ideaSection.text("");
    parsedRetrievedIdea.forEach(idea => {
      ideasSection.prepend
        (`<article class="idea-list" data-unid=${idea.uniqueID}">
          <h3 class="idea-title" contenteditable>${idea.title}</h3><img class="btn delete-btn" src="delete.svg">
          <p class="idea-body-txt" contenteditable>${idea.body}</p>
          <div class="vote-form">
            <img class="btn up-btn" src"up-vote.svg" onmouseover="this.src="upvote-hover.svg";"onmouseout="this.src="upvote-svg"
          </div>
          </article>`)   
    })
  }
};
















// //============================================
// // Universal Variables
// //============================================
// var titleInput = $(".title-input");
// var bodyInput = $(".body-input");
// var saveBtn = $(".save-btn");
// var searchInput = $(".search-input");
// var ideasSection = $(".ideas-section");
// var ideaList = $(".idea-list");
// var ideaTitle = $(".idea-title")
// var arrayOfObject = getStoredIdeas() || [];
// $(window).bind("scroll", stickySearch);
// var num = 340; //number of pixels the search bar slides down before becoming fixed.




// //============================================
// // Run on page load
// //============================================
// displayIdeas();

// //============================================
// // Event Listeners
// //============================================
// saveBtn.on("click", createIdea);
// searchInput.on("keyup", searchFunction);
// ideasSection.on("click", ".delete-btn", deleteArticle);
// ideasSection.on("click", ".up-btn", upQuality);
// ideasSection.on("click", ".down-btn", downQuality);
// ideasSection.on("keydown", ".idea-title", enterKeySubmits);
// ideasSection.on("keyup", ".idea-title", editTitleText);
// ideasSection.on("keyup", ".idea-body-txt", editBodyText);
// ideasSection.on("keydown", ".idea-body-txt", enterKeySubmits);


// //============================================
// // Functions
// //============================================


//  function stickySearch() {
//     if ($(window).scrollTop() > num) {
//         $('.search-parent').addClass('fixed');
//     } else {
//         $('.search-parent').removeClass('fixed');
//     }
// };



// function searchFunction() {
//   var searchText = $(this).val();
//   $(".ideas-section article").each(function() {
//     if ($(this).text().search(new RegExp(searchText, "i")) < 0) {
//       $(this).fadeOut();
//     } else {
//       $(this).show();
//     }
//   })
// };

// function enterKeySubmits(e) {
//   if (e.keyCode == 13 && !e.shiftKey) {
//       e.preventDefault();
//       e.target.blur();
//   }
// }

// function editTitleText(e) {
//   var thisArticleId = $(event.target).parent().data("unid");
//   var thisArticleTitleText = $(event.target).text();
//   var changeThisArticle = arrayOfObject.filter(function (anything) {
//     if (anything.uniqueID == thisArticleId) {
//       anything.title = thisArticleTitleText;
//     }
//   })
//   var stringedIdea = JSON.stringify(arrayOfObject);
//   localStorage.setItem('listIdea', stringedIdea);
// }

// function editBodyText() {
//   var thisArticleId = $(event.target).parent().data("unid");
//   var thisBodyText = $(event.target).text();
//   var changeThisArticle = arrayOfObject.filter(function (anything) {
//     if (anything.uniqueID == thisArticleId) {
//       anything.body = thisBodyText;
//     }
//   })
//   var stringedIdea = JSON.stringify(arrayOfObject);
//   localStorage.setItem('listIdea', stringedIdea);
// }



// function IdeaObject(title, body) {
//   this.title = title;
//   this.body = body;
//   this.uniqueID = Date.now(); 
//   this.quality = 'swill';
// }

// function getStoredIdeas() {
//   var retrievedIdea = localStorage.getItem('listIdea');
//   var parsedRetrievedIdea = JSON.parse(retrievedIdea);
//   return parsedRetrievedIdea;
// }

// function createIdea(e) {
//   e.preventDefault();
//   var newTitle = titleInput.val();
//   var newBody = bodyInput.val();
//   var newIdea = new IdeaObject(newTitle, newBody)
  

//   arrayOfObject.push(newIdea);
//   var stringedIdea = JSON.stringify(arrayOfObject);
//   localStorage.setItem('listIdea', stringedIdea);
//   displayIdeas();
// };

// function displayIdeas() {
//   var retrievedIdea = localStorage.getItem('listIdea');
//   var parsedRetrievedIdea = JSON.parse(retrievedIdea);

//   if (parsedRetrievedIdea !== null) {
//     ideasSection.text('')
//     parsedRetrievedIdea.forEach(idea => {
//       ideasSection.prepend(
//       `<article class="idea-list" data-unid="${idea.uniqueID}">
//         <h3 class="idea-title" contenteditable>${idea.title}</h3><img class="btn delete-btn" src="delete.svg">
//         <p class="idea-body-txt" contenteditable>${idea.body}</p>
//         <div class="vote-form">
//           <img class="btn up-btn" src="upvote.svg"><img class="btn down-btn" src="downvote.svg"><p class="quality">quality: ${idea.quality}</p>
//         </div>
//       </article>`
//       )
//     })
//     // titleInput.val('');
//     // bodyInput.val('');
//   }
// };


// function deleteArticle() {
//   var thisArticleId = $(event.target).parent().data("unid")
//   var deleteThisArticle = arrayOfObject.filter(function (anything) {
//     return anything.uniqueID !== thisArticleId;
//   })

//   arrayOfObject = deleteThisArticle;
//   var stringedIdea = JSON.stringify(arrayOfObject);
//   localStorage.setItem('listIdea', stringedIdea);
//   $(event.target).parent().remove()
// };



// function upQuality() {
//   var thisArticleId = $(event.target).parent().parent().data("unid")
//   var upThisArticle = arrayOfObject.filter(function (anything) {
//     if (anything.uniqueID == thisArticleId) {
//       if (anything.quality == 'swill') {
//         anything.quality = 'plausible';
//       } else if (anything.quality == 'plausible') {
//         anything.quality = 'genius';
//       }
//     }
//   })
//   var stringedIdea = JSON.stringify(arrayOfObject);
//   localStorage.setItem('listIdea', stringedIdea);
//   displayIdeas();
// };

// function downQuality() {
//   var thisArticleId = $(event.target).parent().parent().data("unid")
//   var downThisArticle = arrayOfObject.filter(function (anything) {
//     if (anything.uniqueID == thisArticleId) {
//       if (anything.quality == 'genius') {
//         anything.quality = 'plausible';
//       } else if (anything.quality == 'plausible') {
//         anything.quality = 'swill';
//       }
//     }
//   })
//   var stringedIdea = JSON.stringify(arrayOfObject);
//   localStorage.setItem('listIdea', stringedIdea);
//   displayIdeas();
// };






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


// Idea Filtering and Searching
// We’d like our users to be able to easily find specific ideas they already created, so let’s provide them with a filtering interface on the idea list.

// At the top of the idea list, include a text field labeled “Search”.
// As a user types in the search box, the list of ideas should filter in real time to only display ideas whose title or body include the user’s text. The page should not reload.
// Clearing the search box should restore all the ideas to the list.

// Editing an existing idea
// When a user clicks the title or body of an idea in the list, that text should become an editable text field, pre-populated with the existing idea title or body.
// If the user reloads the page, their edits will be reflected.
//=========================
//ABOVE THIS IS DONE
// The user should be able to “commit” their changes by pressing “Enter/Return” or by clicking outside of the text field.











