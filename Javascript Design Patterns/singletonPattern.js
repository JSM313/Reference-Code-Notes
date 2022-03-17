// Singleton Pattern. => It is used to call only one object at a time, if we try to call another object then it will return the value of the previous object. This is why it is called a singleton.

const Singleton = (function () {
  let instance;

  function createInstance() {
    const object = new Object({ name: "Jasmeet" });
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA === instanceB); // returns true
// console.log(instanceA);
