import styled from  'styled-components'
import DetailBook from "./DetailBook"

export default function DetailList({books}) {
    console.log(books)
    return <Wrapper>
        <DetailBook title={books.title} author ={books.author} pages={books.pages} link={books.link}
        country = {books.country} language = {books.language} year = {books.year}/>
    </Wrapper>
}

const Wrapper = styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
`