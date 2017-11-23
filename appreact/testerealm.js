var exports = module.exports ={};


    exports.testeInserts = function(numInserts){
        const Realm = require('realm');
        const now = require("performance-now");

        class tabela1 {}
        tabela1.schema ={
            name: 'tabela1',
            primaryKey: 'id',
            properties: {
                id: 'int',
                a: 'string',
                b: 'string',
                c: 'string',
                d: 'string',
                e: 'string',
                f: 'string',
                g: 'string',
                h: 'string',
                i: 'string',
                j: 'string',
                k: 'string',
                l: 'string',
                m: 'string',
                n: 'string',
                o: 'string',
                p: 'string',
                q: 'string',
                r: 'string',
                s: 'string',
                t: 'string',
                u: 'string',
                v: 'string',
                x: 'string',
                w: 'string',
                y: 'string',
                z: 'string',
            }
        };
        let realm = new Realm({schema: [tabela1]});
        var start = now();
        realm.write(() => {
            for(i = 1; i <= numInserts; i++){
                realm.create('tabela1', {id: i, a: 'teste', b: 'teste', c: 'teste', d: 'teste', e: 'teste', f: 'teste', g: 'teste'
            , h: 'teste', i: 'teste', j: 'teste', k: 'teste', l: 'teste', m: 'teste', n: 'teste', o: 'teste', p: 'teste', q: 'teste'
        , r: 'teste', s: 'teste', t: 'teste', u: 'teste', v: 'teste', x: 'teste', w: 'teste', y: 'teste', z: 'teste'});
            }
        });
        var end = now();
        let r = realm.objects('tabela1').filtered('a = "teste"');
        alert('inicio: ' + start + '\nfim: ' + end + '\ndiferenca: ' + (end - start) + '\nqtde dados' + r.length);

        realm.write(() => {
            let aux = realm.objects('tabela1');
            realm.delete(aux);
        })
};