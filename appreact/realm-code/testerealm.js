var exports = module.exports ={};


    exports.criarBanco = function(){
        const Realm = require('realm');

        class Person {}
        Person.schema = {
            name: 'Person',
            primaryKey: 'name',
            properties: {
                name: 'string',
                age: {type: 'int', default: 0},
            },
        };

        const realm = new Realm({schema: [Person]});

        // Write
        realm.write(() => {
            savedPerson = realm.create('Person', {
                name: 'Hal Incandenza',
                age: 17,
            });
        })

        let people = realm.objects('Person', 'age >= 17');
        return people.length;
    }