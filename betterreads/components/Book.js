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

export default function Book ({title, author, pages, link}){
    return  <BookWrapper>
        <h1>{title}</h1>
        <p> by <em>{author} </em></p>
        <p> Number of Pages: {pages}</p>
        <LearnMore href ={link}>Learn More</LearnMore>
    </BookWrapper>
}

const BookWrapper = styled.article`
    border: 2px solid black;
    border-radius: 5px;
    padding: 20px;
    margin: 10px; 
`

const LearnMore = styled.a`
    color: blue;
    &:hover {
        color: purple;
      }
`
