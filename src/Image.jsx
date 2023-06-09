import React, {useState} from 'react';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";



const Image = () => {
    const [selectedDocs, setSelectedDocs] = useState([]);
  ////upload file
//   const [fileI , setFileI] = useState();
//   const upload = (e)=>{
//     setFileI(e.target.files[0]);
   // console.log(e.targe.files[0]);
  
  //}
 // console.log(fileI);

//   const docs = [
//     { uri: window.URL.createObjectURL(fileI) },
//   ];
  //console.log(doc,'doc');

 
//   const handleUpload =()=>{


//   }


  return (<>
    {/* <input type='file' name='file' onChange={upload}/>
    <DocViewer  pluginRenderers={DocViewerRenderers} documents={docs}/> */}
    
    <input
        type="file"
        accept=".pdf"
        multiple
        onChange={(el) =>
          el.target.files?.length &&
          setSelectedDocs(Array.from(el.target.files))
        }
      />
      <DocViewer
        documents={selectedDocs.map((file) => ({
          uri: window.URL.createObjectURL(file),
          fileName: file.name,
        }))}
        pluginRenderers={DocViewerRenderers}
      />
    </>
  )
}

export default Image