import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import Login from "./login";
import LogOut from "./log-out";
const CLIENT_ID =
  "760068272484-0n6p67v1k5d9t1vi4tla6333f8c4o7h0.apps.googleusercontent.com";
const API_KEY = "AIzaSyD1zb-kx1wHtg7nPRkwumv7CRnat80oTEA";
const SCOPE = "https://www.googleapis.com/auth/drive.file";

function GoogleSlide() {
  const [presentationCopyId, setPresentationCopyId] = useState("");
  /* IMPORTANT */
  const templateID = "1jbHcgeD777FeugvckW6mDsmrD7wZ2LHEpnUdFROsKyA";

  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        scope: SCOPE,
        discoveryDocs: [
          "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
        ],
      });
    });
  }, []);

  const createFile = () => {
    const auth2 = gapi.auth2.getAuthInstance();
    if (auth2.isSignedIn.get()) {
      gapi.client.drive.files
        .copy({
          fileId: templateID,
          resource: { name: "SLIDE" },
        })
        .then((response) => {
          const presentationCopyId = response.result.id;
          window.open(
            "https://docs.google.com/presentation/d/" +
              presentationCopyId +
              "/edit",
            "_blank"
          );
        });
      alert("Espere unos segundos, por favor");
    } else {
      auth2.signIn();
    }
  };
  /* const requestBody = {
    title: "SLIDES_DIGNITA",
    parents: [templateID],
  }; */
  /*
  async function createFile() {
    try {
       let accessToken = gapi.auth.getToken().access_token;
      fetch(`https://www.googleapis.com/drive/v3/files`, {
        method: "POST",
        headers: new Headers({ Authorization: "Bearer " + accessToken }),
        body: JSON.stringify(requestBody),
      })
        .then((response) => {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          setNewPresentationID(data.presentationId);
          window.open(
            "https://docs.google.com/presentation/d/" +
              data.presentationId +
              "/edit",
            "_blank"
          ); 
        });
      const response = await copyPresentation(templateID, "SLIDES_DIGNITA");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    */

  return (
    <div>
      <Login />
      <LogOut />
      <button onClick={() => createFile()}>Copy and Open Slide</button>
    </div>
  );
}

export default GoogleSlide;
