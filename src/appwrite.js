/*const projectid=import.meta.env.VITE_APPWRITE_PROJECT_ID;
const databaseid=import.meta.env.VITE_APPWRITE_DATABASE_ID;
const tableid=import.meta.env.VITE_APPWRITE_TABLE_ID;

const client=new Client()
.setEndpoint('https://cloud.appwrite.io/v1')
.setProject(projectid)

const database=new Databases(client);
export const updatesearch=async(sterm,movie)=>{
    try{
const result =await database.listDocuments(databaseid,tableid,queries:[Query.equal(attribute:'sterm',sterm),])

if(result.documents.length>0){
    const doc=result.documents[0];
    await database.updateDocument(databaseid,tableid,doc.$id,data:{
        count:doc.count+1,
    })
}else{
    await database.createDocument(databaseid,tableid,ID.unique(),data:{
        searchedterm,
        count:1,
        movieid:movie.id,
        postureurl:`https://image.tmbd.org/t/p/w500${movie.poster_path}`,
    })
}
    }catch(error){
        console.log(error);
    }
}*/