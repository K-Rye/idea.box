//============================================
// Universal Variables
//============================================
var titleInput = $(".title-input");
var bodyInput = $(".body-input");
var saveBtn = $(".save-btn");
var searchInput = $(".search-input");
var ideasSection = $(".ideas-section");
var ideaList = $(".idea-list");
var ideaTitle = $(".idea-title")
var arrayOfObject = getStoredIdeas() || [];
var wholeWindow = $(window)
var num = 340; //number of pixels the search bar slides down before becoming fixed.

//============================================
// Run on page load
//============================================

displayIdeas();

//============================================
// Event Listeners
//============================================

saveBtn.on("click", createIdea);
searchInput.on("keyup", searchFunction);
wholeWindow.bind("scroll", stickySearch);
ideasSection.on("keyup", ".idea-title", editTitleText);
ideasSection.on("keyup", ".idea-body-txt", editBodyText);
ideasSection.on("click", ".up-btn", upQuality);
ideasSection.on("click", ".down-btn", downQuality);
ideasSection.on("click", ".delete-btn", deleteArticle);
ideasSection.on("keydown", ".idea-title", enterKeySubmits);
ideasSection.on("keydown", ".idea-body-txt", enterKeySubmits);

//============================================
// Functions
//============================================

function createIdea(e) {
  e.preventDefault();
  var newTitle = titleInput.val();
  var newBody = bodyInput.val();
  var newIdea = new IdeaObject(newTitle, newBody)
  arrayOfObject.push(newIdea);
  var stringedIdea = JSON.stringify(arrayOfObject);
  localStorage.setItem('listIdea', stringedIdea);
  displayIdeas();
};

function displayIdeas() {
  var retrievedIdea = localStorage.getItem('listIdea');
  var parsedRetrievedIdea = JSON.parse(retrievedIdea);
  if (parsedRetrievedIdea !== null) {
    ideasSection.text('')
    parsedRetrievedIdea.forEach(idea => {
      ideasSection.prepend(
      `<article class="idea-list" data-unid="${idea.uniqueID}">
        <h3 class="idea-title" contenteditable>${idea.title}</h3><img class="btn delete-btn" src="delete.svg" onmouseover="this.src='delete-hover.svg';" onmouseout="this.src='delete.svg';">
        <p class="idea-body-txt" contenteditable>${idea.body}</p>
        <div class="vote-form">
          <img class="btn up-btn" src="upvote.svg" onmouseover="this.src='upvote-hover.svg';" onmouseout="this.src='upvote.svg';"><img class="btn down-btn" src="downvote.svg" onmouseover="this.src='downvote-hover.svg';" onmouseout="this.src='downvote.svg';"><p class="quality">quality: ${idea.quality}</p>
        </div>
      </article>`
      )
    })
    titleInput.val('');
    bodyInput.val('');
  }
};

function IdeaObject(title, body) {
  this.title = title;
  this.body = body;
  this.uniqueID = Date.now(); 
  this.quality = 'swill';
};

function searchFunction() {
  var searchText = $(this).val();
  $(".ideas-section article").each(function() {
    if ($(this).text().search(new RegExp(searchText, "i")) < 0) {
      $(this).fadeOut();
    } else {
      $(this).show();
    }
  })
};

function stickySearch() {
    if (wholeWindow.scrollTop() > num) {
        $('.search-parent').addClass('fixed');
    } else {
        $('.search-parent').removeClass('fixed');
    }
};

function editTitleText(e) {
  var thisArticleId = $(event.target).parent().data("unid");
  var thisArticleTitleText = $(event.target).text();
  var changeThisArticle = arrayOfObject.filter(function (anything) {
    if (anything.uniqueID == thisArticleId) {
      anything.title = thisArticleTitleText;
    }
  })
  var stringedIdea = JSON.stringify(arrayOfObject);
  localStorage.setItem('listIdea', stringedIdea);
};

function editBodyText() {
  var thisArticleId = $(event.target).parent().data("unid");
  var thisBodyText = $(event.target).text();
  var changeThisArticle = arrayOfObject.filter(function (anything) {
    if (anything.uniqueID == thisArticleId) {
      anything.body = thisBodyText;
    }
  })
  var stringedIdea = JSON.stringify(arrayOfObject);
  localStorage.setItem('listIdea', stringedIdea);
};

function enterKeySubmits(e) {
  if (e.keyCode == 13 && !e.shiftKey) {
      e.preventDefault();
      e.target.blur();
  }
};

function getStoredIdeas() {
  var retrievedIdea = localStorage.getItem('listIdea');
  var parsedRetrievedIdea = JSON.parse(retrievedIdea);
  return parsedRetrievedIdea;
};

function upQuality() {
  var thisArticleId = $(event.target).parent().parent().data("unid")
  var upThisArticle = arrayOfObject.filter(function (anything) {
    if (anything.uniqueID == thisArticleId) {
      if (anything.quality == 'swill') {
        anything.quality = 'plausible';
      } else if (anything.quality == 'plausible') {
        anything.quality = 'genius';
      }
    }
  })
  var stringedIdea = JSON.stringify(arrayOfObject);
  localStorage.setItem('listIdea', stringedIdea);
  displayIdeas();
};

function downQuality() {
  var thisArticleId = $(event.target).parent().parent().data("unid")
  var downThisArticle = arrayOfObject.filter(function (anything) {
    if (anything.uniqueID == thisArticleId) {
      if (anything.quality == 'genius') {
        anything.quality = 'plausible';
      } else if (anything.quality == 'plausible') {
        anything.quality = 'swill';
      }
    }
  })
  var stringedIdea = JSON.stringify(arrayOfObject);
  localStorage.setItem('listIdea', stringedIdea);
  displayIdeas();
};

function deleteArticle() {
  var thisArticleId = $(event.target).parent().data("unid")
  var deleteThisArticle = arrayOfObject.filter(function (anything) {
    return anything.uniqueID !== thisArticleId;
  })
  arrayOfObject = deleteThisArticle;
  
  var stringedIdea = JSON.stringify(arrayOfObject);
  localStorage.setItem('listIdea', stringedIdea);
  $(event.target).parent().remove()
};
