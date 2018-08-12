export default {
    priceWithComma(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    readMore(text, length, suffix) {
        let words = '';
        text.length > length ? words = text.substring(0, length) + suffix: words = text
        return words
    },
    toUssd(value) {
        return "$ " + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}
