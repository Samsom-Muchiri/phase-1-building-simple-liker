// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//remove errorMessage message
const errorMessage = document.getElementById('modal')
errorMessage.classList.add('hidden')
//add event listener to the heart
const heart = document.querySelectorAll('.like-glyph')
for (let i = 0; i < heart.length; i++){
  const like = heart[i]
  like.addEventListener('click', _ => {
    let error = ""
    mimicServerCall()
    .then(res => {
      error = res
      if(!like.classList.contains('activated-heart')){
        like.classList.add('activated-heart')
        like.innerHTML = FULL_HEART
      }else{
        like.classList.remove('activated-heart')
        like.innerHTML = EMPTY_HEART
      }
      console.log(error)
      return error
    })
    .catch(() =>{
        if(error == "Random server errorMessage. Try again."){
          setTimeout(() =>{
            errorMessage.classList.remove('hidden')
            errorMessage.innerText = "Pretend remote server notified of action!"
        }, 3000)
      }
    })
  })

}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server errorMessage. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
