import { useState, useEffect } from "react";
import "./App.css";

import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

function App() {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");

  const [user, setUser] = useState([]);
  const usersCollectionRef = collection(db, "user");

  //Delete User form database
  const deleteUser = async (id) => {
    const userDoc = doc(db, "user", id);
    await deleteDoc(userDoc);
  }

  //Update database
  const updateUser = async (id, age) => {
    const userDoc = doc(db, "user", id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
  };
  //Add data to the database
  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: newAge });
  };

  //Read data form database
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    <div className="App">
      <div>
        {user.map((user) => {
          return (
            <div>
              {" "}
              <h1>Name: {user.name}</h1>
              <h1>Age: {user.age}</h1>
              <button
                onClick={() => {
                  updateUser(user.id, user.age);
                }}
              >
                {" "}
                Increase Age{" "}
              </button>

              <button
                onClick={() => {
                  deleteUser(user.id);
                }}
              >
                Delete User
              </button>
            </div>
          );
        })}
      </div>

      <div>
        <input
          type="text"
          placeholder="Name"
          onChange={(event) => {
            setNewName(event.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Age"
          onChange={(event) => {
            setNewAge(event.target.value);
          }}
        />

        <button onClick={createUser}>Create User</button>
      </div>
    </div>
  );
}

export default App;
