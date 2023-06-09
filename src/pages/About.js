import React, { useState } from "react";
import { withLayout } from "../partials/Layout";
import styled from "styled-components";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Table,
  Input
} from "reactstrap";
import FormInput from "../components/FormInput";
import ModalForm from "../components/ModalForm";
import ButtonForm from "../components/ButtonForm";


const StyledAboutPage = styled.div`
  padding: 50px;
`;

const About = () => {
  const [showModal, setShowModal] = useState(false);
  const [showBModal, setShowBModal] = useState(false);
  const [selectedOgr, setSelectedOgr] = useState({
  
  });
  const students = [
    {
        ogr_no: "181307073",
        ogr_ad: "merve köse",
        s1_bas: "10/02/2022",
        s1_bit: "10/04/2022",
        durum_id: "Tamamlandı",
    },
    {
        ogr_no: "211307093",
        ogr_ad: "büşra çelikçioğlu",
        s1_bas: "10/02/2022",
        s1_bit: "10/03/2022",
        durum_id: "devam ediyor",
    },
    {
        ogr_no: "211307095",
        ogr_ad: "batuhan koçaslan",
        s1_bas: "10/02/2022",
        s1_bit: "10/03/2022",
        durum_id: "devam ediyor",
    },
    {
      ogr_no: "191307048",
        ogr_ad: "ömer faruk yılmaz",
        s1_bas: "10/02/2022",
        s1_bit: "10/03/2022",
        durum_id: "Tamamlandı",
    },
  ];
  const clickEventsOpen = () => {
    setShowModal(true);
    console.log(selectedOgr);
  };
  
  const clickEventsClose = () => {
    setShowModal(false);
    setShowBModal(false);
  };
  const downloadbutton = () =>{
    setShowBModal(true);
    console.log("İçeride");
  }
 
  return (
    <StyledAboutPage>
      <div className="content pb-0">
        <Row style={{ height: "100%" }}>
          <Col md="10">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Öğrenci Listesi</CardTitle>
              </CardHeader>
              <CardBody>
                <Row className="col-12">
                  <Table>
                    <thead className="text-primary">
                      <tr style={{ background: "#f5efff ", color: "#7371fc" }}>
                        <th className="text-center">Öğrenci Adı Soyadı</th>
                        <th className="text-center"> Numarası{""}</th>
                        <th className="text-center"> Staj Başlama Tarihi </th>
                        <th className="text-center"> Staj Bitiş Tarihi </th>
                        <th className="text-center"> Durumu </th>
                        <th className="text-center"> Staj Dosyasını İndir </th>
                      </tr>
                    </thead>
                    <tbody>
                      {students.map((student, i) => (
                        <tr
                          key={student.about}
                          style={{ fontSize: 14 }}
                         
                        >
                          <td className="text-center"  onClick={() => {
                            clickEventsOpen();
                          }}id="name">
                            {student.ogr_ad}
                          </td>
                          <td className="text-center"  onClick={() => {
                            clickEventsOpen();
                          }}id="no">
                            {student.ogr_no}
                          </td>
                          <td className="text-center"  onClick={() => {
                            clickEventsOpen();
                          }} id="sdate">
                            {student.s1_bas}
                          </td>
                          <td className="text-center"  onClick={() => {
                            clickEventsOpen();
                          }} id="edate">
                            {student.s1_bit}
                          </td>
                          <td className="text-center"  onClick={() => {
                            clickEventsOpen();
                          }} id="status">
                            {student.durum_id}
                          </td>
                          <td className="text-center" id="orderno">
                           <button type="button" onClick={() => {
                            downloadbutton();
                          }} className="btn btn-primary">İndir</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <ModalForm
          className="card-user"
          show={showModal}
          handleClose={clickEventsClose}
          Title={"Öğrenci Düzenle"}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
        >
          <Row>
          <Col>
              <FormInput
                name="ogrno"
                key={students.ogr_no}
                text="Öğrenci Numarası"
                value={students.ogr_no}
                type="text"
                required={true}
          
              />
            </Col>
            <Col>
              <FormInput
                name="name"
                key={students.ogr_ad}
                text="Öğrenci Adı Soyadı"
                value={students.ogr_ad}
                type="text"
                required={true}
             
              />
            </Col>
            <Col>
              <FormInput
                name="stjbaslangic"
                key={students.stj_bas}
                text="Staj Başlangıç Tarihi"
                value={students.stj_bas}
                type="text"
                required={true}
                
              />
            </Col>
            <Col>
              <FormInput
                name="stjbitis"
                key={students.stj_bit}
                text="Staj Bitiş Tarihi"
                value={students.stj_bit}
                type="text"
                required={true}
          
             
              />
                    
             
            </Col>
            <Col>
            <Input
              type="select"
              name="group_id"
              className="col inputNodeAdd mt-2"
              style={{
                fontWeight: "bold",
                fontSize: 15,
                background: "white",
                borderColor: "black",
              }}
              value={"deneme"}
            
            
            >
 {
                 <option value="1">Test</option>
                 
                 
              }
            </Input>
            </Col>
            
  
          </Row>
          <div className="form-element" >
                    Yapılan stajı seçiniz: 
                <select >
                    <option value="1" >Staj 1</option>
                    <option value="2">Staj 2</option>
                    <option value="3">İME</option>
                    
                </select>
            </div>
            <li className="list-group-item">
                <a href="http://localhost:3000/deneme">                Öğretmen Ataması İçin Tıklayınız.
 </a>
        
              </li>
              <button  type="guncellebutton" onClick={() => {
                        
                          }} className="btn btn-success" >Güncelle</button>


               <button type="silbutton" onClick={() => {
                        
                      }} className="btn btn-danger">Sil</button>
        </ModalForm>
        
        <ButtonForm 
        className="card-user"
          show={showBModal}
          handleClose={clickEventsClose}
          Title={"Düzenle"}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter">

        </ButtonForm>
      </div>
    </StyledAboutPage>
  );
};
export default withLayout(About);