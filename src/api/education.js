import db from "@/firebase/init";

function fetchFirstLevel() {
  return db.collection('level-first').get()
    .then(snapshot => {
      const steps = [];

      snapshot.forEach(doc => {
        const step = doc.data();
        step.id = doc.id;
        steps.push(step);
      });

      return steps;
    });
}

function fetchSecondLevel() {
  return db.collection('level-second').get()
    .then(snapshot => {
      const steps = [];

      snapshot.forEach(doc => {
        const step = doc.data();
        step.id = doc.id;
        steps.push(step);
      });

      return steps;
    });
}

function fetchKnowledgeBase() {
  return db.collection('knowledge-base').get()
    .then(snapshot => {
      const steps = [];

      snapshot.forEach(doc => {
        const step = doc.data();
        step.id = doc.id;
        steps.push(step);
      });

      return steps;
    });
}

export default {
  fetchFirstLevel,
  fetchSecondLevel,
  fetchKnowledgeBase,
}