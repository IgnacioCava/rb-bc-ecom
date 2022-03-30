export default function hightlightSelectedOption(classname, condition, comparison, selectedColor, unselectedColor){
    Array.from(document.getElementsByClassName(classname))
        .map(e=>
            e[condition].toLowerCase()===comparison.toLowerCase()
            ?e.style.backgroundColor=selectedColor
            :e.style.backgroundColor=unselectedColor||'transparent')
}

// This function is used to highlight the selected option in a given list
// Parameters:
// classname: the classname of the options
// condition: the condition to check if the option is selected
// selectedColor: the color of the selected option
// unselectedColor: the color of the unselected option

