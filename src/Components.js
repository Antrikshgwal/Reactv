const Book = (props) => {
    const { img, title, author,id,getBook,number } = props;
    const handleClick =()=>{
      console.log(title);
    }
    const getSingleBook = ()=>{
    getBook(id);
    }
  return (
      <article className='book'>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <h4>{author} </h4>
      <span className="number">{`#${number+1}`}</span>
        <button onClick={getSingleBook}>get book by id</button>
      </article>
    );
  };
  export default Book ;
