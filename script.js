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
       console.log(response);

       let str = "";
       resultCount.innerHTML = response.totalResults;

       for (let item of response.articles) {

           const publishedDate = new Date(item.publishedAt);

           // Format the date as dd/mm/yyyy H 24:00
           const formattedDate = `${publishedDate.getDate()}/${publishedDate.getMonth() + 1}/${publishedDate.getFullYear()} ${publishedDate.getHours()}:${publishedDate.getMinutes()}`;
           str += `<div class="col-md-3" >
                            <div class="card my-2 mx-2">
                                <img style="width:100% !important; height:200px !important" src="${item.urlToImage}" class="card-img-top alt="...">
                                <div class="card-header" style="background-color:white; height:150px !important ">
                                <h5 class="card-title">${item.title.slice(0, 35)}...</h5>
                                
                                <p>${item.author} - ${formattedDate}</p>
                                </div>
                                <div class="card-body" style="height:120px">

                                    <p class="card-text">${item.description.slice(0, 80)}...</p>
                                </div>
                                <div class="card-footer text-center" style="background-color:white"><a href="${item.url}" target="_blank" class="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>`;
       }
       document.querySelector(".content").innerHTML = str;
   };

   fetchNews(1, currentQuery);

   document.getElementById("searchText").addEventListener("input", (e) => {
    let query = e.target.value;
    currentQuery = query;
    fetchNews(1, query);
});


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