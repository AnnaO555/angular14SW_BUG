importScripts("./ngsw-worker.js");

var dbName = "acoachDB";
var inputs;

self.addEventListener("sync", (event) => {
  inputs = JSON.parse(event.tag);
  if (inputs.dbName === dbName) {
    event.waitUntil(getDataAndSend());
  }
});

function addData(result) {
  fetch(inputs.syncEndpoint, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: [
      {
        type: inputs.storeName,
        data: result,
        lastModifiedDate: new Date().getTime().toString(),
      },
    ],
  })
    .then(() => Promise.resolve())
    .catch(() => Promise.reject());
}

function getDataAndSend() {
  let db;
  const request = indexedDB.open(dbName);
  request.onerror = (event) => {
    console.log("indexedDB error" + event);
  };
  request.onsuccess = (event) => {
    db = event.target.result;
    getData(db);
  };
}

function getData(db) {
  const transaction = db.transaction([inputs.storeName]);
  const objectStore = transaction.objectStore(inputs.storeName);
  const request = objectStore.getAll();
  request.onerror = (event) => {
    console.log("indexedDB error" + event);
  };
  request.onsuccess = () => {
    addData(request.result);
  };
}
