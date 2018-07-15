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

function deleteArticle(e) {
  var thisArticle = $("article");
  $(this).closest('article').remove()
}

















