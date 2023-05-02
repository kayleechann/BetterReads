import styled from  'styled-components'
import Book from "./Book"
export default function BookList({books}) {
    //for each  book in our books data array, return  a Book
    return <Wrapper>
        { books.map(b => <Book title={b.title} author ={b.author} pages={b.pages} link={b.link} style={{ padding:10, marginHorizontal:10}}/>)}
    </Wrapper>
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-gap: 1em 1em;
    grid-auto-flow: row dense;
`