import styled from  'styled-components'
import Author from "./Author"
export default function AuthorList({authors}) {
    //for each  book in our books data array, return  a Book
    return <Wrapper>
        { authors.map(b => <Author title={b.title} author ={b.author} style={{ padding:10, marginHorizontal:10}}/>)}
    </Wrapper>
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-gap: 1em 1em;
    grid-auto-flow: row dense;
`