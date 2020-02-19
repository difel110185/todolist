import pigLatinize from './pigLatinize'

test('If the word starts with a vowel, just add ay to the end', () => {
    expect(pigLatinize('in')).toBe('inay')
    expect(pigLatinize('after')).toBe('afteray')
});

test('If a word starts with a consonant, remove the first letter of the word and append it to the end of the word. Then add ay to the end of the word.', () => {
    expect(pigLatinize('testing')).toBe('estingtay')
    expect(pigLatinize('react')).toBe('eactray')
});

test('It more than one word is given, all words must be pig-latinized', () => {
    expect(pigLatinize('testing in react is fun')).toBe('estingtay inay eactray isay unfay')
});
