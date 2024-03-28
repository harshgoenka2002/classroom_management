// Add event listener to checkboxes and select element
document.querySelectorAll('#subject, #mcheck1, #mcheck2, #mcheck3').forEach(element => {
    element.addEventListener('change', function() {
        // Fetch selected subject and checkboxes data
        const subject = document.getElementById('subject').value;
        const syllabus = document.getElementById('mcheck1').checked;
        const previousYear = document.getElementById('mcheck2').checked;
        const materials = document.getElementById('mcheck3').checked;

        // Create XMLHttpRequest object
        const xhr = new XMLHttpRequest();

        // Define callback function for when the request completes
        xhr.onload = function() {
            if (xhr.status === 200) {
                // Parse the response JSON
                const pdfs = JSON.parse(xhr.responseText);

                // Clear existing PDFs in the container
                const pdfContainer = document.getElementById('pdf_container');
                pdfContainer.innerHTML = '';

                // Iterate over received PDF data and add them to the container
                pdfs.forEach(pdf => {
                    const link = document.createElement('a');
                    link.href = `/pdf/${pdf._id}`;
                    link.target = '_blank';
                    link.textContent = pdf.name;
                    link.className="pdf_link fill-div"
                    const div = document.createElement('div');
                    div.className="pdf_box";
                    div.appendChild(link);

                    pdfContainer.appendChild(div);
                });
            } else {
                console.error('Error fetching PDFs:', xhr.statusText);
            }
        };

        // Prepare and send the AJAX request
        xhr.open('GET', `/pdfs?subject=${subject}&syllabus=${syllabus}&previous_year=${previousYear}&materials=${materials}`);
        xhr.send();
    });
});
