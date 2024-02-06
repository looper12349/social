
//.log("js loaded");
const text = document.querySelector('.text-area');
text.addEventListener('keypress', function(){
    // //.log("value: ", text.value, "length: ", text.value.length);
    const parent = text.parentNode.parentNode.parentNode;
    removeBlankChildNodes(parent);
    const textAreaParent = parent.childNodes[1];
    removeBlankChildNodes(textAreaParent);
    const para = textAreaParent.childNodes[0];
    para.innerText = text.value.length + "/100";
    // //.log("children: ",para);
});

// countChar();

function countChar(TA){
    const textArea = TA;
    //.log("All text area: ",textArea);
for(let i = 1; i<textArea.length; i++)
{
    const area = textArea[i];
    
    area.addEventListener('keypress', function(){
        //.log("event Listner added");
        //.log("value: ", area.value, "length: ", area.value.length);
        const parent = area.parentNode.parentNode.parentNode;
        removeBlankChildNodes(parent);
        const target = parent.childNodes[1];
        removeBlankChildNodes(target);
        const length = target.childNodes.length;
        //.log("length: ",target.childNodes.length);
        //.log("parent: ",target.childNodes);
        if(length>4)
        {
            const areaparent = parent.childNodes[1].childNodes[4];
            removeBlankChildNodes(areaparent);
            const para =  areaparent.childNodes[0];
            para.innerText = area.value.length + "/100";
        }
        else if(length<4){
            const areaparent = parent.childNodes[1].childNodes[1];
            removeBlankChildNodes(areaparent);
            //.log("area: ",areaparent.childNodes);
            const para =  areaparent.childNodes[0];
            para.innerText = area.value.length + "/100";
        }
        
        
        
        
        // alert(area.value);
        
    });
}
}

const main = document.querySelector('main');
main.addEventListener('click',  function (e) {

    const TA = document.querySelectorAll('.text-area');
    countChar(TA);

    if(e.target.classList.contains('post-button'))
    {
        
        const textarea = document.querySelector('.text-area');
        const value = textarea.value;
        //.log("text area value");

        
        createThread(value);
        

        
        // //.log(e.target);
    }

    
    
    if(e.target.classList.contains('like') &&  !e.target.classList.contains('liked'))
        
    {
        const icon = e.target;
        icon.src = "./assets/icons8-heart-96.png";
        icon.style.width = "25px";
        icon.style.height = "25px";
        icon.classList.add("liked");
        
    }

    else if(e.target.classList.contains("liked") )
    {
        const icon = e.target;
        icon.style.width = "20px";
        icon.style.height = "15px";
        icon.src = "./assets/heart.png";
        icon.classList.remove("liked");
        
        
    }

    if(e.target.classList.contains('edit'))
    {
        // //.log('edit done', e.target);
        const parent = e.target.parentNode.parentNode;
        // //.log("children: ", parent.childNodes.length);
        removeBlankChildNodes(parent);
        // //.log("children after removal: ",parent.childNodes);
        
        
            //.log("chilrens ", parent.childNodes);
            const post = e.target.parentNode.parentNode.childNodes[1];
            const area = e.target.parentNode.parentNode.childNodes[2];
            const reactions = e.target.parentNode.parentNode.childNodes[3];
            const lower = e.target.parentNode.parentNode.childNodes[4];
            const textArea = area.childNodes[0];
            textArea.innerText = post.innerText;
            // //.log("Text Area", textArea.innerText);
            // area.value
            //.log("Post ",post);
            //.log("area: ",area);
            area.classList.remove('none');
            lower.classList.remove('none');
            post.classList.add('none');
            reactions.classList.add('none');

        
        
    }

    if(e.target.classList.contains('cancel-button'))
    {   
        // const parent = e.target.parentNode.parentNode;
        // //.log("parent: ", parent);
        // //.log("Cancel Children: ",e.target.parentNode.parentNode.childNodes);
        const post = e.target.parentNode.parentNode.childNodes[1];
        const area = e.target.parentNode.parentNode.childNodes[2];
        const reactions = e.target.parentNode.parentNode.childNodes[3];
        const lower = e.target.parentNode.parentNode.childNodes[4];
        area.classList.add('none');
        lower.classList.add('none');
        post.classList.remove('none');
        reactions.classList.remove('none');
    }

    if(e.target.classList.contains('cancelButton'))
    {
        const parent = e.target.parentNode.parentNode.parentNode;
        parent.classList.add('none');
    }

    if(e.target.classList.contains('feed-button'))
    {
        //.clear();
        //.log(e.target);
        
        //.log("Cancel Children: ",e.target.parentNode.parentNode.childNodes);

        const area = e.target.parentNode.parentNode.childNodes[2];
        removeBlankChildNodes(area);
        const textArea = area.childNodes[0];
        const post = e.target.parentNode.parentNode.childNodes[1];
        post.innerText = textArea.value;

        //.log("Thread", post);
        //.log(textArea);
        //.log("area value",textArea.value);

       
        const reactions = e.target.parentNode.parentNode.childNodes[3];
        const lower = e.target.parentNode.parentNode.childNodes[4];
        area.classList.add('none');
        lower.classList.add('none');
        post.classList.remove('none');
        reactions.classList.remove('none');

    }
    
    if(e.target.classList.contains('delete'))
    {
        const parent = e.target.parentNode.parentNode.parentNode.parentNode;
        //.log("Parent Node: ",parent);
        const child = e.target.parentNode.parentNode.parentNode;
        //.log("Child Node: ", child);
        parent.remove(child);
    }

    if(e.target.classList.contains('delete-comment'))
    {
        //.log("delete comment");
        const parent = e.target;
        const container = parent.parentNode.parentNode.parentNode.parentNode;
        const child = parent.parentNode.parentNode.parentNode;

        //.log('parent: ', container);
        //.log("childNode: ", child);
        container.removeChild(child);
        //.log("comment deleted");
    }

    if(e.target.classList.contains('comment'))
    {
        //.clear();
        //.log('comment clicked confirm');
        const parent = e.target.parentNode.parentNode.parentNode.parentNode;
        //.log("Before blank: ",parent.childNodes);
        removeBlankChildNodes(parent);
        //.log('after blank: ',parent.childNodes);
        const commentBoxParent = parent.childNodes[1];
        removeBlankChildNodes(commentBoxParent);
        //.log("commentBoxParent: ", commentBoxParent);
        const commentBox = commentBoxParent.childNodes[0];
        commentBox.classList.remove('none');
        // //.log("commentbox parent childnodes: ", commentBoxParent.childNodes);
        // //.log("childnodes: ", parent.childNodes);
        // commentBox.classList.remove('none');
    }

    if(e.target.classList.contains('commentButton'))
    {

        //.log('comment Button clicked.');
        const parent = e.target.parentNode.parentNode;
        
        removeBlankChildNodes(parent);
        //.log("parent: ", parent);
        const textAreaParent =  parent.childNodes[0];
        removeBlankChildNodes(textAreaParent);
        const textArea = textAreaParent.childNodes[0]
        // //.log("textAreaParent: ", textAreaParent.childNodes);
        // //.log("textArea: ", textArea);
        // const textArea = document.createElement('textarea'); 
        // textArea.classList.add('commentTextArea');
        const value = textArea.value;
        // //.log('textArea value: ', value);
        const feedComment = createComment(value);
        const container = parent.parentNode.parentNode;
        container.appendChild(feedComment);
        const commentBoxParent = parent.parentNode;
        removeBlankChildNodes(commentBoxParent);
        //.log("commentBxParrent",commentBoxParent);
        commentBoxParent.classList.add('none');
        // parent.appendChild(feedComment);

        // comment box none;
        
    }

});



