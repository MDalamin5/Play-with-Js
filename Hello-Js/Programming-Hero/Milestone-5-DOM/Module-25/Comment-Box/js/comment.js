document.getElementById('post-id').addEventListener('click', function(){
    const userComment = document.getElementById('user-comment')
    const userText = userComment.value

    const commentDiv = document.getElementById('comment-container')
    const p = document.createElement('p')
    p.innerText = userText
    commentDiv.append(p)
    userComment.value = ''
})