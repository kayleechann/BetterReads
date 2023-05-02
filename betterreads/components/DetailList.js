import styled from  'styled-components'
import DetailBook from "./DetailBook"

export default function BookList({books}) {
    //for each  book in our books data array, return  a Book
    return <Wrapper>
        { books.map(b => <DetailBook title={b.title} author ={b.author} pages={b.pages} link={b.link} imagelink={b.imagelink}/>)}
    </Wrapper>
}

const Wrapper = styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
`