import React, { useState } from "react";
import SockJsClient from 'react-stomp';


export const EditPage = () => {
  const [text, setText] = useState("");

  // const handleMessage = (stompMessage) => {
  //   this.setState({
  //     latestMessage: stompMessage,
  //   });
  // };

  return (
    <div>
      <SockJsClient
        url={'https://comesa.peaqock.com/api/stomp'}
        topics={["/topic/offer-edit"]}
        headers={{ offerId: '631a01164ecb1274d81134d7', login:'admin-au2@mail.com' }}
        onMessage={(msg) => {
          console.log(msg);
        }}
        ref={(client) => {
          console.log("connected", client);
        }}
        
      />
        <h1>Edit Me</h1>
        <input
          placeholder="Enter some text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={() => alert(text)}>Publish </button>
      {/* </SockJsClient> */}
    </div>
  );
};
