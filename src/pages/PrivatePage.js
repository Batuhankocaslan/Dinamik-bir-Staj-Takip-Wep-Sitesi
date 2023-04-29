import React, { useState } from 'react'
import '../components/App.css';
import { Header } from '../partials/header';
import styled from 'styled-components';
import Footer from '../partials/Footer';
import axios from 'axios';
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Table,
} from "reactstrap";
import FormInput from "../components/FormInput";
import ModalForm from "../components/ModalForm";
import ButtonForm from "../components/ButtonForm";

const StyledPrivatePage = styled.div`
color: #fefae0;

.pre-container{
  color: black;
  font-weight: 900;
  font-size: 100%;
  border-style: inset;
  border-color: #457b9d;
  padding-top: 1px;
  padding-bottom: 1px;
  width: 378px;
  position: absolute;
  right: 0;
  top: 200px;
}
`;

const PrivatePage = () => {
  const [file, setFile] = useState()

  function handleChange(event) {
    setFile(event.target.files[0])
  }
  function handleSubmit(event) {
    event.preventDefault()
    const url = '';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });
  }
  return (
    <StyledPrivatePage>
      <Header />
      <form onSubmit={handleSubmit}>
      <h1 style={{color:"black"}}>Staj Belgesi Yükleme Sayfası</h1>
          <input type="file" onChange={handleChange}/>
          <button type="submit" >Upload</button>
        </form>
        <Row style={{ height: "100%", color: "black"}}>
          <Col md="10">
            <Card>
              <CardHeader>
                <CardTitle tag="h4" >Kaydedilen Belgeler</CardTitle>
              </CardHeader>
              <CardBody>
                <Row className="col-12">
                  <Table>
                  <thead className="text-primary">
                      <tr style={{ background: "#f5efff ", color: "#7371fc" }}>
                        <th className="text-center" >Yüklenen Belge Adı</th>
                        <th className="text-center"> Belgeyi Görüntüle</th>
                        <th className="text-center"> Sil </th>
                        <th className="text-center"> Tarih </th>
                      </tr>
                    </thead>
                    
                  </Table>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      <Footer />
    </StyledPrivatePage>

  );
  }


export default PrivatePage;