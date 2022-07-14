import Api from './api';

export const getTableList = async(table) =>{
    try{
        const res = await Api.get(table);
        return res;
    }
    catch(err){
        console.error(err);
    }
};

export const createTable = async(table,data) =>{
    try{
        const res = await Api.post(table,data);
        return res;
    }
    catch(err){
        console.log("Añadir señal de error")
        console.error(err);
    }
}

export const deleteTable = async(table,id) =>{
    try{
        const res = await Api.delete(table+'/'+id);
        return res;
    }
    catch(err){
        console.error(err);
    }
}