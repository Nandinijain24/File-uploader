const uploadInput = document.getElementById('Upload');
const fileWrapper = document.getElementById('filewrapper');


// Event listener for file input change
uploadInput.addEventListener('change', function(event) {
    const files = event.target.files; // Get the selected file(s)
    
    if (files.length > 0) {
        const file = files[0]; // Only considering the first selected file
        const fileName = file.name;
        const fileType = file.type.split('/')[1].toUpperCase(); // Extracting file type
console.log("fileName")
        console.log("fileType")
        // Creating the HTML to display the uploaded file
        const fileBox = document.createElement('div');
        fileBox.classList.add('showfilebox');

        const leftDiv = document.createElement('div');
        leftDiv.classList.add('left');
        
        const spanFileType = document.createElement('span');
        spanFileType.classList.add('filetype');
        spanFileType.textContent = fileType; // Display file type

        const fileNameHeading = document.createElement('h3');
        fileNameHeading.textContent = fileName; // Display file name

        leftDiv.appendChild(spanFileType);
        leftDiv.appendChild(fileNameHeading);

        const rightDiv = document.createElement('div');
        rightDiv.classList.add('right');
        
        const removeButton = document.createElement('span');
        removeButton.innerHTML = '&#215;'; // 'X' symbol for removing the file
        removeButton.addEventListener('click', function() {
            fileBox.remove(); // Remove the file from the display

        });

        rightDiv.appendChild(removeButton);

        fileBox.appendChild(leftDiv);
        fileBox.appendChild(rightDiv);

        // Appending the file details to the file wrapper
        fileWrapper.appendChild(fileBox);
    }
});
