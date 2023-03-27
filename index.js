let bookGrid=document.getElementById("book-display");

let library=[];

function Book(title,totalPages,ifRead){
    this.title=title;
    this.totalPages=totalPages;
    this.ifRead=ifRead;
}

let addToLibrary=(book)=>{
   library.push(book);
}

let displayBooks=()=>{
    library.map((book,index)=>{
        let bookItem=document.createElement("div");
        bookItem.classList.add("book");

        let cover=document.createElement("div");
        cover.classList.add("book-image");

        let image=document.createElement("img");
        image.classList.add("image");
        image.src="./assets/book.jpg";
        cover.appendChild(image);
        bookItem.appendChild(cover);

        let details=document.createElement("div");
        details.classList.add("details");

        let title=document.createElement("p");
        title.classList.add("book-title");
        title.innerText=`Title: ${book.title}`;

        let pages=document.createElement("div");
        pages.classList.add("pages");
        pages.innerText=`Pages: ${book.totalPages}`

        let read=document.createElement("div");
        read.classList.add(`${(book.ifRead==="read")?"read" : "not-read"}`);
        read.innerText=`${(book.ifRead==="read")?"Read" : "Not Read"}`;
        
        details.appendChild(title);
        details.appendChild(pages);
        details.appendChild(read);

        bookItem.appendChild(details);
        bookGrid.appendChild(bookItem);
    }
    )
}

let nico=new Book("nico",20,"read");
let knievel=new Book("nico",20,"read");
let bill=new Book("nico",20,"not-read");
addToLibrary(nico);
addToLibrary(knievel);
addToLibrary(bill);
displayBooks();