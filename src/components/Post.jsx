import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar'
import styles from './Post.module.css'
import { Comment } from './comment'
import { useState } from 'react'





export function Post({author, publishedAt, content}) {

    const [comments, setComments] = useState([
        'post legal'
    ])

    const [newCommentText, setNewCommentText] = useState('')

   

    const publishedDateFormatted = format(publishedAt,
         "d 'de' LLLL 'às' HH:mm'h'", {
            locale: ptBR,
            
         })
    
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewComment(){
        event.preventDefault()
        setComments([...comments, newCommentText])
        setNewCommentText('')
        
    }

    function handleNewCommentChange(){
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
        
    }

    function HandleNewCommentInvalid(){
        event.target.setCustomValidity('Esse campo é obrigatorio')
    }

    function deleteComment(commentToDelete) {
        const commentWithoutDeleteOne = comments.filter(comment =>{
            return comment !== commentToDelete
        })

        setComments(commentWithoutDeleteOne)
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar className={styles.avatar} src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                    </time>
            </header>

            <div className={styles.content}>
                {content.map(item => {
                    if (item.type === 'paragraph'){
                        // eslint-disable-next-line react/jsx-key
                        return <p key={item.content}>{item.content}</p>
                    } else if(item.type === 'link') {
                        // eslint-disable-next-line react/jsx-key
                        return <p key={item.content}><a href="">{item.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    value={newCommentText}
                    placeholder='Deixe um comentário'
                    onChange={handleNewCommentChange}
                    onInvalid={HandleNewCommentInvalid}
                    required
                />

                <footer>

                    <button type='submit' disabled={newCommentText.length == 0}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    // eslint-disable-next-line react/jsx-key
                    return <Comment onDeleteComment={deleteComment} key={comment} content={comment}/>
                })}
            </div>
        </article>
    )
}