// getElementsByClassName() returns Html collections. So that we can not directly add addEventListener() to the html collection. 
// getElementsById() returns an element
// querySelector() returns the first element
// querySelectorAll() returns node collections
const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');

imgBox.addEventListener('dragstart', (e) => {
    console.log("dragstart");
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);
});

imgBox.addEventListener('dragend', (e) => {
    console.log("dragend");
    e.target.className = "imgBox";
});

for (let whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover', (e) => {
        // we cant by default drop. so that, we have to add e.preventDefault(); to the 'dragover'
        e.preventDefault();
        console.log('dragover');
    });

    whiteBox.addEventListener('dragenter', (e) => {
        console.log('dragenter');
        e.target.className += ' dashed';
    });

    whiteBox.addEventListener('dragleave', (e) => {
        console.log('dragleave');
        e.target.className = 'whiteBox';
    });

    whiteBox.addEventListener('drop', (e) => {
        console.log('drop');
        e.target.append(imgBox);
        e.target.className = 'whiteBox';
    });
}