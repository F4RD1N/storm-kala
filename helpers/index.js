export const convertPrice = (price) => {
    // return rialToToman
    const rialToToman = price?.toString().slice(0, -1)
    const splitNumber = rialToToman?.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
    const englishToPersian = splitNumber?.replace(/\d/g, digit => '۰۱۲۳۴۵۶۷۸۹'[digit])
    return englishToPersian
}


export const englishToPersian = number => number?.toString().replace(/\d/g, digit => '۰۱۲۳۴۵۶۷۸۹'[digit])