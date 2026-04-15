import sortingHeroHealth from "../heroHealthSorting.js";

const persons = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
];


const person = [
    {name: 'мечник', health: 10},
]

const arrEmpty = [];

test('Отсортировали массив объектов(персонажей) по свойству health по убыванию', () => {
    const result = sortingHeroHealth(persons);
    expect(result).toEqual(
        [
            {name: 'маг', health: 100},
            {name: 'лучник', health: 80},
            {name: 'мечник', health: 10},
        ]
    )
})

test("Проверка на пустой массив", () => {
    const result = sortingHeroHealth(arrEmpty);
    expect(result).toEqual([])
})

test('Вывели без сортировки объект в массиве если длина массива 1', () => {
    const result = sortingHeroHealth(person);
    expect(result).toEqual(
        [
            {name: 'мечник', health: 10}
        ]
    )
})

test('Проверяем что исходный массив не изменяется', () => {
    const copyPersons = persons.slice();
    sortingHeroHealth(persons)
    expect(persons).toEqual(copyPersons);
})
