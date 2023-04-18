import logo from './logo.svg';
import './App.css';
import Chatbot from "react-simple-chatbot";
import { useEffect } from 'react';
import call1 from 'react';
// import { ReactSimpleChatbot } from 'react-simple-chatbot';
// import {Segment} from "semantic-ui-react";


function App() {

  function api_call(){
    function call1(){
      // console.log('option clicked')
      return "Hello doc.";
    }
  }

  const handlecall=(event)=>{
    const value=event.target.value;
    if(value=='Medical'){
      call1();
    }
  }
  const steps = [
    {
      id: 'Greet',
      message: 'Hello,welcome to our website',
      trigger: 'Ask name'
    },
    {
      id: 'Ask name',
      message: 'Please enter your name',
      trigger: 'waiting1'
    },
    {
      id: 'waiting1',
      user: true,
      trigger: 'Name'
    },
    {
      id: 'Name',
      message: 'Hii {previousValue} select the class you have passed',
      trigger: 'class'
    },
    {
      id: 'class',
      options: [
        { value: 'tenth', label: 'tenth', trigger: 'tenth' },
        { value: 'twelth', label: 'twelth', trigger: 'twelth' },
      ],
    },
    
      {
        id: 'tenth',
        message: 'Choose one of the streams you would like to go for',
        trigger: 'Opt1'
      },
      {
        id: 'twelth',
        message: 'congratulations {Name} you have passed twelth',
        trigger:'Opt2'
      },
//options after tenth...
      {
        id: 'Opt1',
        options: [
          {value: 'science1', label: 'science', trigger: 'science1'},
          {value:'commerce1',label:'commerce',trigger:'commerce1'},
          {value:'Arts1',label:'Arts',trigger:'Arts1'},
        ]
      },
      {
        id: 'science1',
        options:[
          {value:'PCM1',label:'PCM',trigger:'PCM1'},
          {value:'PCB1',label:'PCB',trigger:'PCB1'},
      ],
      },
      {
        id:'PCM1',
        message:'Have a great future ahead',
        end:true
      },
      {
        id:'PCB1',
        message:'Have a great future ahead',
        end:true
      },

      {
        id: 'commerce1',
        options:[
          {value:'CA1',label:'CA'},
          {value:'CS1',label:'CS'},
      ],
      end:true
      },
      {
        id: 'Arts1',
        options:[
          {value:'BA1',label:'BA'},
          {value:'Civil Services1',label:'Civil Services'},
      ],
      end:true
      },
      
//options after 12th
      {
        id:'Opt2',
        message:'which stream did you choose after 10th',
        trigger:'stream'
      },
      {
        id:'stream',
        options:[
          {value:'science2',label:'science',trigger:'science2'},
          {value:'commerce2',label:'commerce',trigger:'commerce'},
          {value:'Arts2',label:'Arts',trigger:'Arts'}
        ],
      }, 
      {
        id: 'science2',
        options:[
          {value:'PCM2',label:'PCM',trigger:'PCM'},
          {value:'PCB2',label:'PCB',trigger:'PCB'},
      ],
      },
      {
        id:'PCM',
        message:'below is the list of the Engineering colleges',
        end:true
      },
    
      {
        id:'PCB',
        options:[
          {value:'Medical',label:'Medical',trigger:'Medical'},
          {value:'Pharma',label:'Pharma',trigger:'Pharma'}
        ]
      },
      {
        id:'Medical',
        // message:'Below is the list of best medical colleges in India',
        // options:[onclick={call1}],
        // end:true
    //     <select onChange={handlecall}>
    //   <option value='Medical'>
    //     Medical
    //   </option>
    // </select>
      },
      {
        id:'Pharma',
        message:'Below is the list of best Engineering colleges in India',
        end:true
      },

      {
        id: 'commerce',
        options:[
          {value:'CA',label:'CA',trigger:'CA'},
          {value:'CS',label:'CS',trigger:'CS'},
      ],
      },
      {
        id:'CA',
        message:'Below is the list of best CA insitutions in India',
        end:true
      },
      {
        id:'CS',
        message:'These are some of the best CS learning institutions',
        end:true
      },

      {
        id: 'Arts',
        options:[
          {value:'BA',label:'BA',trigger:'BA'},
          {value:'Civil Services',label:'Civil Services',trigger:'Civil Services'},
      ],
      },
      {
        id:'BA',
        message:'Best BA colleges...',
        end:true
      },
      {
        id:'Civil Services',
        message:'Best civil services colleges',
        end:true
      },
  ];

  // let API="colleges-in.herokuapp.com";

  // const fetchApiData=async(URL)=>{
  //   try{
  //     const res=await(fetch(URL));
  //     const data=await res.json();
  //     console.log(data);
  //   }catch(error){
  //     console.log(error);
  //   }
  // }

  // useEffect(()=>{
  //   fetchApiData(API);
  // },[]);
  
  return (
    <div className="App">
    
      {/* <Segment floated="right"> */}
      <Chatbot steps={steps}>
      </Chatbot>
      {/* </Segment> */}
    </div>

  );
}

export default App;
