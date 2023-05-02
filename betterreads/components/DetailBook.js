import styled from  'styled-components'

export default function DetailBook({title, author, pages, link, country, language, year }){
    return  <BookWrapper>
        <h1>{title}</h1>
        <h2> by {author} </h2>
        <p> Number of Pages: {pages}</p>
        <p>Country: {country}</p>
        <p>Language: {language}</p>
        <p>Year: {year}</p>
        <a href ={link}>Learn More</a>
    </BookWrapper>
}

const BookWrapper = styled.article`
    border: 2px solid red;
    border-radius: 5px;
    padding: 10px
`