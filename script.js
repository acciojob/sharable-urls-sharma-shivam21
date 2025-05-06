// your code here
/ Select elements
         document.getElementById('button').addEventListener('click', function() {
      let baseUrl = 'https://localhost:8080/';
      let name = document.getElementById('name').value.trim();
      let year = document.getElementById('year').value.trim();

      let params = [];

      if (name) params.push(name=${encodeURIComponent(name)});
      if (year) params.push(year=${encodeURIComponent(year)});

      let queryString = params.length > 0 ? '?' + params.join('&') : '';

      document.getElementById('url').innerText = baseUrl + queryString;
    });

