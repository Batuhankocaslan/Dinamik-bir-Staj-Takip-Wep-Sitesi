import React, {useState}from "react";
import { withLayout } from "../partials/Layout";
import styled from "styled-components";
import axios from "axios";

const StyledProfilePage = styled.div`
card-body{
   position: center;
}

`;

export const ContactPage = () =>{
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
    return(
        <StyledProfilePage>
            
            <div className="container-xl px-4 mt-4">
    
    <hr className="mt-0 mb-4"/>
    <div className="row">
        <div className="col-xl-4">
           
            <div className="card mb-4 mb-xl-0">
                <div className="card-header">Profile Picture</div>
                <div className="card-body text-center">
                    
                    <img className="img-account-profile rounded-circle mb-2" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt=""/>
                   
                    <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                    
                    
                    <form onSubmit={handleSubmit}>
                    {/* <button className="btn btn-primary" type="file" onChange={handleChange}>Upload new image</button> */}
          <input className="btn btn-primary" type="file" onChange={handleChange}/>
        </form>
                </div>
            </div>
        </div>
        <div className="col-xl-8">
            <div className="card mb-4">
                <div className="card-header">Kişisel Bilgiler</div>
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label className="small mb-1" for="inputUsername">Ad Soyad</label>
                            <input disabled= {false} className="form-control" id="inputUsername" type="text"  />
                        </div>
                        <div className="row gx-3 mb-3">
                            <div className="col-md-6">
                                <label className="small mb-1" for="inputFirstName">Öğrenci Numarası</label>
                                <input className="form-control" id="inputFirstName" type="text"  />
                            </div>
                            <div className="col-md-6">
                                <label className="small mb-1" for="inputLastName">Bölüm</label>
                                <input className="form-control" id="inputLastName" type="text"  />
                            </div>
                        </div>
                        <div className="row gx-3 mb-3">
                            <div className="col-md-6">
                                <label className="small mb-1" for="inputOrgName">Sınıf</label>
                                <input className="form-control" id="inputOrgName" type="text"  />
                            </div>
                            <div className="col-md-6">
                                <label className="small mb-1" for="inputLocation">Staj Durumu</label>
                                <input className="form-control" id="inputLocation" type="text"/>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="small mb-1" for="inputEmailAddress">E-mail</label>
                            <input className="form-control" id="inputEmailAddress" type="email" />
                        </div>
                        <div className="row gx-3 mb-3">
                        
                            <div className="col-md-6">
                                <label className="small mb-1" for="inputBirthday">Yapılan Staj</label>
                                <input className="form-control" id="inputBirthday" type="text" name="birthday"  />
                            </div>
                        </div>
                        <button className="btn btn-primary" type="button">Kaydet</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

        </StyledProfilePage>
    )
}
export default withLayout(ContactPage);