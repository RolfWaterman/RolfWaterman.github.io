function updateClock() {
    const now = new Date();
    const days = String(now.getDate()).padStart(2, '0');
    const months = String(now.getMonth()+1).padStart(2, '0');
    const years = String(now.getFullYear()).padStart(4, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');


    document.getElementById('clock_digital_date').textContent = getDigitalDate(days, months, years, hours, minutes, seconds);
    document.getElementById('clock_digital_time').textContent = getDigitalTime(days, months, years, hours, minutes, seconds);

    // romain
    document.getElementById('clock_romain_date').textContent = getRomanDate(days, months, years, hours, minutes, seconds);
    document.getElementById('clock_romain_time').textContent = getRomanTime(days, months, years, hours, minutes, seconds);

    // morse
    document.getElementById('clock_morse_date').textContent = getMorseDate(days, months, years, hours, minutes, seconds);
    document.getElementById('clock_morse_time').textContent = getMorseTime(days, months, years, hours, minutes, seconds);
}

function getDigitalDate(days, months, years, hours, minutes, seconds) {
    return `${days}-${months}-${years}`;
}

function getDigitalTime(days, months, years, hours, minutes, seconds) {
    return `${hours}:${minutes}:${seconds}`;
}

function getRomanDate(days, months, years, hours, minutes, seconds) {
    return `${toRomanNumber(days)}-${toRomanNumber(months)}-${toRomanNumber(years)}`;
}

function getRomanTime(days, months, years, hours, minutes, seconds) {
    return `${toRomanNumber(hours)}:${toRomanNumber(minutes)}:${toRomanNumber(seconds)}`;
}

function getMorseDate(days, months, years, hours, minutes, seconds) {
    return `${toMorseNumber(days)}-${toMorseNumber(months)}-${toMorseNumber(years)}`;
}

function getMorseTime(days, months, years, hours, minutes, seconds) {
    return `${toMorseNumber(hours)}:${toMorseNumber(minutes)}:${toMorseNumber(seconds)}`;
}

function toRomanNumber(value) {
    if (value <= 0 || value >= 4000) {
        return "waarde moet groter dan 0 en kleiner dan 4000 zijn.";
    }

    const romanNumerals = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ];

    let result = '';

    for (const { value: numValue, numeral } of romanNumerals) {
        while (value >= numValue) {
            result += numeral;
            value -= numValue;
        }
    }

    return result;
}

function toMorseNumber(value) {
    const morseCode = [
        "-----", // 0
        ".----", // 1
        "..---", // 2
        "...--", // 3
        "....-", // 4
        ".....", // 5
        "-....", // 6
        "--...", // 7
        "---..", // 8
        "----."  // 9
    ];

    let result = '';
    const numbers = value.toString();

    for (const number of numbers) {
        const digit = parseInt(number, 10);
        result += `${morseCode[digit]} `;
    }

    return result.trim();
}

setInterval(updateClock, 1000);
updateClock(); // Initial call to display clock immediately
