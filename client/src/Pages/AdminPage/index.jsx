import React, { useState, useEffect } from "react";
import Global from "../../GlobalStyle/Global";

import {
  Container,
  ContainerForm,
  Field,
  Form,
  InputText,
  Label,
  Select,
  ButtonSection,
  ModalSection,
  LabelChecked, 
  InputChecked, 
  Switch,
  PreviewMessage,
} from "./styles";
import Navbar from "../../Components/Navbar";
import {
  addDoc,
  collection,
  doc,
  deleteDoc,
  onSnapshot,
  orderBy,
  query,
  deleteField,
} from "firebase/firestore";
import { db } from "../../services/firebaseConnection";
import { toast } from "react-toastify";

export const AdminPage = () => {
  const [change, setChange] = useState(false);  
  const [equipments, setEquipments] = useState("");
  const [situation, setSituation] = useState({});
  const [equipmentsModal, setEquipmentsModal] = useState([]);
  const [pres, setPres] = useState([]);

  useEffect(() => {
    const equipmentsRef = collection(db, "Equipamentos");
    const queryRef = query(equipmentsRef, orderBy("created", "asc"));

    const unsub = onSnapshot(queryRef, (snapshot) => {
      let list = [];
      snapshot.forEach((doc) => {
        list.push({
          id: doc.id,
          name: doc.data().name,
          situation: doc.data().situation,
          created: doc.data().created,
        });
      });
      setEquipmentsModal(list);
    });
  }, []);

  async function handleDelete(id) {
    const docRef = doc(db, "Equipamentos", id);
    toast.success("Equipamento deletado com sucesso");
    await deleteDoc(docRef);
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!situation) {
      toast.error("Selecione uma opção");
      return;
    }

    // Adicionando equipamentos ao banco de dadoss
    addDoc(collection(db, "Equipamentos"), {
      name: equipments,
      situation: situation,
      created: new Date(),
    })
      .then(() => {
        setEquipments("");
        setPres("")
        if (situation == "data"){
          toast.success("Data registrada com sucesso");
        }else{
          toast.success("Equipamento registrado ")
        }
      })
      .catch((error) => {
        console.log("Erro ao cadatrar" + error);
        toast.error("Error");
      });
  };
  return (
    <>
      <Global />
      <Container>
        <Navbar />
        <ContainerForm>
          <Form onSubmit={handleSubmit}>
            <Field>
              <Label>Equipamentos</Label>
              {equipments.length < 45 
              ? 
              (<>
              <InputText
                type="text"
                name="equipments"
                id="equipments"
                value={equipments}
                onChange={(e) => setEquipments(e.target.value)}
                required
              />
              </>) 
              : 
              (<>
              <InputText
                type="text"
                name="equipments"
                id="equipments"
                value={equipments}
                onChange={(e) => setEquipments(e.target.value)}
                required
                style={{
                height: "100vh", 
                maxHeight: "40px",
                width:"100%",
                maxWidth:"80%"
              }}
              />
              
              </>)}
            </Field>
            <Field>
            <Label htmlFor="equipments">Situação</Label>
            <Select
              name="equipments"
              id="equipments"
              value={situation}
              onChange={(e) => setSituation(e.target.value)}
              disabled={change}
            >
              <option></option>
              <option value={"Liberado"}> Liberado </option>
              <option value={"Não-liberado"}> Não Liberado </option>
              <option value={"Em-liberação"}> Em Liberação </option>
              <option value={"Data"}> Data </option>
              <option value={"Reserva"}> Equipamento Reserva </option>
              <option value={"Proximo-dia"}> Equipamento para o proximo dia </option>
              <option value={"Apoio"}> Equipamento de Apoio </option>
              <option value={"RT01"}> RT01 </option>
              <option value={"RT02"}> RT02 </option>
              <option value={"RT03"}> RT03 </option>
              <option value={"RT04"}> RT04 </option>
              <option value={"RT05"}> RT05 </option>
              <option value={"RT06"}> RT06 </option>
              <option value={"RT07"}> RT07 </option>
              <option value={"RT08"}> RT08 </option>
              <option value={"RT09"}> RT09 </option>
              <option value={"RT10"}> RT10 </option>
              <option value={"RT11"}> RT11 </option>
              <option value={"RT12"}> RT12 </option>
              <option value={"RT13"}> RT13 </option>
              <option value={"RT14"}> RT14 </option>
              <option value={"RT15"}> RT15 </option>
              <option value={"RT16"}> RT16 </option>
              <option value={"RT17"}> RT17 </option>
              <option value={"RT18"}> RT18 </option>
              <option value={"ST01"}> ST01 </option>
              <option value={"ST02"}> ST02 </option>
              <option value={"ST03"}> ST03 </option>
              <option value={"ST04"}> ST04 </option>
              <option value={"ST05"}> ST05 </option>
              <option value={"ST06"}> ST06 </option>
            </Select>
          </Field>
            <ButtonSection>
              <button type="submit">Enviar</button>
            </ButtonSection>
          </Form>
          {equipmentsModal.length > 0 ? (
            <ModalSection>
              <div className="modal-div">
              {equipmentsModal.map((item, index) => {
                const toggleColor = (item) => {
                  switch(item.situation || item.situationDois){
                    case"Liberado": return "green";
                    case "Em-liberação": return "yellow";
                    case "Não-liberado": return "red";
                    case "Reserva": return "blue";
                    case "Proximo-dia": return "white";
                    case "Apoio" : return "orange";
                    case "Data" : return "greenyellow";
                    default : return "tan";
                  }
                }
                return(
                  <>
                    <div 
                    key={index}
                    style={{borderColor: toggleColor(item)}}
                    >
                      <p>{item.name}</p>
                      <button onClick={() => handleDelete(item.id)}>X</button>
                    </div>
                  </>
                )
              })}
            </div> 
            </ModalSection>
          ) : (
            <></>
          )}
        </ContainerForm> 
      </Container>
    </>
  );
}
