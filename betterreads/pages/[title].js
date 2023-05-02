import Head from 'next/head'
import {
  Container,
  Main,
  Title,
  Description,
  CodeTag,
} from '../components/sharedstyles'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import DetailBook from '../components/DetailBook'

// function to fetch particular url and return the data as json
const fetcher = url => fetch(url).then(r => r.json())

export default function BookDetail() {
  //localhost:3000/Lolita -> title -> "Lolita"
  const router = useRouter()
  const {title} = router.query
  
  //const { data,error } = useSWR('api/books', fetcher)
  //instead of getting all of the books, get title using api route
  // want to be able to go to a page like ==> http://localhost:3000/[title]
  const { data,error } = useSWR(`api/books/${title}`, fetcher)

  if (error){
    return <Main>
      Error!
    </Main>
  }

  if (!data){ 
    return <Main>
      Loading...
    </Main>
  }

  // if the data comes back as expected,  this renders
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        {JSON.stringify(data)}
      
      <DetailBook books = {data[0]} />
      </Main>
    </Container>
  )
}