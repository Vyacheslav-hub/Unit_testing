const sortingHeroHealth = (arr) => {
    const sortPersons = arr.slice();

    sortPersons.sort((a, b) => b.health - a.health );

    return sortPersons;
}

export default sortingHeroHealth;
