const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

const db = admin.firestore();

exports.amountIncrease = functions.firestore
  .document("/donations/{pushId}")
  .onCreate((snap, context) => {
    const newValue = snap.data();
    var restRef = db.collection("funds").doc(newValue.funds_id);
    return db.runTransaction((transaction) => {
      return transaction.get(restRef).then((restDoc) => {
        const newAmount =
          restDoc.data().amount_donated + newValue.amount_donated;
        return transaction.update(restRef, {
          amount_donated: newAmount,
        });
      });
    });
  });
