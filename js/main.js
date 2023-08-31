const showMoreButton = document.querySelector('#showMore');
const grid = document.querySelector('.realisations-grid');
const container = document.querySelector('.realisations-container');
const overlay = document.querySelector('.overlay');
const footerYear = document.querySelector('.footer__year');
const masonry = new Masonry(grid, {
	itemSelector: '.realisations-item',
	columnWidth: 451,
	gutter: 43,
	fitWidth: true,
});
showMoreButton.addEventListener('click', () => {
	for (let i = 0; i < 10; i++) {
		const item = document.createElement('div');
		item.classList.add('realisations-item');
		item.innerHTML = `<img class="" src="img/${i}.png" alt="" />`;
		grid.appendChild(item);
		masonry.appended(item);
		masonry.layout();
	}
	if (
		container.classList.contains('expanded') &&
		overlay.classList.contains('expanded')
	) {
		container.classList.remove('expanded');
		overlay.classList.remove('expanded');
	} else {
		container.classList.add('expanded');
		overlay.classList.add('expanded');
	}
});
const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();
