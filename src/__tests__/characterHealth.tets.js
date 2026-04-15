import changeCharactersHealth from '../characterHealth.js'
const personHealthy = {
    name: 'Маг',
    health: 90
};

const personWounded = {
    name: 'Маг',
    health: 45
};
const personCritical = {
    name: 'Маг',
    health: 14
};

const personOnFifty = {
    name: 'Маг',
    health: 50
};

const personOnFifteen = {
    name: 'Маг',
    health: 15
};

const emptyObject = {};
test('Проверяем зеленую полоску здоровья персонажа', () => {
    const result = changeCharactersHealth(personHealthy);
   expect(result).toBe('healthy')
});

test('Проверяем желтую полоску здоровья персонажа', () => {
    const result = changeCharactersHealth(personWounded);
    expect(result).toBe('wounded')
});

test('Проверяем желтую полоску здоровья персонажа на значение при 50', () => {
    const result = changeCharactersHealth(personOnFifty);
    expect(result).toBe('wounded')
});

test('Проверяем желтую полоску здоровья персонажа на значение при 15', () => {
    const result = changeCharactersHealth(personOnFifteen);
    expect(result).toBe('wounded')
});

test('Проверяем красную полоску здоровья персонажа', () => {
    const result = changeCharactersHealth(personCritical);
    expect(result).toBe('critical')
});

test('Проверяем на пустой объект', () => {
    const result = changeCharactersHealth(emptyObject);
    expect(result).toBeUndefined()
});
