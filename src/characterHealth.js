const changeCharactersHealth = (personage) => {
    if (personage.health > 50) {
        return 'healthy'
    }

    if (personage.health <= 50 && personage.health >= 15) {
        return 'wounded'
    }

    if (personage.health < 15) {
        return 'critical'
    }

    return undefined;

};

export default changeCharactersHealth ;
