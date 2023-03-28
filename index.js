let bookGrid=document.getElementById("book-display");

const library=[];

function Book(title,totalPages,ifRead){
    this.title=title;
    this.totalPages=totalPages;
    this.ifRead=ifRead;
}

let addToLibrary=(book)=>{
   library.push(book);
}

let displayBooks=(library)=>{
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
        read.classList.add(`${(book.ifRead===true)?"read" : "not-read"}`);
        read.innerText=`${(book.ifRead===true)?"Read" : "Not Read"}`;
        
        details.appendChild(title);
        details.appendChild(pages);
        details.appendChild(read);

        bookItem.appendChild(details);
        bookGrid.appendChild(bookItem);
    }
    )
}

let addBook=document.getElementById("button-add");
let form=document.getElementById("form");
let formButton=document.getElementById("submit");

addBook.addEventListener("click",(e)=>{
    form.style.display="flex"
});

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let data= new FormData(form);
    let title=data.get("title");
    let pages=data.get("pages");
    let ifRead=data.get("read");
    let check=(ifRead==="checked")?false : true;
    console.log(title,pages,ifRead);

    let book=new Book(title,pages,check)
    addToLibrary(book);

    form.style.display="none";
    bookGrid.innerHTML="";

    displayBooks(library);
})

let nico=new Book("nico",20,true);
let knievel=new Book("nico",20,true);
let bill=new Book("nico",20,false);
addToLibrary(nico);
addToLibrary(knievel);
addToLibrary(bill);
displayBooks(library);