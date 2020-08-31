window.onload = getData('_limit=8', limit);
window.onload = getId('more').value = 'start';
let alphabet = ['а', 'б', 'в', 'г', 'ґ', 'д', 'е', 'є', 'ж', 'з', 'и', 'і', 'ї', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ю', 'я']
let alphabetBoolean = false;
let dataStorage;

function searchInput() {
    let name = getId('inputText').value;
    getId('more').style.display = 'none';
    getId('inputText').value = '';
    getData2(name);
    closeBackGray();
}

function getData(param, limСategory) {
    const xml = new XMLHttpRequest();
    xml.open('GET', `http://localhost:3000/results?${param}`);
    xml.onreadystatechange = function () {
        if (xml.readyState === 4 && xml.status === 200) {
            parseData(xml.responseText, limСategory);
        }
    }
    xml.send();
}

function getData2(name) {
    const xml = new XMLHttpRequest();
    xml.open('GET', `http://localhost:3000/results?`);
    xml.onreadystatechange = function () {
        if (xml.readyState === 4 && xml.status === 200) {
            parseData2(xml.responseText, name);
        }
    }
    xml.send();
}

function parseData(dataJSON, limСategory) {
    data = JSON.parse(dataJSON);
    limСategory == 'all' ? makePorsers(data.length) : makePorsers(limСategory);
    return data;
}

function parseData2(dataJSON, name) {
    dataAll = JSON.parse(dataJSON);
    dataStorage = dataAll;
    transform(dataAll, name)
}

function makePorsers(limСategory) {
    for (let i = 0; i < limСategory; i++) {
        let div = document.createElement('div');
        div.className = "card";
        if (data[i] == undefined) {
            getId('more').style.display = 'none';
        }
        div.innerHTML = `
        <span class='detailSpan' id='detailsId${i}' value='${data[i].id}'></span>
        <div class='poster' id="postId${i}"></div>
        <div class='title' id="nameId${i}"></div>
        <div class='year' id="yearId${i}"></div>
        <span class='voteSpan'>${data[i].vote_average}</span>
         `;
        getId('section').append(div);
        getId(`postId${i}`).style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${data[i].poster_path})`;
        getId(`nameId${i}`).innerText = data[i].title;
        getId(`yearId${i}`).innerText += data[i].release_date;
    }
}
//////// make alphabet table
function makeAlphabet() {
    if (alphabetBoolean == false) {

        getSel('.alphabetBox').style.display = 'grid';
        getSel('.outGray').style.display = 'block';
        for (let i = 0; i < alphabet.length; i++) {
            let div = document.createElement('p');
            div.className = "Box";
            div.innerHTML = `${alphabet[i]}`;

            getSel('.alphabetBox').append(div);
            alphabetBoolean = true;
        }
    } else {
        closeAlphabet();
    }
}

///// make film blocks from data2
function transform(dataAll, name) {
    if (!name) {
        return value;
    }
    if (!dataAll) {
        return [];
    }
    let dataSearch = dataAll.filter(dataAll => dataAll.title.toLowerCase().indexOf(name.toLowerCase()) !== -1);
    getId('section').innerHTML = '';

    for (let i = 0; i < dataSearch.length; i++) {
        let div = document.createElement('div');
        div.className = "card";
        div.innerHTML = `
        <span class='detailSpan2' id='detailsId${i}' value='${dataSearch[i].id}'></span>
        <div class='poster' id="postId${i}"></div>
        <div class='title' id="nameId${i}"></div>
        <div class='year' id="yearId${i}"></div>
        <span class='voteSpan'>${dataSearch[i].vote_average}</span>
         `;
        getId('section').append(div);
        getId(`postId${i}`).style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${dataSearch[i].poster_path})`;
        getId(`nameId${i}`).innerText = dataSearch[i].title;
        getId(`yearId${i}`).innerText += dataSearch[i].release_date;
    }

}