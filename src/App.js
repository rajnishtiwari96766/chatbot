import logo from './logo.svg';
import './App.css';
import Chatbot from "react-simple-chatbot";
// import { ReactSimpleChatbot } from 'react-simple-chatbot';
// import {Segment} from "semantic-ui-react";


function App() {
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
          {value: 'science', label: 'science', trigger: 'science'},
          {value:'commerce',label:'commerce',trigger:'commerce'},
          {value:'Arts',label:'Arts',trigger:'Arts'},
        ]
      },
      {
        id: 'science',
        options:[
          {value:'PCM',label:'PCM',trigger:'PCM'},
          {value:'PCB',label:'PCB',trigger:'PCB'},
      ],
      },
      {
        id:'PCM',
        message:'PCM',
        end:true
      },
      {
        id:'PCB',
        message:'PCB',
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
        message:'CA',
        end:true
      },
      {
        id:'CS',
        message:'CS',
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
        message:'BA',
        end:true
      },
      {
        id:'Civil Services',
        message:'Civil Services',
        end:true
      },
      //options after 12th
      {
        id:'Opt2',
        message:'which stream did you choose after 12th',
        trigger:'stream'
      },
      {
        id:'stream',
        options:[
          {value:'science',label:'science',trigger:'science'},
          {value:'commerce',label:'commerce',trigger:'commerce'},
          {value:'Arts',label:'Arts',trigger:'Arts'}
        ],
      }, 
  ];
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
