const express = require('express')
const api = (req,res)=>{
    res.json({
        API:'Node JS in instance AWS',
        Autor:'Dev Anisio Aleixo',
        Date: '03/08/2021',
        obs:'Aplicação de teste'
    })
}
module.exports = {
    api
}