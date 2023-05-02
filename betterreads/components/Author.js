import styled from  'styled-components'

/*export default function Book ({title, author, pages, link}){
    return  <article>
        <h1>{title}</h1>
        <h2> by {author} </h2>
        <p> Number of Pages: {pages}</p>
        <a href ={link}>Learn More</a>
    </article>
}
*/

export default function Author ({author, title}){
    return  <AuthorWrapper>
        <h1>{author}</h1>
        <p>Wrote: {title}</p>
    </AuthorWrapper>
}

const AuthorWrapper = styled.article`
    border: 2px solid black;
    border-radius: 5px;
    padding: 20px;
    margin: 10px; 
`
