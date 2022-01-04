module.exports = function toReadable(number) {
    let hundredName;
    let tenName;
    let oneName;

    let arrTensNames = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let arr10_19Names = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arrOnesNames = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    let numStr = String(number);
    let countDigits = numStr.length;

    hundredName = countDigits == 3 ? arrOnesNames[Number(numStr[countDigits-3])] + ' hundred' : '';
    hundredName += hundredName !== '' && (numStr[countDigits-2] !== '0' || numStr[countDigits-1] !== '0') ? ' ' : '';

    tenName = countDigits > 1 && numStr[countDigits-2] !== '0' && numStr[countDigits-2] !== '1' ? arrTensNames[Number(numStr[countDigits-2])] : '';
    tenName += tenName !== '' && numStr[countDigits-1] !== '0' ? ' ' : '';

    oneName = (tenName !== '' && numStr[countDigits-1] !== '0') ? arrOnesNames[Number(numStr[countDigits-1])] : '';
    oneName += (countDigits == 1) || (countDigits == 3 && numStr[countDigits-2] === '0' && numStr[countDigits-1] !== '0') ? arrOnesNames[Number(numStr[countDigits-1])] : '';
    oneName += (countDigits == 2 && number > 9 && number < 20) || (countDigits > 2 && numStr[countDigits-2] === '1') ? arr10_19Names[Number(numStr[countDigits-1])] : '';


    return hundredName + tenName + oneName;
}
