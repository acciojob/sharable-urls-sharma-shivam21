// your code here
/ Select elements
        const form = document.getElementById("myForm");
        const urlElement = document.getElementById("url");

        form.addEventListener("submit", function(event) {
            event.preventDefault(); // prevent page reload

            const name = document.getElementById("name").value;
            const year = document.getElementById("year").value;

            let newUrl = "https://localhost:8080/";

            let params = [];
            if (name !== "") {
                params.push(name=${encodeURIComponent(name)});
            }
            if (year !== "") {
                params.push(year=${encodeURIComponent(year)});
            }

            if (params.length > 0) {
                newUrl += "?" + params.join("&");
            }

            urlElement.innerText = newUrl;
        });