function createThread(value)
{
    // let val = value;
    const feedContainer = document.createElement('section');
    feedContainer.classList.add('feed-container');

    const feedCard = document.createElement('section');
    feedCard.classList.add('feed-card');

    const userIcon = document.createElement('section');
    userIcon.classList.add('user-icon');
    const icon = document.createElement('img');
    // icon.width = "40px"; icon.height="40px";
    icon.src="./assets/profile_image.png";
    userIcon.appendChild(icon);
    feedCard.appendChild(userIcon);

    const feedContent = document.createElement('section');
    feedContent.classList.add('feed-content');
    const username = document.createElement('section');
    username.classList.add('username');
    const name = document.createElement('h3');
    name.innerText = "Joanne Graham";
    const userId = document.createElement('span');
    userId.innerText ="@joanegraham123";
    const edit = document.createElement('img');
    edit.classList.add('edit');
    // edit.setAttribute('onclick','editPost()') ;
    edit.src="./assets/edit.png";
    
    const del = document.createElement('img');
    del.classList.add('delete');
    del.src = "./assets/delete.png";

    username.appendChild(name);
    username.appendChild(userId);
    username.appendChild(edit);
    username.appendChild(del);

    feedContent.appendChild(username);


    const feedPost = document.createElement('section');
    feedPost.classList.add('feed-post');
    feedPost.innerText = value;

    feedContent.appendChild(feedPost);

    const postArea = document.createElement('section');
    postArea.classList.add('post-area', 'none');
    const post = document.createElement('textarea');
    post.classList.add('textarea');
    post.placeholder = "Edit your post";
    postArea.appendChild(post);
    feedContent.appendChild(postArea);

    const feedReactions = document.createElement('section');
    feedReactions.classList.add('feed-reactions');
    const comment = document.createElement('img');
    comment.classList.add("comment");
    comment.src = "./assets/comment.png";
    const like = document.createElement('img');
    like.classList.add('like');
    like.src = "./assets/heart.png";
    feedReactions.appendChild(comment);
    feedReactions.appendChild(like);

    const feedLower = document.createElement('section');
    feedLower.classList.add('lower', 'none');
    const para = document.createElement('p');
    para.classList.add('char-count');
    para.innerText = "0/100";
    const cancel = document.createElement('button');
    cancel.classList.add('cancel-button');
    cancel.textContent = "Cancel";
    cancel.style.height = "35px";
    const postButton = document.createElement('button');
    postButton.classList.add('feed-button');
    postButton.textContent = "Post";
    postButton.style.height = "35px";
    feedLower.appendChild(para);
    feedLower.appendChild(cancel);
    feedLower.appendChild(postButton);


    feedContent.appendChild(feedReactions);
    feedContent.appendChild(feedLower);

    feedCard.appendChild(feedContent);

    feedContainer.appendChild(feedCard);

    const feedComments = document.createElement('section');
    feedComments.classList.add('feed-comments');
    {
        const commentBox = document.createElement('section');
        commentBox.classList.add('comment-box', 'none');
        const userIcon = document.createElement('section');
        userIcon.classList.add('user-icon');
        const icon = document.createElement('img');
        icon.src="./assets/profile_image.png";
        userIcon.appendChild(icon);
        commentBox.appendChild(userIcon);
        feedComments.appendChild(commentBox);

        const feedContent = document.createElement('section');
        feedContent.classList.add('feed-content');
        const postArea = document.createElement('section');
        postArea.classList.add('post-area');
        const post = document.createElement('textarea');
        post.classList.add('text-area');
        post.style.height = "60px";
        post.placeholder = "Write a comment...";
        postArea.appendChild(post);
        feedContent.appendChild(postArea);
        // commentBox.appendChild(feedContent);
        
        const lower = document.createElement('section');
        lower.classList.add('lower');
        const para = document.createElement('p');
        para.classList.add('char-count');
        para.innerText = "0/100";
        const cancel = document.createElement('button');
        cancel.classList.add('cancelButton');
        const commentButton = document.createElement('button');
        commentButton.classList.add("commentButton");
        commentButton.textContent = "Comment";
        cancel.textContent = "Cancel";
        cancel.style.width = "100px";
        cancel.style.height = "35px";
        commentButton.style.width = "100px";
        commentButton.style.height = "35px";
        lower.appendChild(para);
        lower.appendChild(cancel);
        lower.appendChild(commentButton);
        feedContent.appendChild(lower);

        commentBox.appendChild(feedContent);
        feedContainer.appendChild(feedComments);
        //.log("feedComments", feedComments);
        
        
    }

    
    /**
     * comment box banega
     * feedContainer me append hoga;
     */

    const Feed = document.querySelector('.feeds');
    Feed.appendChild(feedContainer);

    

    
    

    //.log("Thread Created");
    //.log(value);
}


