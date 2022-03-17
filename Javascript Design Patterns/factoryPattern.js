// Factory Pattern:- Used when there are different objects but they share common features.

class MemberFactory {
  createMember(name, type) {
    let member;

    if (type === "simple") {
      member = new SimpleMembership(name);
    } else if (type === "standard") {
      member = new StandardMembership(name);
    } else if (type === "super") {
      member = new SuperMembership(name);
    }
    //I just assigned the 'type' inside the Membership

    member.define = function () {
      console.log(`${this.name} (${this.type}) ${this.cost}`);
    };
    return member;
  }
}

class SimpleMembership {
  constructor(name) {
    this.name = name;
    this.type = "Simple";
    this.cost = "$5";
  }
}

class StandardMembership {
  constructor(name) {
    this.name = name;
    this.type = "Standard";
    this.cost = "$15";
  }
}

class SuperMembership {
  constructor(name) {
    this.name = name;
    this.type = "Super";
    this.cost = "$25";
  }
}

const members = [];

const factory = new MemberFactory();

members.push(factory.createMember("John Johnson", "simple"));
members.push(factory.createMember("Mary Williams", "standard"));
members.push(factory.createMember("Harry Jones", "standard"));
members.push(factory.createMember("Lisa Kudrow", "super"));

console.log(members);

members.forEach((member) => member.define());
