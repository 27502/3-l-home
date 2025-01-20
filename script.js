
const addBookBtn = document.getElementById("addBookBtn");
const bookTableBody = document.querySelector("#bookTable tbody");

addBookBtn.addEventListener("click", () => {

  const bookName = document.getElementById("bookName").value.trim();
  const authorName = document.getElementById("authorName").value.trim();
  const bookYear = document.getElementById("bookYear").value.trim();


  if (!bookName || !authorName || !bookYear) {
    alert("Barcha maydonlarni to'ldiring!");
    return;
  }


  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${bookName}</td>
    <td>${authorName}</td>
    <td>${bookYear}</td>
    <td><button class="delete-btn">O'chirish</button></td>
  `;
  bookTableBody.appendChild(newRow);


  document.getElementById("bookName").value = "";
  document.getElementById("authorName").value = "";
  document.getElementById("bookYear").value = "";

  const deleteBtn = newRow.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => {
    newRow.remove();
  });
});
