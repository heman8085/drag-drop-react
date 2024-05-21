import { createContext,useState } from "react";
const DragdropContext = createContext();

const DragdropProvider = ({ children }) => {
    
     const [boxA, setBoxA] = useState([
       { id: "1", content: "content 1" },
       { id: "2", content: "content 2" },
       { id: "3", content: "content 3" },
     ]);
     const [boxB, setBoxB] = useState([]);

     const onDragStart = (e, item, action) => {
       e.dataTransfer.setData("item", JSON.stringify(item));
       e.dataTransfer.setData("action", action);
     };

     const onDrop = (e) => {
       const item = JSON.parse(e.dataTransfer.getData("item"));
       const action = e.dataTransfer.getData("action");

       if (action === "droppableA") {
         setBoxA((prevItems) => prevItems.filter((i) => i.id !== item.id));
         setBoxB((prevItems) => [...prevItems, item]);

         console.log(`moved ${item.content} from boxA to boxB`);
       } else {
         setBoxB((prevItems) => prevItems.filter((i) => i.id !== item.id));
         setBoxA((prevItems) => [...prevItems, item]);

         console.log(`moved ${item.content} from boxB to boxA`);
       }
    };
    
    return (
        <DragdropContext.Provider value={{boxA,boxB,onDragStart,onDrop}}>
            {children}
       </DragdropContext.Provider> 
    )
}

export {DragdropContext, DragdropProvider}