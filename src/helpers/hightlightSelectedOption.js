export default function hightlightSelectedOption(elements, condition, comparison, selectedColor, unselectedColor){
    elements.map(e=>
            e[condition].toLowerCase()===comparison.toLowerCase()
            ?e.style.backgroundColor=selectedColor
            :e.style.backgroundColor=unselectedColor||'transparent')
}

// This function is used to highlight the selected option in a given list
// Parameters:
// elements: array of HTML elements to be highlighted
// condition: the condition to check if the option is selected
// selectedColor: the color of the selected option
// unselectedColor: the color of the unselected option

