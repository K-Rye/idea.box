//Ideas: keyup event listener for search bar
var titleInput = $(".title-input")
var bodyInput = $(".body=input")
var saveBtn = $(".save-btn")
var searchInput = $(".search-input")
var ideaList = $(".idea-list")

saveBtn.on("click", createIdea)
console.log('yes!')

function createIdea(e) {
  e.preventDefault();
  var title = titleInput.val();
  var body = bodyInput.val();
  ideaList.append (`<article class="idea-list">
        <h3>${title}</h3>
        <button>&times;</button>
        <p>${body}</p>
        <button><</button>
        <button>></button>
        <p>Quality: swill</p>
      </article>`)
}