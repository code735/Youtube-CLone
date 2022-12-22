let getData = () => {
    var videoData = JSON.parse(localStorage.getItem("videoPage"));
    console.log(videoData);
    renderVideo(videoData);
}

let renderVideo = (data) => {
    let Iframe = document.getElementById("videoId");
    let id = data.id.videoId;
    let url = `https://www.youtube.com/embed/${id}`;
    Iframe.src = url;

    document.getElementById("channel_title").textContent = data.snippet.channelTitle;
    var title = document.createElement("p");
    title.textContent = data.snippet.title;
    title.style.margin = "0";

    document.getElementById("description").textContent = data.snippet.description;
    document.getElementById("video_title").append(title);
    console.log(data.snippet.channelTitle);
    appendVideos(data.snippet.channelTitle);
}

window.onload = () => {
    getData();
}

let appendVideos = async (searchterm) => {
    event.preventDefault();
    let apiKey = 'AIzaSyBCTU41Llw-Pn3ayHDlGWE6PhBOCPOAvCA';
    var url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchterm}&key=${apiKey}`;

    var unwrapped = await fetch(url);
    var data = await unwrapped.json();
    appendData(data);
}


let appendData = (data) => {
    let container = document.getElementById("video_suggestions");
    container.textContent = "";
    var dataArr = data.items;
    dataArr.forEach(element => {
        if (element.id.kind == "youtube#video") {
            var div = document.createElement("div");
            div.setAttribute("class", "video_suggestion_child")


            let thumbNailUrl = element.snippet.thumbnails.high.url;
            console.log(thumbNailUrl);

            var imgWrap = document.createElement("div")
            imgWrap.setAttribute("class", "thumbNail");
            imgWrap.style.backgroundImage = `url(${thumbNailUrl})`;

            var titleELe = document.createElement("p");
            titleELe.textContent = element.snippet.title;
            titleELe.style.color = "white";

            div.append(imgWrap, titleELe);
            div.onclick = () => {
                saveAndRedirect(element);
            }

            container.append(div);
        }

    });
}


// searchThis
let searchThis = () => {
    var searchterm = document.getElementById("searchBox").value;
    document.getElementById("video_suggestion_list").style.display = "block";
    getSearchData(searchterm);
}

// Get Search data
let getSearchData = async (searchterm) => {
    event.preventDefault();
    let apiKey = 'AIzaSyBCTU41Llw-Pn3ayHDlGWE6PhBOCPOAvCA';
    var url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchterm}&key=${apiKey}`;

    var unwrapped = await fetch(url);
    var data = await unwrapped.json();
    appendSearchData(data);
}

// showing suggestion list
let appendSearchData = (data) => {
    let container = document.getElementById("video_suggestion_list");
    container.textContent = "";
    var dataArr = data.items;
    dataArr.forEach(element => {
        if (element.id.kind == "youtube#video") {
            var div = document.createElement("div");
            div.addEventListener('click', () => {
                saveAndRedirect(element);
            });
            div.innerHTML = `<i class="bi bi-search"></i>`;

            var title = element.snippet.title;
            var cut = title.split(' ');
            var newtitle = cut.slice(0, 6).join(' ').replace(/[^\w\s]/gi, '');

            var titleELe = document.createElement("p");
            titleELe.textContent = newtitle;
            titleELe.style.textAlign = "left";

            div.append(titleELe);

            div.onclick = () => {
                saveAndRedirect(element);
            }

            container.append(div);
        }

    });
}

// Saving to localstorage and redirecting to VideoPage.html
let saveAndRedirect = (ele) => {
    localStorage.setItem("videoPage", JSON.stringify(ele));
    window.location.href = "videoPage.html";
}

// closing video suggestions onclik body
document.querySelector("body").addEventListener("click", function () {
    document.getElementById("video_suggestion_list").textContent = "";
    document.getElementById("video_suggestion_list").style.display = "none";
})