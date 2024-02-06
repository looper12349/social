
console.log("js loaded");
const main = document.querySelector('main');
main.addEventListener('click',  function (e) {
    if(e.target.classList.contains('post-button'))
    {
        const textarea = document.querySelector('.text-area');
        const value = textarea.value;
        console.log("text area value"+value);

        const feedContainer = document.createElement('section');
        feedContainer.className= 'feed-container';
        
        
        console.log(e.target);
    }
});
