export default function priceFormat(num){
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}