function createComment(value)
{
    const feedCard = document.createElement('section');
    feedCard.classList.add('feed-card');
    const userIcon = document.createElement('section');
    userIcon.classList.add('user-icon');
    const icon = document.createElement('img');
    icon.src="./assets/profile_image.png";
    icon.style.width = "30px";
    icon.style.height = "30px";
    userIcon.appendChild(icon);
    feedCard.appendChild(userIcon);

    const feedContent = document.createElement('section');
    feedContent.classList.add('feed-content');
    const username = document.createElement('section');
    username.classList.add('username');

    const name = document.createElement('span');
    name.innerText = "@joannegraham123";
    const edit = document.createElement('img');
    edit.classList.add('edit');
    edit.src="./assets/edit.png";
    const del = document.createElement('img');
    del.classList.add('delete-comment');    
    del.src = "./assets/delete.png";
    username.appendChild(name);
    username.appendChild(edit);
    username.appendChild(del);
    feedContent.appendChild(username);

    const feedPost = document.createElement('section');
    feedPost.classList.add('feed-post');
    feedPost.innerText = value;
    feedContent.appendChild(feedPost);


    const postArea = document.createElement('section');
    postArea.classList.add('post-area', 'none');
    const post = document.createElement('textarea');
    post.classList.add('textarea');
    post.placeholder = "Edit your post";
    postArea.appendChild(post);
    feedContent.appendChild(postArea);
    const feedReactions = document.createElement('section');
    feedReactions.classList.add("reactions");
    const like = document.createElement('img');
    like.classList.add('like');
    like.src = "./assets/heart.png";
    feedReactions.appendChild(like);
    const label = document.createElement('label');
    label.classList.add('reaction');
    label.innerText = "Reacted: 567 Likes";
    feedReactions.appendChild(label);
    feedContent.appendChild(feedReactions);

    const lower = document.createElement('section');
    lower.classList.add('lower', 'none');
    const para = document.createElement('p');
    para.classList.add('char-count');
    para.innerText = "0/100";
    const cancel = document.createElement('button');
    cancel.classList.add('cancel-button');
    cancel.textContent = "Cancel";
    cancel.style.height = "35px";
    const postButton = document.createElement('button');
    postButton.classList.add('feed-button');
    postButton.textContent = "Post";
    postButton.style.height = "35px";
    lower.appendChild(para);
    lower.appendChild(cancel);
    lower.appendChild(postButton);
    feedContent.appendChild(lower);
    feedCard.appendChild(feedContent);

    return feedCard;


}

function removeBlankChildNodes(parentNode) {
    for (var i = 0; i < parentNode.childNodes.length; i++) {
      var childNode = parentNode.childNodes[i];
      if (childNode.nodeType === Node.TEXT_NODE && childNode.nodeValue.trim() === "") {
        parentNode.removeChild(childNode);
      }
    }
  }