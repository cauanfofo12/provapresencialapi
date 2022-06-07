import {con}  from "./connection.js";


export async function inserirVilao(vilao ){
    const comando =
    `
    INSERT INTO tb_vilao (id_vilao, nm_vilao, ds_maldades, bt_super_poder)
    VALUES (?, ?, ?, ?)
    `

    const [resposta ] = await con.query(comando, [])
    vilao.id= resposta.insertId;

    return vilao;
}





