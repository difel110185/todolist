function pigLatinize(string) {
    const words = string.split(' ');

    const pigLatinizedWords = words.map( (word, index) => {
        let stringToBePigLatinized = word;

        const vowels = ['a', 'e', 'i', 'o', 'u'];
        if (!vowels.includes(word.charAt(0)))
            stringToBePigLatinized = word.substring(1) + word.charAt(0);

        return stringToBePigLatinized + 'ay';
    });

    return pigLatinizedWords.join(' ');
}


export default pigLatinize
