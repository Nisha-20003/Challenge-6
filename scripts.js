document.addEventListener('DOMContentLoaded', () => {
    const value = document.getElementsByTagName("input")[0];
    const plusButton = document.getElementById("plus");

    plusButton.addEventListener("click", () => {
        if (value.value === "") {
            alert("Please input a value");
        } else {
            const newUl = document.querySelector("ul");
            const ulli = document.createElement("li");
            ulli.textContent = value.value;
            ulli.classList.add("item"); // Set class to the list item

            // Creating and appending Delete button
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.classList.add("delete-btn"); // Add class for styling
            ulli.appendChild(deleteButton);

            // Creating and appending Done button
            const doneButton = document.createElement("button");
            doneButton.textContent = "Done";
            doneButton.classList.add("done-btn"); // Add class for styling
            ulli.appendChild(doneButton);

            newUl.appendChild(ulli); // Append the list item to the ul
            value.value = ""; // Clear the input field
let buttonLine = document.createElement("hr");
ulli.appendChild(buttonLine);

            // Set class to the container once an item is added
            const listCom = document.getElementById("listContainer");
            listCom.setAttribute("class", "container2");

            // Add event listeners for delete and done buttons
            deleteButton.addEventListener("click", () => {
                    newUl.removeChild(ulli); // Remove the item after animation ends
            });

            doneButton.addEventListener("click", () => {
                ulli.style.textDecoration = "line-through";
            });
        }
    });
});