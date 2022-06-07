import { con } from './connection.'



export async function inserir(vilao) {
    const comando =
    `
    tb_vilao (id_vilao, nm_vilao, ds_maldades, bt_super_poder)
    values (?, ?, ?, ?);
    `

    const [resposta] = await con.query(comando, )

}

