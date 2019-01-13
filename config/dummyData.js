const dummyData = [
  {
     title: "React",
     id: 1,
     questions: [
       {
         question: "What is React?",
         answer: "A library for managing user interfaces"
       },
       {
         question: "Where do you make Ajax requests in React?",
         answer: "The componentDidMount lifecycle event"
       }
     ]
   },
   {
     title: "JavaScript",
     id: 2,
     questions: [
       {
         question: "What is a closure?",
         answer: "The combination of a function and the lexical environment within which that function was declared."
       }
     ]
   },
   {
     title: "Redux",
     id: 3,
     questions: [
       {
         question: "Benefits of Redux?",
         answer: "Maintenance of Redux becomes easier due to strict code structure and organisation."
       },
       {
         question: "Where can Redux be used?",
         answer: "Redux is majorly used is a combination with reacting. it also has the ability to get used with other view libraries too."
       },
       {
         question: "Explain action’s in Redux?",
         answer: "Actions in Redux are functions which return an action object."
       },
       {
         question: "What is the concept of “single source of truth” in Redux?",
         answer: "The state of your whole application is stored in an object tree within a single store."
       }
     ]
   }
 ];

  export default dummyData;