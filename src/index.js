export default function correctNumber (number) {
    const arr = number.match(/(\+?)(\d{1,2})(-*)([ (]*)(\d{3})([ )]*)(-*)(\d{3})([ -]*)(\d{2,4})([ -]*)(\d{0,2})/);
    let result = '';
    if (arr[1]) {
        result = '+' + arr[2] + arr[5] + arr[8] + arr[10] + arr[12];
    } else {
        result = '+7' + arr[5] + arr[8] + arr[10] + arr[12];
    }
    return result;
}
