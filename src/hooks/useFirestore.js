import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    projectFirestore.collection("products").get().then( 
        function (querySnapshot){
            let documents = [];

            querySnapshot.forEach(function (doc){
                if(doc.exists){
                    console.log("useFirestore: "  + doc.id);
                    documents.push({...doc.data(), id: doc.id});
                }else{
                    console.log("no such data");
                }
            })
            setDocs(documents);
        }
    )
    .catch(function(error) {
    console.log("Error getting document:", error);
    });

  }, []);

  return { docs };
}

export default useFirestore;