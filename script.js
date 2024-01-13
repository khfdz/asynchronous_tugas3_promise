   let currentQuery = "bitcoin";
        let currentPage = 1;

        const fetchNews = async (page, q) => {
            console.log(`Fetching News for ${q}, Page Number ${page}...`);

            var url = 'https://newsapi.org/v2/everything?' + 
                        'q=' + q +
                        '&from=2024-01-11&' +
                        'to=2024-01-11&' +
                        'pageSize=20&' +
                        'page=' + page +
                        '&sortBy=popularity&' +
                        'apiKey=658a971a11954e489a7a7b4b5a7b5648';

            var req = new Request(url);

            let a = await fetch(req);
            let response = await a.json();
            
            let str = "";
            resultCount.innerHTML = response.totalResults;
            
            for (let item of response.articles) {
                str += `<div class="card my-2 mx-2" style="width: 18rem;">
                            <img src="${item.urlToImage}" class="card-img-top alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${item.title.slice(0, 30)}...</h5>
                                <p class="card-text">${item.description.slice(0, 75)}...</p>
                                <a href="${item.url}" target="_blank" class="btn btn-primary">Read More</a>
                            </div>
                        </div>`;
            }
            document.querySelector(".content").innerHTML = str;
        };

        fetchNews(1, currentQuery);

        document.getElementById("searchBtn").addEventListener("click", (e) => {
            e.preventDefault();
            let query = document.getElementById("searchText").value;
            currentQuery = query;
            fetchNews(1, query);
        });

        document.getElementById("previousPage").addEventListener("click", (e) => {
            e.preventDefault();
            if (currentPage > 1) {
                currentPage = currentPage - 1;
                fetchNews(currentPage, currentQuery);
            }
        });

        document.getElementById("nextPage").addEventListener("click", (e) => {
            e.preventDefault();
            currentPage = currentPage + 1;
            fetchNews(currentPage, currentQuery);
        });

        document.getElementById("busi").addEventListener("click", (e) => {
            e.preventDefault();
            currentQuery = "business";
            fetchNews(1, currentQuery);
        });
        
        document.getElementById("tech").addEventListener("click", (e) => {
            e.preventDefault();
            currentQuery = "technology";
            fetchNews(1, currentQuery);
        });
        
        document.getElementById("entert").addEventListener("click", (e) => {
            e.preventDefault();
            currentQuery = "entertainment";
            fetchNews(1, currentQuery);
        });

        document.getElementById("homes").addEventListener("click", (e) => {
            e.preventDefault();
            currentQuery = "bitcoin";
            fetchNews(1, currentQuery);
        });