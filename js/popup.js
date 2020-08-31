////////// listener -> about + alphabet
document.addEventListener('click', function (e) {
    let i = 0;

    if (e.target.classList.contains('Box')) {
        let IMvalue = e.target.innerText;
        getData2(IMvalue);
        closeBackGray();
        getId('more').style.display = 'none';
    } else if (e.target.classList.contains('detailSpan')) {

        let IMvalue = e.target.getAttribute("value");
            while (data[i].id != IMvalue) {
                i++;
            }
                getId('picture').style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${data[i].poster_path})`;
                getId('boxName').innerText = data[i].title;
                getId('info').innerText = 'Середній бал: ' + data[i].vote_average + ' Усього голосів: ' + data[i].vote_count;
                getId('review').innerText = data[i].overview;
                getId('releaseDate').innerText = 'Дата виходу: ' + data[i].release_date;
                getId('adultRating').innerText = data[i].adult ? 'Віковий рейтинг: 6+' : 'Віковий рейтинг: 16+';
                    for (let index = 0; index < data[i].adult.length; index++) {
                        getId('adultRating').innerText += '   ' + data[i].adult[index] + ': ' + data[i].adult[index].Value;
                    }
                        getId('detailsBlock').style.display = 'grid';
                        getId('outGray').style.display = 'block';

    } else if (e.target.classList.contains('detailSpan2')) {

        let IMvalue = e.target.getAttribute("value");
        while (dataAll[i].id != IMvalue) {
            i++;
        }

            getId('picture').style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${dataAll[i].poster_path})`;
            getId('boxName').innerText = dataAll[i].title;
            getId('info').innerText = 'Середній бал: ' + dataAll[i].vote_average + ' Усього голосів: ' + dataAll[i].vote_count;
            getId('review').innerText = dataAll[i].overview;
            getId('releaseDate').innerText = 'Дата виходу: ' + dataAll[i].release_date;
            getId('adultRating').innerText = dataAll[i].adult ? 'Віковий рейтинг: 6+' : 'Віковий рейтинг: 16+';

                for (let index = 0; index < dataAll[i].adult.length; index++) {
                    getId('adultRating').innerText += '   ' + dataAll[i].adult[index] + ': ' + dataAll[i].adult[index].Value;
                }

                    getId('detailsBlock').style.display = 'grid';
                    getId('outGray').style.display = 'block';

    }
});

//// press 'enter' 
getId('inputText').addEventListener('keydown', function (e) {
    if (e.keyCode == 13) {
        searchInput();
    }
});

////// close search
getId('search').onclick = function () {
    getSel('.outGray').style.display = 'block';
    getSel('.searchModal').style.display = 'block';
}

getId('alpha').onclick = makeAlphabet;

////// close details popup
getId('outGray').onclick = closeBackGray;

function closeBackGray() {
    getId('outGray').style.display = 'none';
    getSel('.searchModal').style.display = 'none';
    getId('detailsBlock').style.display = 'none';
    closeAlphabet();
}
////// close alphabet popup
function closeAlphabet() {
    getSel('.alphabetBox').style.display = 'none';
    getSel('.alphabetBox').innerHTML = '';
    alphabetBoolean = false;
}