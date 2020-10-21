const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
    // Inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-27.222633",
        lng: "-49.6555874",
        name: "Lar dos meninos",
        about: "Prestar assistência a crianas de 06 a 15 anos que se encontram em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "998976627",
        images: [
            "https://images.unsplash.com/photo-1594753154778-273013529793?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/flagged/photo-1576042854593-1f6eebfcfb0c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha se sentir a vontade e traga muito amor e paciência para dar",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "0"
    })

    // Consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // Consultar somente 1 orfanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    console.log(orphanage)

    // Deletar dado da tabela de
    /*console.log(await db.run("DELETE FROM orphanages WHERE id = '3'"))*/
})