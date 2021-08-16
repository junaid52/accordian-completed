function starterFunc() {
    // selecting dom elements
const plusIconsNodeList = document.querySelectorAll('.plus-icon');
const plusIconsArrayList = Array.from(plusIconsNodeList);
const minusIconsNodeList = document.querySelectorAll('.minus-icon');
const minusIconsArrayList = Array.from(minusIconsNodeList);
const paragraphNodeList = document.querySelectorAll('.paragraph');
const paragraphArrayList = Array.from(paragraphNodeList);
    // hiding elements
paragraphArrayList.forEach(function(paragraph) {
    paragraph.style.display = 'none';
})
minusIconsArrayList.forEach(function (minusIcon) {
    minusIcon.style.display = 'none';
})
  // handling toggle icons
function toggleIcons(iconName, element, elementIndex) {
    if(iconName === 'plusIcon') {
        element.style.display = 'none';
        minusIconsArrayList[elementIndex].style.display = 'block';
    }
    if(iconName === 'minusIcon') {
        element.style.display = 'none';
        plusIconsArrayList[elementIndex].style.display = 'block';
    }
}
// handling paragraphElements
function toggleParagraphElements(elementIndex) {
    const paragraphElement = paragraphArrayList[elementIndex];
        if(paragraphElement.style.display === 'block') {
            paragraphElement.style.display = 'none';

        }
        else {
        paragraphArrayList.forEach((paragraph, index) => {
            if(paragraph.style.display === 'block') {
                paragraph.style.display = 'none';
                minusIconsArrayList[index].style.display = 'none';
                plusIconsArrayList[index].style.display = 'block';
            }
            
        })
        paragraphElement.style.display = 'block';
    }
}
// main function
function mainFunc(iconName, iconsArrayList) {
        const element = this;
        const elementIndex = iconsArrayList.indexOf(element);
        toggleIcons(iconName, element, elementIndex);
        toggleParagraphElements(elementIndex);
        
}
// attacing eventlisteners
plusIconsArrayList.forEach(function(icon) { 
    icon.addEventListener('click',  mainFunc.bind(icon, 'plusIcon', plusIconsArrayList));
});
minusIconsArrayList.forEach(function(icon) {
    icon.addEventListener('click', mainFunc.bind(icon, 'minusIcon', minusIconsArrayList));
});
}

starterFunc();