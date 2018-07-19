//Ideas: keyup event listener for search bar
var titleInput = $(".title-input");
var bodyInput = $(".body-input");
var saveBtn = $(".save-btn");
var searchInput = $(".search-input");
var ideasSection = $(".ideas-section");
var ideaList = $(".idea-list");
var ideaTitle = $(".idea-title");
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
ideasSection.on("click", ".delete-btn", deleteArticle);
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
  var retrievedIdea = localStorage.getItem("listIdea");
  var parsedRetrievedIdea = JSON.parse(retrievedIdea);
  if (parsedRetrievedIdea != null) {
    ideasSection.text("");
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

function deleteArticle() {
  var thisArticleId = $(event.target).parent().data("unid")
  var deleteThisArticle = arraOfIdeas.filter(function (anything) {
    return anything.uniqueID !== thisArticleID;
  })
  arrayOfObject = deleteThisArticle;

  var stringedIdea = JSON.stringify(arrayOfIdeas);
  localStorage.setItem("listIdea", stringedIdea);
  $(event.target).parent().remove();
};

function upQuality() {
  var thisArticleId = $(event.target).parent().parent().data("unid")
  var upThisArticle = arraOfIdeas.filter(function (anything) {
    if (anything.uniqueID == thisArticleId) {
      if (anything.quality == "swill") {
        anything.quality = "plausible";
      } else if (anything.quality == "plausible") {
        anything.quality = "genius";
      }
    }
  })
  var stringedIdea = JSON.stringify(arrayOfIdeas);
  localStorage.setItem("listIdea", stringIdea);
  displayIdeas();
};

function downQuality() {
  var thisArticleId = $(event.target).parent().parent().data("unid")
  var downThisArticle = arrayOfIdeas.filter(function (anything) {
    if (anything.uniquId == thisArticleId) {
      if (anything.quality == "genius") {
        anything.quality = "plausible";
      } else if (anything.quality == "plausible") {
        anything.quality = "swill"
      }
    }
  })
  var stringedIdea = JSON.stringify(arraOfIdeas);
  localStorage.setItem("listIdea", stringedIdea);
  displayIdeas();
};












