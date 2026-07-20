function BookCard({book}) {

  return (

    <div className="book-card">

      <div className="book-cover">

        <div className="book-info">
          <h2>{book.title}</h2>
          <p>{book.author}</p>
        </div>


        <div className="book-rating">

          {
            Array.from({length:5}).map((_,index)=>(
              <span key={index}>
                {
                  index < book.rating
                  ? "★"
                  : "☆"
                }
              </span>
            ))
          }

        </div>

      </div>

    </div>

  );

}
export default BookCard;