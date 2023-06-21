import { keyboard } from '@testing-library/user-event/dist/keyboard';
import './App.css';

const bestseller = [
  {
    img : 'https://storage.googleapis.com/du-prd/books/images/9780316404594.jpg',
    title : 'Cross Down',
    author : 'James Patterson and Brendan DuBois',
    rating : '5',
  },
  {
    img : 'https://storage.googleapis.com/du-prd/books/images/9780593441275.jpg',
    title : 'Happy Place',
    author : 'Emily Henry',
    rating : '4.5',
  },
  {
    img : 'https://storage.googleapis.com/du-prd/books/images/9781501110375.jpg',
    title : 'It Ends With Us',
    author : 'Colleen Hoover',
    rating : '4',
  },
  {
    img : 'https://storage.googleapis.com/du-prd/books/images/9781668001226.jpg',
    title : 'It Starts With Us',
    author : 'Colleen Hoover',
    rating : '3',
  },
  {
    img : 'https://storage.googleapis.com/du-prd/books/images/9781649374042.jpg',
    title : 'Fourth Wings',
    author : 'Rebecca Yarros',
    rating : '3.5',
  },
]

function App() {
  return (
    <section className='bookList'>
    {
      bestseller.map((book,index)=>
      {
        return(
          <Book key={index} {...book}/>
        )
      })
    }
    </section>
  );
}

const Book = ({img,title,author,rating}) =>
{
  const clickHandler = (title) =>
  {
    console.log(title);
  }
  return(
    <article className='book'>
      <img src={img}/>
      <h1>{title.toUpperCase()}</h1>
      <h5>{author}</h5>
      <p>Rating : {rating}</p>
      <button onClick={() => clickHandler(title)} className='button' >Click Here</button>
    </article>
  )
}

export default App;
