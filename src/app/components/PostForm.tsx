import { useState, ChangeEvent } from "react";

type Props = {
    onAdd: (title: string, body: string) => void;
}

export const PostForm = ({ onAdd }: Props) => {

    const [addTitleText, setAddTitleText] = useState('');
    const [addBodyText, setAddBodyText] = useState('');
    
    const hundleAddTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAddTitleText(e.target.value);
      }
      const hundleAddBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setAddBodyText(e.target.value);
      }
      const hundleAddClick = () => {
        if (addTitleText && addBodyText) {
            onAdd(addTitleText, addBodyText);
        }else {
            alert("Preencha todos os campos");
        }
      } 

    return (
        <fieldset className="border-2 mb-3 p-3">
            <legend>Adicionar novo post</legend>
            <input onChange={hundleAddTitleChange} value={addTitleText} className="block border" type="text" placeholder="Digite um título"/>
            <textarea onChange={hundleAddBodyChange} value={addBodyText} className="block border"></textarea>
            <button className="block border" onClick={hundleAddClick}>Adicionar</button>
        </fieldset>
    );
}