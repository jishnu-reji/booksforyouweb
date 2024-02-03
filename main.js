const getBook = async () => {
    result.innerHTML = "";
    const response = await fetch(
      `http://openlibrary.org/subjects/${submit.value}.json`
    );
    const data = await response.json();
    const bks = data.works;
    bks.forEach((bk) => {
      result.innerHTML += `
              <div class="cardss col-lg-3 mb-3 ">
                  <div class="card shadow p-1">
                      <div class="text-center"><img style="height: 320px;width: 260px;" src="${`https://covers.openlibrary.org/b/id/${bk.cover_id}-M.jpg`}" class="card-img-top" alt="..."></div>
                      <div class="card-body ccc">
                          <h5 class="card-title text-center">${bk.title}</h5>
                          <p class="card-text text-center">${
                            Object.values(bk.authors)[0].name
                          }</p>
                      </div>
                  </div>
              </div>
          `;
    });
};

const bookpage =()=>{
    window.location = 'book.html'
}

const bookSearch = async() =>{
    const response = await fetch(`https://openlibrary.org/search.json?title=${bookn.value}`)
    const data = await response.json()
    const allbook = data.docs
    const book = allbook[0]
    console.log(book.title);
    bookdetails.innerHTML = `
            <div class="col-lg-6 d-flex justify-content-end">
                <div class="bookimg"><img src="${`https://covers.openlibrary.org/b/id/${book.cover_i}.jpg`}" alt=""></div>
            </div>
            <div class="col-lg-6 d-flex flex-column justify-content-center kk">
                <h2 class="bb cc">${book.title}</h2>
                <h4 class="bb"><span>Author :</span>${book.author_name}</h4>
                <p>Publish year : ${book.first_publish_year}</p>
                <p>Language : ${book.language}</p>
            </div>
    `

}