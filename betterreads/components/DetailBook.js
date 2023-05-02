import styled from  'styled-components'

export default function BookDetail ({title, author, pages, link, imagelink, country, language, year }){
    return  <BookWrapper>
        <h1>{title}</h1>
        <h2> by {author} </h2>
        <p> Number of Pages: {pages}</p>
        <img src={imagelink}></img>
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