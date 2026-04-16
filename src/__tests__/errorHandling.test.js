jest.mock('../http.js');

import {getLevel} from "../errorHandling.js";
import fetchData from "../http.js";

test('проверка на статус ОК', () => {
    fetchData.mockReturnValue({status: 'ok', level: 5});

    const result = getLevel(1);

    expect(result).toBe(`Ваш текущий уровень: 5`)
})

test('проверка на статус error', () => {
    fetchData.mockReturnValue({status: 'error'});

    const result = getLevel(1);

    expect(result).toBe(`Информация об уровне временно недоступна`)
})
