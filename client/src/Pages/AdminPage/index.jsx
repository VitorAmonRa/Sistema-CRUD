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
  const [change, setChange] = useState(true);  
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
              <Label>Situação</Label>
              <Select
                name="equipments"
                id="equipments"
                value={situation}
                onChange={(e) => setSituation(e.target.value)}
              >
                <option value={"Liberado"}> Liberado </option>
                <option value={"Não-liberado"}> Não Liberado </option>
                <option value={"Em-liberação"}> Em Liberação </option>
                <option value={"Data"}> Data </option>
                <option value={"Reserva"}> Equipamento Reserva </option>
                <option value={"Proximo-dia"}> Equipamento para o proximo dia </option>
                <option value={"Apoio"}> Equipamento de Apoio </option>
                {/* <div className="checkbox">
                  <input
                   className="check1"
                    type="checkbox"
                    value="Liberado"
                    id="1"
                    checked={situation === "Liberado"}
                    onChange={(e) => setSituation(e.target.value)}
                  />
                  <label htmlFor="1">Liberado</label>
                </div>

                <div className="checkbox">
                  <input
                    type="checkbox"
                    value="em-liberação"
                    id="2"
                    checked={situation === "em-liberação"}
                    onChange={(e) => setSituation(e.target.value)}
                  />
                  <label htmlFor="2">Em Liberação</label>
                </div>

                <div className="checkbox">
                  <input
                    type="checkbox"
                    value="não-liberado"
                    id="3"
                    checked={situation === "não-liberado"}
                    onChange={(e) => setSituation(e.target.value)}
                  />
                  <label htmlFor="3">Não Liberado</label>
                </div>

                <div className="checkbox">
                  <input
                    type="checkbox"
                    value="reserva"
                    id="4"
                    checked={situation === "reserva"}
                    onChange={(e) => setSituation(e.target.value)}
                  />
                  <label htmlFor="4">Reserva</label>
                </div>

                <div className="checkbox">
                  <input
                    type="checkbox"
                    value="proximo-dia"
                    id="5"
                    checked={situation === "proximo-dia"}
                    onChange={(e) => setSituation(e.target.value)}
                  />
                  <label htmlFor="5">Proximo Dia</label>
                </div>

                <div className="checkbox">
                  <input
                    className="checkbox"
                    type="checkbox"
                    value="data"
                    id="6"
                    checked={situation === "data"}
                    onChange={(e) => setSituation(e.target.value)}
                  />
                  <label htmlFor="6">Data</label>
                </div>

                <div className="checkbox">
                  <input
                    type="checkbox"
                    value="Apoio"
                    id="7"
                    checked={situation === "Apoio"}
                    onChange={(e) => setSituation(e.target.value)}
                  />
                  <label htmlFor="7">Apoio</label>
                </div> */}

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
                    switch(item.situation){
                      case"Liberado": return "green";
                      case "em-liberação": return "yellow";
                      case "não-liberado": return "red";
                      case "reserva": return "blue";
                      case "proximo-dia": return "white";
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
