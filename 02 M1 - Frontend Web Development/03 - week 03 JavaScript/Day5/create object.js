let person = {
    name: 'Usisipho',
    surname: 'Mnxinwa',
    favoriteTeam: 'Chelsea',
    favoriteColor: 'black',
    favorites : function(){
        return this.favoriteTeam + ' ' + this.favoriteColor;

    }

}

console.log(person.favorites());
