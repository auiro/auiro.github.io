
  const bookSubmit = document.getElementById("booksubmit")
    bookSubmit.addEventListener("submit", (bevent) => {
      bevent.preventDefault();
        let bookName = document.getElementById("bookname").value
        let bookAuthor = document.getElementById("author").value
        let bookPic = document.getElementById("pic").value
     
     const bdiv = document.createElement("div")
     bdiv.id = "bookdiv"

     const list = document.getElementById("list")
     list.style.visibility = "visible";
     list.appendChild(bdiv)

     const bimg = document.createElement("img")
     bimg.src = bookPic
     bimg.id = "bpic"
     bimg.onerror = onerror="this.src='https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png';"
     bdiv.appendChild(bimg)

     const textsort = document.createElement("div")
     textsort.id = "textsort"
     bdiv.appendChild(textsort)

     const bname = document.createElement("h2")
     bname.textContent = bookName

     const bauthor = document.createElement("p")
     bauthor.textContent = bookAuthor

     textsort.appendChild(bname)
     textsort.appendChild(bauthor);
    })