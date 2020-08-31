const getId = id => document.getElementById(id);
const getSel = sel => document.querySelector(sel);

let url = 'http://localhost:3000/results';

let limit = 8;
let limitPopular = 8;
let limitNewest = 8;


///////all films
getId('all').onclick = function () {
    getId('section').innerHTML = '';
    getId('more').value = 'all';
    getData('', 'all');

    console.log(getId('more').value);
    getId('more').style.display = 'none';
}

////////popular
getId('popular').onclick = function () {
    getId('more').style.display = 'block';
    getId('section').innerHTML = '';
    getId('more').value = 'popular';
    getData(`_sort=popularity&_order=desc&_limit=${limitPopular}`, limitPopular);
    console.log(getId('more').value);
}

//////////newest
getId('newest').onclick = function () {
    getId('more').style.display = 'block';
    getId('section').innerHTML = '';
    getId('more').value = 'newest';
    getData(`_sort=release_date&_order=desc&_limit=${limitNewest}`, limitNewest);
    console.log(getId('more').value);
}

//////////// more button
getId('more').onclick = function () {
    getId('section').innerHTML = '';
    if (this.value == 'popular') {
        limitPopular += 8;
        //кидати не в парс, а в трансформ
        getData(`_sort=popularity&_order=desc&_limit=${limitPopular}`, limitPopular);
    } else if (this.value == 'newest') {
        limitNewest += 8;
        getData(`_sort=release_date&_order=desc&_limit=${limitNewest}`, limitNewest);
    } else if (this.value == 'start') {
        limit += 8;
        getData(`_limit=${limit}`, limit);
    }

}