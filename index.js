// Getdata

let getData = async (searchterm) => {
    event.preventDefault();
    let apiKey = 'AIzaSyBCTU41Llw-Pn3ayHDlGWE6PhBOCPOAvCA';
    var url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchterm}&key=${apiKey}`;

    var unwrapped = await fetch(url);
    var data = await unwrapped.json();
    appendData(data);
}


// showing suggestion list
let appendData = (data) => {
    let container = document.getElementById("video_suggestion_list");
    container.textContent = "";
    var dataArr = data.items;
    dataArr.forEach(element => {
        if (element.id.kind == "youtube#video") {
            var div = document.createElement("div");

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

// searching
let searchThis = () => {
    var searchterm = document.getElementById("searchBox").value;
    document.getElementById("video_suggestion_list").style.display = "block";
    getData(searchterm);
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


// closing sidebar by clicking on #sidebar_switch
document.getElementById("sidebar_switch").addEventListener("click", function () {
    document.getElementById("sidebar").style.width = "5%";
    document.getElementById("sidebar_content").style.display = "none";
    document.getElementById("alt_sidebar_switch").style.display = "block";
    setTimeout(() => {
        document.getElementById("alt_sidebar_links").style.display = "flex";
        document.querySelector("nav").style.width = "95%";
        document.getElementById('all_content').style.width = "95%";
    }, 200);
});


document.getElementById("alt_sidebar_switch").addEventListener("click", function () {
    document.getElementById("sidebar").style.width = "15%";
    document.getElementById("alt_sidebar_switch").style.display = "none";
    document.getElementById('all_content').style.width = "85%";
    document.getElementById("alt_sidebar_links").style.display = "none";

    setTimeout(() => {
        document.querySelector("nav").style.width = "85%";
        document.getElementById("sidebar_content").style.display = "block";
    }, 500);
});

var videoGridArr = [
    {
        "kind": "youtube#searchResult",
        "etag": "uAnUgJ6rtodu3VKEjHciI7srQEw",
        "id": {
            "kind": "youtube#video",
            "videoId": "jAy6NJ_D5vU"
        },
        "snippet": {
            "publishedAt": "2015-03-10T14:25:36Z",
            "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
            "title": "Marvel&#39;s Daredevil | Official Trailer [HD] | Netflix",
            "description": "It's time to let the devil out. Marvel's Daredevil is here to clean up the streets of Hell's Kitchen, New York. Lawyer by day ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/jAy6NJ_D5vU/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/jAy6NJ_D5vU/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/jAy6NJ_D5vU/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Netflix",
            "liveBroadcastContent": "none",
            "publishTime": "2015-03-10T14:25:36Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "-9vc-l_YyXiMsrzNOW9GFbel2-Y",
        "id": {
            "kind": "youtube#video",
            "videoId": "n83s6NO1NE0"
        },
        "snippet": {
            "publishedAt": "2018-10-04T15:00:06Z",
            "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
            "title": "Marvel’s Daredevil: Season 3 | Official Trailer [HD] | Netflix",
            "description": "Missing for months, Matt Murdock (Charlie Cox) reemerges a broken man, putting into question his future as both vigilante ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/n83s6NO1NE0/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/n83s6NO1NE0/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/n83s6NO1NE0/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Netflix",
            "liveBroadcastContent": "none",
            "publishTime": "2018-10-04T15:00:06Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "vqnBjRyeN3wZQHGcFZHq7Q9hPlk",
        "id": {
            "kind": "youtube#video",
            "videoId": "lRUj_RBq_Uc"
        },
        "snippet": {
            "publishedAt": "2021-04-27T10:03:51Z",
            "channelId": "UCUinnqDgIsNFleLdkZKbP-w",
            "title": "Best MARVEL show ever made: Daredevil || Wandavision &amp; falcon winter soldier se bhi aacha",
            "description": "Instagram https://www.instagram.com/badal_bnftv Join our official telegram group - https://t.me/bnftv BNFTV - Entertainment, Fun, ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/lRUj_RBq_Uc/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/lRUj_RBq_Uc/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/lRUj_RBq_Uc/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "BnfTV",
            "liveBroadcastContent": "none",
            "publishTime": "2021-04-27T10:03:51Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "hmoKtDZMSZuwQxJ09m5jSIoR-aM",
        "id": {
            "kind": "youtube#video",
            "videoId": "B66feInucFY"
        },
        "snippet": {
            "publishedAt": "2015-04-16T17:00:02Z",
            "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
            "title": "Marvel&#39;s Daredevil | Hallway Fight Scene [HD] | Netflix",
            "description": "Daredevil will fight crime anywhere, anytime. The hunt for a kidnapped boy, and the criminals who took him, brings Matt Murdock ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/B66feInucFY/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/B66feInucFY/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/B66feInucFY/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Netflix",
            "liveBroadcastContent": "none",
            "publishTime": "2015-04-16T17:00:02Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "M2Qt4SApQ1AMzAmo-afScAsUlsY",
        "id": {
            "kind": "youtube#video",
            "videoId": "2Cn3DVV0LHY"
        },
        "snippet": {
            "publishedAt": "2016-02-25T13:30:00Z",
            "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
            "title": "Marvel&#39;s Daredevil - Season 2 | Official Trailer - Part 2 [HD] | Netflix",
            "description": "Just when Matt thinks he is bringing order back to the city, new forces are rising in Hell's Kitchen. Now the Man Without Fear must ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/2Cn3DVV0LHY/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/2Cn3DVV0LHY/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/2Cn3DVV0LHY/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Netflix",
            "liveBroadcastContent": "none",
            "publishTime": "2016-02-25T13:30:00Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "T5UiNSiwUpRzQapGVoxNi-zx16k",
        "id": {
            "kind": "youtube#video",
            "videoId": "pKp7KC3vo6E"
        },
        "snippet": {
            "publishedAt": "2022-01-30T09:32:57Z",
            "channelId": "UCno5QpokMONghaq04HKEWPA",
            "title": "Daredevil Movie Explained In Hindi/Urdu",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/pKp7KC3vo6E/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/pKp7KC3vo6E/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/pKp7KC3vo6E/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Bollywood Silver Screen",
            "liveBroadcastContent": "none",
            "publishTime": "2022-01-30T09:32:57Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "F5IfCa4BBRv1fcfu4SmzdqW3RJQ",
        "id": {
            "kind": "youtube#video",
            "videoId": "bPb1xba0ZA4"
        },
        "snippet": {
            "publishedAt": "2015-03-10T15:49:54Z",
            "channelId": "UCOL10n-as9dXO2qtjjFUQbQ",
            "title": "MARVEL&#39;S DAREDEVIL Trailer 2 German Deutsch (2015)",
            "description": "Offizieller \"Marvels Daredevil\" Trailer Deutsch German 2015 | Abonnieren ➤ http://abo.yt/kc | (OT: Daredevil) Movie #Trailer ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/bPb1xba0ZA4/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/bPb1xba0ZA4/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/bPb1xba0ZA4/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "KinoCheck",
            "liveBroadcastContent": "none",
            "publishTime": "2015-03-10T15:49:54Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "_kVu8vXZaEunk8EwCTXnCu2veAU",
        "id": {
            "kind": "youtube#video",
            "videoId": "wsEa_I3FZ-o"
        },
        "snippet": {
            "publishedAt": "2022-10-06T10:45:24Z",
            "channelId": "UCrQRHNQqN15pZXkVpvVQRIQ",
            "title": "SHE-HULK VS DAREDEVIL - FULL FIGHT (HD) || She-Hulk Episode 8 Best Scenes &amp; Ending Scene",
            "description": "'She-Hulk' Episode 8 review: It's Jennifer Walters vs Daredevil! Whatever way you look at it, 'She-Hulk' is a smashing success at ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/wsEa_I3FZ-o/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/wsEa_I3FZ-o/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/wsEa_I3FZ-o/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "All About Marvel",
            "liveBroadcastContent": "none",
            "publishTime": "2022-10-06T10:45:24Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "7A1cQC9pGudGaDlfbWizPPtgfZo",
        "id": {
            "kind": "youtube#video",
            "videoId": "8B_fI_AY_hI"
        },
        "snippet": {
            "publishedAt": "2015-04-13T16:32:01Z",
            "channelId": "UC09Enr-YRbBz03zMW-4tx8w",
            "title": "Marvel&#39;s Daredevil - Parkour",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/8B_fI_AY_hI/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/8B_fI_AY_hI/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/8B_fI_AY_hI/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Gin Ichimaru",
            "liveBroadcastContent": "none",
            "publishTime": "2015-04-13T16:32:01Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "MziFZcJzRww_AE7RrLlIXEQtfAI",
        "id": {
            "kind": "youtube#video",
            "videoId": "Zwk7jvQ8cXQ"
        },
        "snippet": {
            "publishedAt": "2015-04-16T17:00:01Z",
            "channelId": "UC5ZiUaIJ2b5dYBYGf5iEUrA",
            "title": "Marvel Daredevil / Escena de la pelea en el pasillo",
            "description": "Daredevil no se detendrá ante nada en su lucha contra el crimen. En la búsqueda de un niño secuestrado y de los criminales que ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/Zwk7jvQ8cXQ/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/Zwk7jvQ8cXQ/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/Zwk7jvQ8cXQ/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Netflix Latinoamérica",
            "liveBroadcastContent": "none",
            "publishTime": "2015-04-16T17:00:01Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "xOSCT0yrj4dB2GGP0oUAU8vLpj4",
        "id": {
            "kind": "youtube#video",
            "videoId": "8xIr-VJX110"
        },
        "snippet": {
            "publishedAt": "2022-12-18T20:00:02Z",
            "channelId": "UCvC4D8onUfXzvjTOM-dBfEA",
            "title": "Daredevil: The Protector Of Hell&#39;s Kitchen",
            "description": "Matt Murdock is a lawyer by day, and a Super Hero by night. Learn how Matt became Daredevil, founded The Defenders, and ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/8xIr-VJX110/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/8xIr-VJX110/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/8xIr-VJX110/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Marvel Entertainment",
            "liveBroadcastContent": "none",
            "publishTime": "2022-12-18T20:00:02Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "x9b5yMLy1UF7afjbA_BcnH8kRA4",
        "id": {
            "kind": "youtube#video",
            "videoId": "2QP_iO0l_AA"
        },
        "snippet": {
            "publishedAt": "2022-03-23T20:41:04Z",
            "channelId": "UCkRBmTHNrKc6CF6scF_y5kw",
            "title": "SPIDER-MAN: NO WAY HOME (2021) Daredevil Cameo Scene [HD] Charlie Cox",
            "description": "PLOT: For the first time in the cinematic history of Spider-Man, our friendly neighborhood hero is unmasked and no longer able to ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/2QP_iO0l_AA/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/2QP_iO0l_AA/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/2QP_iO0l_AA/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "JoBlo Superheroes",
            "liveBroadcastContent": "none",
            "publishTime": "2022-03-23T20:41:04Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "UCNzyUS4FYNfMtnAbmNreAz56-M",
        "id": {
            "kind": "youtube#video",
            "videoId": "FYUgjvHTlUg"
        },
        "snippet": {
            "publishedAt": "2015-03-10T14:30:01Z",
            "channelId": "UCLpLPhObMNbVBdSGf8XDIxQ",
            "title": "Marvel&#39;s Daredevil - Haupt-Trailer - Netflix - Deutsch [HD]",
            "description": "Matt Murdock ist als Kind erblindet, verfügt dafür jedoch über außergewöhnliche Sinneswahrnehmungen. Nun kämpft er gegen ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/FYUgjvHTlUg/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/FYUgjvHTlUg/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/FYUgjvHTlUg/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Netflix Nederland & België",
            "liveBroadcastContent": "none",
            "publishTime": "2015-03-10T14:30:01Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "swzY8JG7VCjH8NQJuaT6Nx2_Uhw",
        "id": {
            "kind": "youtube#video",
            "videoId": "v1jAjguH744"
        },
        "snippet": {
            "publishedAt": "2017-08-23T22:45:38Z",
            "channelId": "UCvr-gQj6E8rjBbMS-0qfMwA",
            "title": "Daredevil VS Iron Fist (The Defenders)",
            "description": "I thought this was a pretty good fight scene along with Luke Cage and Iron Fist's little brawl. Marvel's Netflix show: The Defenders ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/v1jAjguH744/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/v1jAjguH744/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/v1jAjguH744/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Everything Super",
            "liveBroadcastContent": "none",
            "publishTime": "2017-08-23T22:45:38Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "imoXcSWLWt5yYwHAmidSxm0_3HU",
        "id": {
            "kind": "youtube#video",
            "videoId": "bgRTJniHzW8"
        },
        "snippet": {
            "publishedAt": "2022-10-06T14:19:15Z",
            "channelId": "UChRynFGSpciMt_MtPC2IVbw",
            "title": "She-Hulk VS Daredevil | She-Hulk Episode 8",
            "description": "All credit goes to marvel #shehulk #daredevil.",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/bgRTJniHzW8/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/bgRTJniHzW8/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/bgRTJniHzW8/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "TheUniverseOfMarvel",
            "liveBroadcastContent": "none",
            "publishTime": "2022-10-06T14:19:15Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "-Ew4qGjx3153R5vo7wHzNSBhtHM",
        "id": {
            "kind": "youtube#video",
            "videoId": "8eJDZNfG0Hw"
        },
        "snippet": {
            "publishedAt": "2022-12-07T23:28:38Z",
            "channelId": "UCDiFRMQWpcp8_KD4vwIVicw",
            "title": "Daredevil Born Again 2024 First Look Breakdown and Marvel Easter Eggs",
            "description": "Daredevil Born Again 2024 First Look Teaser. Daredevil Born Again Episodes, Daredevil Joins The Avengers, Spider-Man 4, ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/8eJDZNfG0Hw/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/8eJDZNfG0Hw/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/8eJDZNfG0Hw/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Emergency Awesome",
            "liveBroadcastContent": "none",
            "publishTime": "2022-12-07T23:28:38Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "a-4ZR_zoQidZ_nW2_QwufRW1Ycs",
        "id": {
            "kind": "youtube#video",
            "videoId": "R8mZts7HjPA"
        },
        "snippet": {
            "publishedAt": "2022-10-06T15:14:14Z",
            "channelId": "UC7NgCfgXYLweSQ-Y2R8nHWA",
            "title": "All Daredevil Scenes 4K Ultra HD | SHE-HULK",
            "description": "Honestly Not as bad as I thought it was going to be Hope You Enjoyed Wanna Know How I Get My Footage : My Patreon ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/R8mZts7HjPA/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/R8mZts7HjPA/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/R8mZts7HjPA/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "XHBunny",
            "liveBroadcastContent": "none",
            "publishTime": "2022-10-06T15:14:14Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "2iPdODBGQcq2dsce-fGzguIw6PU",
        "id": {
            "kind": "youtube#video",
            "videoId": "lWV1g8MqLqo"
        },
        "snippet": {
            "publishedAt": "2021-12-15T15:17:59Z",
            "channelId": "UCMADTa2I09LMVKJhGgvfAlQ",
            "title": "Marvel’s Daredevil - Season 1, 2, 3 Review | Netflix TV Series",
            "description": "Daredevil Television Series Review in Hindi by Pratik Borade Daredevil Netflix TV Series Review Daredevil All Episodes Review ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/lWV1g8MqLqo/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/lWV1g8MqLqo/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/lWV1g8MqLqo/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Pratik's Film Theories",
            "liveBroadcastContent": "none",
            "publishTime": "2021-12-15T15:17:59Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "9Seskv7iiukifyDOwgu8zQDEPM8",
        "id": {
            "kind": "youtube#video",
            "videoId": "KFYFh8w4758"
        },
        "snippet": {
            "publishedAt": "2015-04-10T15:02:40Z",
            "channelId": "UCvC4D8onUfXzvjTOM-dBfEA",
            "title": "Marvel&#39;s Daredevil - Opening Titles - Now Streaming on Netflix",
            "description": "Watch the incredible opening title sequence to \"Marvel's Daredevil,\" and watch all episodes streaming now only on Netflix!",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/KFYFh8w4758/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/KFYFh8w4758/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/KFYFh8w4758/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Marvel Entertainment",
            "liveBroadcastContent": "none",
            "publishTime": "2015-04-10T15:02:40Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "eFutmZBtT1d0lj8A2BqrlHOsPXU",
        "id": {
            "kind": "youtube#video",
            "videoId": "3oPz4h3eeYs"
        },
        "snippet": {
            "publishedAt": "2022-04-25T16:52:30Z",
            "channelId": "UCIrgJInjLS2BhlHOMDW7v0g",
            "title": "Marvel&#39;s Daredevil, Charlie Cox | What&#39;s Up, Disney+",
            "description": "Marvel's Daredevil himself, Charlie Cox, talks about his experience playing Matt Murdock and what the character means to him.",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/3oPz4h3eeYs/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/3oPz4h3eeYs/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/3oPz4h3eeYs/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Disney Plus",
            "liveBroadcastContent": "none",
            "publishTime": "2022-04-25T16:52:30Z"
        }
    }
]

videoGridArr.forEach(video => {
    delete video.snippet.thumbnails.default.height;
    delete video.snippet.thumbnails.default.width;
    delete video.snippet.thumbnails.medium.height;
    delete video.snippet.thumbnails.medium.width;
    delete video.snippet.thumbnails.high.height;
    delete video.snippet.thumbnails.high.width;
});

console.log(videoGridArr);
let renderVideo = () => {
    document.getElementById("video_grid_id").textContent = "";
    videoGridArr.forEach(element => {
        if (element.id.kind == "youtube#video") {
            var card = document.createElement("div");
            card.style.width = "30%";
            card.style.height = "41vh";
            card.style.marginBottom = "10px";
            card.addEventListener('click', () => {
                saveAndRedirect(element);
            });

            var imgWrap = document.createElement("div")
            imgWrap.setAttribute("class", "thumbNail");

            card.appendChild(imgWrap);
            var icon_title = document.createElement("div");
            var icon = document.createElement("img");
            var icon_wrap = document.createElement("div");
            icon_wrap.setAttribute("class", "user_icon");

            icon_wrap.append(icon);
            var title = document.createElement("p");
            icon_title.append(icon_wrap, title);
            card.appendChild(icon_title);
            document.getElementById("video_grid_id").append(card);

            icon_title.style.display = "flex";
            icon_title.style.gap = "20px";
            icon_title.style.alignItems = "flex-start";

            icon.src = "https://lh3.googleusercontent.com/ogw/AOh-ky0OJgR59bJ6Cv6u3UPIgnqcZJrhkWEHY54JqzEM=s32-c-mo";

            console.log(element.snippet.title);
            title.textContent = element.snippet.title;
            let thumbNailUrl = element.snippet.thumbnails.high.url;
            console.log(thumbNailUrl);
            imgWrap.style.backgroundImage = `url(${thumbNailUrl})`;
        }
    })
};

renderVideo();